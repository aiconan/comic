<template>
	<div class="search">
        <v-app-bar 
            app
            dark
            color="primary"
        >
            <v-btn 
                icon
                @click="$router.push({path: `/home`})"
            >
                <v-icon>home</v-icon>
            </v-btn>
            <input 
                ref="input" 
                maxlength="44" 
                placeholder="搜索，其实很简单"
                @input="search(query)" 
                v-model="query"
            />
            <v-spacer></v-spacer>
        </v-app-bar>
        <transition-group name="fade-transition">
        <v-list 
            two-line
            v-if="loading === false && data !== false"
            key="result"
        >
                <transition
                    name="scale-transition"
                    v-for="item in data"
                    :key="item.comic_id"
                >
                <v-list-item 
                    v-if="item.show"
                    v-ripple="{ class: `blue--text` }" 
                >
                    <v-list-item-avatar
                        @click="look(item.comic_id, item.comic_name, item.cartoon_author_list_name)"
                    >
                        <v-icon>
                            {{ history_now ? 'history' : 'open_in_new' }}
                        </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content
                        @click="look(item.comic_id, item.comic_name, item.cartoon_author_list_name)"
                    >
                        <v-list-item-title 
                            v-text="item.comic_name"
                        >
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            <span v-text="item.cartoon_author_list_name"></span>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action 
                        v-if="history_now"
                    >
                        <v-btn 
                            icon
                            @click="item.show=false;del_history(item.comic_id)"
                        >
                            <v-icon>delete</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
                </transition>
        </v-list>
        </transition-group>
	</div>
</template>

<script>
export default {
	name: 'Search',

	data: () => ({
        api: 'https://m.kanman.com/api/serachcomic/',
        loading: false,
        query: false,
        data: false,
        history: false,
        history_now : true
    }),

    mounted: function(){
        this.query = this.$route.params.query || null;
        this.history = window.JSON.parse(window.localStorage.history);
        this.search(this.query);
    },

    methods: {
        search: function(query){
            this.loading = true;
            if(!query){
                this.data = this.history; 
                this.history_now = true;
                this.$router.push({path: `/search/`});
                setTimeout(()=>{this.loading = false},100);
                return false;
            }
            this.data = false;
            this.$axios.get(this.api, {
                params: {
                    'serachKey': query
                }
            }).then(response => {
                var _d = response.data.data;
                var i = 0;
                for(i=0;i<_d.length;i++) {
                    _d[i].show = true;
                }
                this.data = _d;
                this.$router.push({path: `/search/${this.query}`});
                this.history_now = false;
                setTimeout(()=>{this.loading = false},100);
            })
        },
        look: function(id, name, author){
            var _l = window.JSON.parse(window.localStorage.history);
            var _d = {show: true, comic_id: id, comic_name: name, cartoon_author_list_name: author};
            _l.forEach(function(item, index, arr) {
                if(item.comic_id == _d.comic_id) {
                    _l.splice(index, 1);
                }
            });
            _l.push(_d);
            window.localStorage.history = window.JSON.stringify(_l);
            this.$router.push({path: `/detail/${id}`});
        },
        del_history: function(id){
            var _l = window.JSON.parse(window.localStorage.history);
            _l.forEach(function(item, index, arr) {
                if(item.comic_id == id) {
                    _l.splice(index, 1);
                }
            });
            window.localStorage.history = window.JSON.stringify(_l);
            //this.history = window.JSON.parse(window.localStorage.history);
            //this.data = this.history;
        }
    }
}
</script>

<style 
    lang="scss"
    scoped
>
.v-toolbar.v-toolbar--collapsed {
    input {
        display: none;
    }
}
.v-toolbar input {
    -webkit-user-modify: read-write-plaintext-only;
    font-size: 16px;
    margin-left: 20px;
    width: 100%;
    outline: 0;
}
input::-webkit-input-placeholder {
    color: white;
}
.center {
    display: flex;
    justify-content: center;
}
.fade-transition-enter-active, .fade-transition-leave-active {
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.fade-transition-move {
  transition: transform 0.6s;
}
.fade-transition-enter, .fade-transition-leave-to {
  opacity: 0 !important;
}
</style>
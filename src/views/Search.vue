<template>
	<div class="search">
        <v-app-bar 
            app
            dark
            color="primary"
        >
            <v-btn 
                icon
                @click="$router.go(-1)"
            >
                <v-icon>arrow_back</v-icon>
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
        <transition name="scroll-y-reverse-transition">
        <v-list 
            two-line
            v-if="loading === false && data !== false"
            key="result"
        >
            <template>
                <v-list-item 
                    v-ripple="{ class: `blue--text` }" 
                    v-for="item in data" 
                    :key="item.comic_id"
                    @click="$router.push({path: `/detail/${item.comic_id}`})"
                >
                    <v-list-item-content>
                        <v-list-item-title 
                            v-text="item.comic_name"
                        >
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            <span v-text="item.cartoon_author_list_name"></span>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
        </transition>
	</div>
</template>

<script>
export default {
	name: 'Search',

	data: () => ({
        api: 'https://m.kanman.com/api/serachcomic/',
        loading: false,
        query: '',
        data: false
    }),

    watch: {
        '$route' (to, from) {
            this.query = to.params.query || '';
            if(!this.query) {
                this.data = false;
            } else {
                this.search(this.query);
            }
        }
    },

    mounted: function(){
        this.query = this.$route.params.query || '';
        this.search(this.query);
    },

    methods: {
        search: function(query){
            if(!query){
                this.data = false; 
                this.$router.push({path: `/search/`});
                return false;
            }
            this.loading = true;
            this.$axios.get(this.api, {
                params: {
                    'serachKey': query
                }
            }).then(response => {
                this.data = response.data.data;
                this.$router.push({path: `/search/${this.query}`});
                this.loading = false;
            })
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
</style>
<template>
	<div class="fond">
        <v-app-bar
            app
            color="primary"
            dark
        >
            <v-btn 
                icon
                @click="$router.push({path: `/home`})"
            >
                <v-icon>home</v-icon>
            </v-btn>

            <v-toolbar-title>收藏</v-toolbar-title>
        </v-app-bar>
        <v-container fluid>
            <v-expand-transition
                v-for="(item, index) in data"
                :key="index"
            >
            <v-card 
                v-show="item.show"
                class="mb-2"
            >
                <v-img
                    :src="'https://image.mhxk.com/mh/$$_2_1.jpg-800x400.jpg.webp'.replace('$$',item.id)"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    class="white--text align-end"
                    aspect-ratio="2"
                >
                    <template v-slot:placeholder>
                        <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                        >
                            <v-progress-circular indeterminate color="white darken-1">
                            </v-progress-circular>
                        </v-row>
                    </template>
                    <v-card-title v-text="item.name"></v-card-title>
                    <v-card-subtitle v-text="item.author"></v-card-subtitle>
                </v-img>
                <v-card-actions>
                    <v-btn 
                        icon
                        @click="$router.push({path: `/detail/${item.id}`})"
                    >
                        <v-icon>open_in_new</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn 
                        icon
                        @click="item.show=false;del(item.id)"
                    >
                        <v-icon>delete</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
            </v-expand-transition>
        </v-container>
	</div>
</template>

<script>
export default {
	name: 'Fond',

	data: () => ({
        data: false
    }),

    mounted: function(){
        if(window.localStorage.like == '[]'){
            this.$router.push({path: `/home`});
        }else{
            this.data = window.JSON.parse(window.localStorage.like);
        }
    },

    methods: {
        del: function(id){
            var _l = window.JSON.parse(window.localStorage.like);
            _l.forEach(function(item, index, arr) {
                if(item.id == id) {
                    _l.splice(index, 1);
                }
            });
            window.localStorage.like = window.JSON.stringify(_l);
            if(window.localStorage.like == '[]'){
                this.$router.push({path: `/home`});
            }
        }
    }
}
</script>

<style 
    lang="scss"
    scoped
>
.theme--light.v-card > .v-card__text, .theme--light.v-card .v-card__subtitle {
    color: #FFFFFF;
}
.expand-transition-enter-active, .expand-transition-leave-active {
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.expand-transition-move {
  transition: transform 0.6s;
}
</style>
<template>
	<div class="fond">
        <v-app-bar
            app
            color="primary"
            dark
            hide-on-scroll
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
            <v-card 
                v-for="(item, index) in data"
                :key="index"
                class="mb-2"
            >
                <v-img
                    :src="'https://image.mhxk.com/mh/$$_2_1.jpg-800x400.jpg.webp'.replace('$$',item.id)"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="180px"
                >
                    <template v-slot:placeholder>
                        <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                        >
                            <v-progress-circular indeterminate color="light-blue darken-1">
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
                        @click="del(item.id)"
                    >
                        <v-icon>delete</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
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
            this.data = window.JSON.parse(window.localStorage.like);
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
</style>
<template>
	<div 
        class="detail" 
        v-if="loading === false"
    >
        <v-app-bar
        app
        color="primary"
        dark
        >
            <v-btn 
                icon
                @click="$router.push({path: `/search`})"
            >
                <v-icon>search</v-icon>
            </v-btn>

            <v-toolbar-title 
                v-text="data.comic_name+' - '+data.comic_author"
            ></v-toolbar-title>
        </v-app-bar>
        <v-card
            class="mx-auto"
            elevation="0"
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-2">详情</v-list-item-title>
                    <v-list-item-subtitle>
                        漫画名称：{{ data.comic_name }}
                        <br/>
                        作者：{{ data.comic_author }}
                        <br/>
                        出版：{{ data.comic_media }}
                        <br/>
                        简介：{{ data.comic_desc }}
                    </v-list-item-subtitle>
                    <div>
                        <v-chip 
                            v-for="item in data.comic_type_new" 
                            :key="item.urlid" 
                            v-text="item.name"
                            class="mt-1 mr-1"
                            color="cyan"
                            text-color="white"
                        ></v-chip>
                    </div>
                </v-list-item-content>
                <v-img
                    contain
                    :src="data.cover_list[0]"
                    class="mt-2 mb-2 ml-2"
                    max-width="120"
                    max-height="200"
                ></v-img>
            </v-list-item>
        </v-card>
        <v-divider></v-divider>
        <v-banner 
            id="contents"
            single-line
        >
            目录
            <template v-slot:actions>
                <v-btn
                    text
                    class="mr-2"
                    color="light-blue darken-1"
                    @click="data.comic_chapter = data.comic_chapter.reverse()"
                >倒序</v-btn>
            </template>
        </v-banner>
        <v-list style="margin-top: -2px">
            <template>
                <v-list-item 
                    v-ripple="{ class: `blue--text` }" 
                    v-for="item in data.comic_chapter" 
                    :key="item.chapter_newid"
                    @click="$router.push({path: `/view/${id}/${item.nowindex}`})"
                >
                    <v-list-item-content>
                        <v-list-item-title 
                            v-text="item.chapter_name"
                        >
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
	</div>
</template>

<script>
export default {
	name: 'Detail',

	data: () => ({
        api: 'https://m.kanman.com/api/getcomicinfo_body',
        loading: true,
        id: false,
        data: false
    }),

    watch: {
        '$route' (to, from) {
            this.id = to.params.id || false;
            if(!this.id) {
                this.id = false;
            } else {
                this.detail(this.id);
            }
        }
    },

    mounted: function(){
        this.id = this.$route.params.id || false;
        this.detail(this.id);
    },

    methods: {
        detail: function(id){
            if(!id){
                this.$router.go(-1);
            }
            this.loading = true;
            this.$axios.get(this.api, {
                params: {
                    'comic_id': id
                }
            }).then(response => {
                this.data = response.data.data;
                this.$router.push({path: `/detail/${this.id}`});
                var i = 0;
                for(i=0;i<this.data.comic_chapter.length;i++){
                    this.data.comic_chapter[i].nowindex = i;
                }
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
.v-application .headline {
    font-size: 20px!important;
}
.v-list-item__title, .v-list-item__subtitle {
    -webkit-box-flex: unset;
    -ms-flex: unset;
    flex: unset;
    overflow: auto;
    text-overflow: unset;
    white-space: unset;
    line-height: 1.4;
    font-size: 0.92rem;
}
</style>

<style>
.theme--light.v-banner .v-banner__wrapper {
    border-bottom: unset;
}
.v-banner__wrapper {
    padding-left: 16px!important;
}
.v-banner__text {
    font-size: 20px;
}
</style>
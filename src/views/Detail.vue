<template>
	<div    
        class="detail"
        v-if="show"
    >
        <transition
            name="fade-transition"
        >
        <v-row
            v-if="loading === true"
            class="fill-height ma-0"
            style="height: 100vh"
            align="center"
            justify="center"
        >
            <v-progress-circular indeterminate color="light-blue darken-1">
            </v-progress-circular>
        </v-row>
        <div 
            class="success"
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

            <v-toolbar-title>
                <div v-text="data.comic_name"></div>
                <span v-text="data.comic_author"></span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn 
                icon
                @click="like()"
            >
                <v-icon>{{ fond ? 'favorite':'favorite_border' }}</v-icon>
            </v-btn>
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
                        <!-- <br/>
                        分类：<span 
                            v-for="item in data.comic_type_new"
                            :key="item.urlid"
                            class="mr-1"
                        >{{ item.name }}</span> -->
                        <br/>
                        简介：{{ data.comic_desc }}
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-img
                    :src="data.cover_list[0].replace('http://','https://')"
                    class="mt-2 mb-2 ml-2"
                    max-width="120"
                    min-height="160"
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
                </v-img>
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
                    @click="
                        $router.push({
                            name: 'view',
                            params: {
                                comic_id: id,
                                chapter_index: item.nowindex,
                                data: data
                            }
                        })
                    "
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
        </transition>
	</div>
</template>

<script>
export default {
	name: 'Detail',

	data: () => ({
        api: 'https://m.kanman.com/api/getcomicinfo_body',
        loading: true,
        show: false,
        id: false,
        data: false,
        fond: false
    }),

    mounted: function(){
        setTimeout(() => {
            this.show = true;
        }, 400);
        this.id = this.$route.params.id || false;
        this.data = this.$route.params.data || false;
        var _l = window.JSON.parse(window.localStorage.like);
        var _id = this.id;
        var _f = false;
        _l.forEach(function(item, index, arr) {
            if(item.id == _id) {
                _f = true;
            }else{
                _f = false;
            }
        });
        this.fond = _f;
        if(this.data){
            this.load(this.data);
        } else {
            this.detail(this.id);
        }
    },

    methods: {
        detail: function(id){
            if(!id){
                this.$router.go(-1);
            }
            this.$axios.get(this.api, {
                params: {
                    'comic_id': id
                }
            }).then(response => {
                this.load(response.data.data);
            })
        },
        load: function(msg){
            this.data = msg;
            this.$router.push({path: `/detail/${this.id}`});
            var i = 0;
            for(i=0;i<this.data.comic_chapter.length;i++){
                this.data.comic_chapter[i].nowindex = i;
            }
            this.loading = false;
        },
        like: function(){
            var _l = window.JSON.parse(window.localStorage.like);
            var _d = {id: this.id, name: this.data.comic_name, author: this.data.comic_author, media: this.data.comic_media};
            if(this.fond === true){
                var _id = this.id;
                _l.forEach(function(item, index, arr) {
                    if(item.id == _id) {
                        _l.splice(index, 1);
                    }
                });
                this.fond = false;
            }else if (this.fond === false){
                _l.push(_d);
                this.fond = true;
            }
            window.localStorage.like = window.JSON.stringify(_l);
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
.v-toolbar__title {
    font-size: unset;
    line-height: 1;

    div {
        line-height: 22px;
        font-size: 16px;
    }
    span {
        line-height: 22px;
        font-size: 15px;
    }
}
.v-sheet {
    border-radius: 0px!important;
}
</style>

<style>
.theme--light.v-banner .v-banner__wrapper {
    border-bottom: unset!important;
}
.v-banner__wrapper {
    padding-left: 16px!important;
}
.v-banner__text {
    font-size: 20px;
}
</style>
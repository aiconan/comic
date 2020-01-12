<template>
	<div 
        class="view" 
        v-if="loading === false"
    >
        <v-app-bar
        app
        color="primary"
        dark
        hide-on-scroll
        >
            <v-btn 
                icon
                @click="$router.push({path: `/detail/${comic_id}`})"
            >
                <v-icon>arrow_back</v-icon>
            </v-btn>

            <v-toolbar-title> 
                <div v-text="data.comic_name+' - '+data.comic_author"></div>
                <span v-text="data.comic_chapter[chapter_index].chapter_name"></span>
            </v-toolbar-title>
        </v-app-bar>
        <div class="comic_box">
            <v-menu
                v-for="index in data.comic_chapter[chapter_index].end_num"
                :key="index"
                v-model="test"
                absolute
                offset-y
                style="max-width: 200px"
            >
            <template v-slot:activator="{ on }">
            <v-img
                v-on="on"
                transition="fade-transition"
                :src="'https://mhpic.jumanhua.com'+data.comic_chapter[chapter_index].rule.replace('$$',index)+'-kmh.middle.webp'"
                lazy-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg=="
            >
                <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                        <v-progress-circular indeterminate color="light-blue darken-1"></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
            </template>
            <v-list dense>
                <v-list-item
                    @click="download('https://mhpic.jumanhua.com'+data.comic_chapter[chapter_index].rule.replace('$$',index)+'-kmh.middle.webp')"
                >
                    <v-list-item-title>下载图片</v-list-item-title>
                </v-list-item>
            </v-list>
            </v-menu>
        </div>
        <div 
            v-if="loading === false"
            class="tool mt-2 mb-2"
            style="text-align: center"
        >
            <v-btn 
                outlined
                color="primary"
                class="ml-2 mr-2"
                style="float: left"
                key="loadlast"
                :disabled="Number(chapter_index) === data.comic_chapter.length"
                @click="$router.push({
                    name: 'view',
                    params: {
                        data: data,
                        comic_id: comic_id,
                        chapter_index: Number(chapter_index)+1
                    }
                })"
            >
                <v-icon left>keyboard_arrow_left</v-icon> 上一话
            </v-btn>
            <v-btn 
                outlined
                color="primary"
                key="loadcont"
                @click="$router.push({
                    name: 'detail',
                    params: {
                        data: data,
                        id: comic_id
                    }
                })"
            >
                目录
            </v-btn>
            <v-btn 
                outlined
                color="primary"
                class="mr-2"
                style="float: right"
                key="loadnext"
                :disabled="Number(chapter_index) === 0"
                @click="$router.push({
                    name: 'view',
                    params: {
                        data: data,
                        comic_id: comic_id,
                        chapter_index: Number(chapter_index)-1
                    }
                })"
            >
                下一话 <v-icon right>keyboard_arrow_right</v-icon>
            </v-btn>
        </div>
	</div>
</template>

<script>
export default {
	name: 'View',

	data: () => ({
        api: 'https://m.kanman.com/api/getcomicinfo_body',
        loading: true,
        comic_id: false,
        chapter_index: false,
        data: false
    }),

    watch: {
        '$route' (to, from) {
            this.data = to.params.data || false;
            this.comic_id = to.params.comic_id || false;
            this.chapter_index = to.params.chapter_index || false;
            if(!this.comic_id) {
                this.$router.go(-1);
            } else if(this.data) {
                this.load(this.data);
            } else {
                this.view(this.comic_id, this.chapter_index);
            }
        }
    },

    mounted: function(){
        this.comic_id = this.$route.params.comic_id;
        this.chapter_index = this.$route.params.chapter_index;
        if(this.$route.params.data){
            this.load(this.$route.params.data);
        }else{
            this.view(this.comic_id, this.chapter_index);
        }
    },

    methods: {
        view: function(comic_id, chapter_index){
            this.loading = true;
            this.$axios.get(this.api, {
                params: {
                    'comic_id': comic_id
                }
            }).then(response => {
                this.load(response.data.data);
            })
        },
        load: function(msg){
            this.data = msg;
            this.$router.push({path: `/view/${this.comic_id}/${this.chapter_index}`});
            this.loading = false;
            document.documentElement.scrollTop = 0;
        },
        download: function(url){
            window.open(url);
        }
    }
}
</script>

<style 
    lang="scss"
    scoped
>
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
</style>
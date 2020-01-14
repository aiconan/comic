<template>
	<div class="home" v-if="show === true">
        <div class="top_box">
            <v-row
                class="fill-height"
                align="end"
                justify="center"
            >
                <v-tooltip bottom color="light-blue">
                    <template v-slot:activator="{ on }">
                        <v-btn 
                            @click="$router.push({path: `/search`})"
                            color="light-blue" 
                            fab 
                            x-large 
                            dark 
                            v-on="on"
                        >
                            <v-icon>search</v-icon>
                        </v-btn>
                    </template>
                    <span>搜索</span>
                </v-tooltip>
            </v-row>
        </div>
        <div class="bottom_box">
            <v-row
                class="fill-height"
                align="start"
                justify="center"
            >
                <v-tooltip top color="light-blue">
                    <template v-slot:activator="{ on }">
                        <v-btn 
                            @click="$router.push({path: `/fond`})"
                            color="light-blue" 
                            fab 
                            x-large 
                            dark  
                            v-on="on"
                        >
                            <v-icon>favorite</v-icon>
                        </v-btn>
                    </template>
                    <span>收藏</span>
                </v-tooltip>
                <v-dialog 
                    v-model="del_dialog" 
                    :persistent="!del_disabled" 
                    max-width="300"
                >
                    <template v-slot:activator="{ on }">
                        <v-btn 
                            text
                            icon
                            v-on="on"
                            absolute
                            style="bottom: 10px"
                        >
                            <v-icon dark>delete</v-icon>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title class="headline">提示</v-card-title>
                        <v-card-text>
                            您确认要删除<strong>搜索历史</strong>与<strong>收藏</strong>吗？
                            <br/>
                            请注意，该操作是不可逆的。
                        </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn 
                                    text 
                                    v-if="!del_disabled"
                                    style="color: rgba(0, 0, 0, 0.6)"
                                    @click="del_dialog = false"
                                >
                                    取消
                                </v-btn>
                                <v-btn 
                                    text 
                                    color="light-blue darken-1"
                                    :loading="del_loading"
                                    :disabled="del_disabled"
                                    @click="del()"
                                >
                                    <div v-if="!del_disabled">确认</div>
                                    <v-icon v-else>check</v-icon>
                                </v-btn>
                            </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </div>
	</div>
</template>

<script>
export default {
	name: 'Home',

	data: () => ({
        show: false,
        del_loading: false,
        del_disabled: false,
        del_dialog: false
    }),

    mounted: function(){
        setTimeout(() => {
            this.show = true;
        }, 400);
        if(window.localStorage.history ==  '[]' && window.localStorage.like == '[]'){
            this.del_loading = false;
            this.del_disabled = true;
        }
    },

    methods: {
        del: function(){
            this.del_loading = true;
            window.localStorage.history =  '[]';
            window.localStorage.like = '[]';
            setTimeout(() => {
                this.del_loading = false;
                this.del_disabled = true;
                setTimeout(() => {
                    this.del_dialog = false;
                }, 100);
            }, 600);
        }
    }
}
</script>

<style 
    lang="scss"
    scoped
>
.top_box, .bottom_box {
    position: absolute;
    width: 100%;
    height: 40%;
}
.bottom_box {
    bottom: 0;
}
</style>
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
            </v-row>
        </div>
	</div>
</template>

<script>
export default {
	name: 'Home',

	data: () => ({
        show: false
    }),

    mounted: function(){
        setTimeout(() => {
            this.show = true;
        }, 400);
    },

    methods: {
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
<template>
  <v-app>
    <v-content>
      <transition :name="transitionName">
        <router-view 
          v-wechat-title="$route.meta.title"
        ></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  components: {
  },

  data: () => ({
    transitionName: 'fade-transition',
  }),

  mounted: function(){
    if(!window.localStorage.like){
      window.localStorage.like = window.JSON.stringify([]);
    }
    if(!window.localStorage.history){
      window.localStorage.history = window.JSON.stringify([]);
    }
  }
});
</script>
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
});
</script>

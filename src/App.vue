<template>
  <v-app>
    <v-main>
      <Header/>
      <Content/>
    </v-main>
  </v-app>
</template>

<script>
import Content from './components/Content.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',

  components: {
    Header,
    Content
  },

  data: () => ({
    //
  }),
}
</script>

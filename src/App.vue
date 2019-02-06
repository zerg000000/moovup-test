<template>
  <v-ons-navigator swipeable
    :page-stack="pageStack"
    :pop-page="goBack"
  ></v-ons-navigator>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      pageStack: []
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: this.$route.matched[this.$route.matched.length - 2].name });
    }
  },
  created() {
    
    const mapRouteStack = route => this.pageStack = route.matched.map(m => m.components.default);
    
    mapRouteStack(this.$route);
    
    this.$router.beforeEach((to, from, next) => mapRouteStack(to) && next());
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

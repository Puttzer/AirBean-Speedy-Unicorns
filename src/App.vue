<template>
  <div id="app">
    <!-- a comment for pull request! -->
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("getMenuList");
  }
};
</script>

<style lang="scss">
:root {
  @import url("https://fonts.googleapis.com/css?family=PT+Serif:700|Work+Sans:400,600&display=swap");
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: block;
  width: 100%;
  font-family: "Work Sans";
  text-align: center;
  box-sizing: border-box;
  margin: 0;
}
</style>
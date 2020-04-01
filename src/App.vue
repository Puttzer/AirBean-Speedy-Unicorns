<template>
  <div id="app">
    <div id="nav">
    </div>
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

<style  lang="scss">
:root {
  @import url("https://fonts.googleapis.com/css?family=PT+Serif:700|Work+Sans:400,600&display=swap");
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Work Sans";
  text-align: center;
  box-sizing: border-box;
  max-width: 480px;
  margin: 0;
  background: white;
}

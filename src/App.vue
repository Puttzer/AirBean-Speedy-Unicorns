<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>

// iff errors persists the add a div with id app?

    <router-view/>
  </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getMenuList");
  }
};
</script>

<style  lang="scss">
*{
margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 10px;
}

html {
  background: white;
  max-width: 200vw;
  height: auto;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  width: 37.5rem;
  min-height: 66.7rem;
  background: white;
}
</style>

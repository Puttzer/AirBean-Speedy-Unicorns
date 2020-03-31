<template>
  <div id="app">
    <div id="nav">
      <!-- <Navigation v-if="seeNavigation"/>  -->
      <!-- <router-link to="/"></router-link>  -->
    </div>
    <router-view />
  </div>
</template>

<script>
// import Navigation from './components/Navigation'
export default {
  name: "App",
  components: {
    // Navigation
  },
  // computed:{
  //   seeNavigation(){
  //     return this.$store.state.seeNavigation
  //   }
  // }
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
  color: #38846d;
  background: #f3e4e1;
  box-sizing: border-box;
  max-width: 480px;
  margin: 0;
  max-width: 200vw;
  height: auto;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

// export default {
//   created() {
//     this.$store.dispatch("getMenuList");
//   }
// };
// </script>

// <style  lang="scss">
// *{
// margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-size: 10px;
// }

// html {
//   background: white;
//   max-width: 200vw;
//   height: auto;
//   padding: 2rem 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// #app {
//   width: 37.5rem;
//   min-height: 66.7rem;
//   background: white;

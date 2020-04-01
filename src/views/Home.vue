<template>
  <div class="home">
<<<<<<< HEAD
    <div class="Landing-Page">
      <img
        src="../assets/graphics/airbean-landing.svg"
        alt="landing"
        class="airbean-landing"
        v-on:click="()=>$router.push('Meny')"
      />
    </div>
=======
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
>>>>>>> 561dcf3aba7bd9cf975ef6b3ce07b01b1c4cd6d0
  </div>
</template>

<script>
// @ is an alias to /src
<<<<<<< HEAD

export default {
  name: "Home"
};
=======
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
>>>>>>> 561dcf3aba7bd9cf975ef6b3ce07b01b1c4cd6d0
</script>



<style lang="scss">
.home {
  position: relative;
  width: 500px;
  margin: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/graphics/intro-graphic-left.svg") center left
      no-repeat,
    url("../assets/graphics/intro-graphic-right.svg") center right no-repeat;
  background-color: darkgreen;
  background-size: contain;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
}
</style>



<template>
  <div class="home">
    <div class="Landing-Page">
      <img
        src="../assets/graphics/airbean-landing.svg"
        alt="landing"
        class="airbean-landing"
        v-on:click="()=>$router.push('Meny')"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
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



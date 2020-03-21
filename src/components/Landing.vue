<template>
  <div class="Landing-Page">
    <h1>{{ msg}}</h1>
    <img src= "../assets/graphics/airbean-landing.svg" alt="landing" class="airbean-landing" 
      v-on:click="()=>$router.push('Navigation')"
    
    />
    
  
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style  lang="scss" >
body{
  background-color: green;
}

</style>

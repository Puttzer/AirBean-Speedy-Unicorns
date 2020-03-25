<template>
  <div class="home">
    <div class="Landing-Page">
    <h1>{{ msg}}</h1>
    <img src= "../assets/graphics/airbean-landing.svg" alt="landing" class="airbean-landing" 
      v-on:click="()=>$router.push('Navigation')"
    
    />
  
    
  </div>
  
  
    
  </div>
    
</template>

<script>
// @ is an alias to /src
 

export default {
  name: 'Home',
  
}
</script>

<style lang="scss" >
body{
  background-color:hotpink;
}

</style>



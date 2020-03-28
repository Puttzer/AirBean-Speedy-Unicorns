<template>
  <div class="home">
    <div class="Landing-Page" @click="$router.push('/Navigation')">
        <img src= "../assets/graphics/airbean-landing.svg" alt="landing" class="airbean-landing" 
      
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



<style lang="scss">
.home{
  height: 100vh;
  background-color: rgb(20, 63, 20);
  background-image: url('./../assets/graphics/intro-graphic-left.svg'), url('./../assets/graphics/intro-graphic-right.svg') ; 
  background-position: top left, top right ;
  background-size: auto 100%, auto 100% ;
  background-repeat: no-repeat, no-repeat ;
  display: flex;
  justify-content: center;
  align-items: center;
}
  

</style>



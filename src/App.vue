<template>
  <div id="app">
     <div id ="nav">
   
       <Navigation v-if="seeNavigation"/>
      <!-- <router-link to="/"></router-link>  -->
      
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default { 
  name:'App',
  components:{
  Navigation
  },
  computed:{
    seeNavigation(){
      return this.$store.state.seeNavigation
    }
  }
  
}


</script>

<style  lang="scss">
:root {
    @import url('https://fonts.googleapis.com/css?family=PT+Serif:700|Work+Sans:400,600&display=swap');
}
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  font-family:'Work Sans';
  text-align: center;
  color: #38846D;
  background: #F3E4E1;
  box-sizing: border-box;
  max-width: 480px;
  margin: 0; 
  
}
<template>
<div class="Nav-Container">
    <div class="Nav-Items">
         <button v-on:click="()=>$router.push('Meny')">Meny</button>
         <button v-on:click="()=>$router.push('VårtKaffe')">VårtKaffe</button>
         <button v-on:click="()=>$router.push('Orderstatus')">Orderstatus</button>
    </div>  
  
   </div>
  
</template>

<script>
export default {
    name: 'Navigation',
  props: {
    msg: String
  }

}
</script>

<style lang ="scss">
body{
  background-color: black;
}
.Nav-Container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Nav-items{
  height: 40px;
  margin-bottom: 10px;
}



</style>
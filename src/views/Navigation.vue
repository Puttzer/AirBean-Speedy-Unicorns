<template>
<div class ="Nav">
    <img src= "../assets/graphics/close.svg" alt="close" class="close" 
      v-on:click="()=>$router.push('Home')"
    
    />

  <div class="Nav-Container">
    <div class="Nav-Items">
         <button v-on:click="()=>$router.push('Meny')">Meny</button>
         <button v-on:click="()=>$router.push('VårtKaffe')">VårtKaffe</button>
         <button v-on:click="()=>$router.push('Orderstatus')">Orderstatus</button>
    </div>  
  
   </div>
   </div>

</template>


<script>


export default {
  name: 'Navigation',
  components: {
   
  }

}
</script>

<style lang="scss"  >

body{
  background-color: white;
}

.Nav-Container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
  justify-content: space-around;
}

.Nav-Items{
   margin: 10px;

}



button {
    width: 40%;
    padding: 5px;
    margin-right: 50px;
    border: none;
    text-align: center;
    border-radius: 10px;
    color:black;
    transition: 0.7s;
    text-decoration: none;
    font-size: 25px;
    
    &:hover {
      color:white;
      background: rgb(207, 192, 192);
      transition: 0.7s;
    
    
    }
  }


  .close {
  position: absolute;
  left: 32px;
  top: 32px;
  width: 40px;
  height: 40px;
  opacity: 0.3;
  border-radius: 50%;
  background: yellow;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

   


</style>

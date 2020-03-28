<template>
<div class ="Nav">
    <img src= "../assets/graphics/close.svg" alt="close" class="close" 
      v-on:click="()=>$router.push('/')"
    
    />

  <div class="Nav-Container">
    <div class="Nav-Items">
         <button v-on:click="()=>$router.push('Meny')">Meny</button>
         <button v-on:click="()=>$router.push('VårtKaffe')">VårtKaffe</button>
         <button v-on:click="()=>$router.push('Orderstatus')">Orderstatus</button>
         <button v-on:click="()=>$router.push('Profile')">Profile</button>
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

<style lang="scss"  scoped >

body{
  background-color: rgb(65, 61, 61);
}

.Nav-Container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  justify-content: space-around;
}

.Nav-Items{
   margin: 10px;

}



button {
    background: transparent;
    border :none;
    margin :20px auto 0;
    display: block;
    font-size:30px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    outline:none;
    color: white;

    position: relative;
    transition:0.3s;
    padding:10px; // the trick

    &:before{
        content :'';
        border-bottom :4px solid white;
        padding: 0 60px;
        position :absolute;
        bottom :0;
        left: 0;
        right :0;
        margin :0, auto;
        width: 0;
        transition: 0.3s;
    }
    &:hover:before{
        width :100%;
        padding: 0 ;// the other part of the trick
    }
    &:active{
        background: black;
        color: white;
        transition: none;
    
    
    }
}
  


  .close {
  position:absolute;
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

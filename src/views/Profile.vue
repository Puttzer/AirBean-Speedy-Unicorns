<template>
<div class="Container">

     <img src="../assets/graphics/profile.png" alt="profile">  
<div class="login" v-if="show == true">
</div>    
<Login v-if="show == true"/>
</div>
</template>

<script>

import Login from "@/components/Login.vue"
    export default {
    name: "Profile",
    data(){
        return{
        show:true   
        }
    },
    // created(){
    //     if(localStorage.getItem('airbeans')){
    //        this.show = true
    // } 
    // },
    components: {
        Login,
    
    }    
    }
</script>

<style lang="scss" scoped>
.Container{
     box-sizing: border-box;
      background-image: url('../assets/graphics/graphics-header.svg');
      background-position: top center, bottom center;
      background-repeat: no-repeat, no-repeat;
      background-size: 100%, 100%;
    background-color: #222;
    height: 100vh;
    img{
        
        color:grey;
        width: 6rem;
        z-index: 999;
        border-radius:100% ;
        top: 5rem;
        background: white;
        top:5rem;
    }
}
.login{
display: flex;
background-color: rgb(240, 106, 17);
height: 50vh;
display: grid;
grid-template-columns: 2rem 2rem 2rem;
grid-template-rows: 1fr 1fr;
}
</style>
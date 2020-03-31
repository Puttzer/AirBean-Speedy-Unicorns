<template>
    <div class = "menuicon" v-on:click="close">
        <img class="menuiconimage" v-if="type==='menuicon'" src='./../assets/graphics/navicon.svg' alt="menuicon"/>
        <img  class="menuiconimage" v-if="type==='close'" src='./../assets/graphics/close.svg' alt="close"/>
    </div>
</template>

<script>
    export default {
     name:'Menuicon',
     props:{
            type:String
        },
     methods:{
         close(){
            this.$store.commit('closeNavbar')
         }
     }        
    }
</script>

<style lang="scss">
  .menuicon {
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: .8rem;
        height:0.8rem;
        padding:1.6rem;       
        border-radius:100%;
        margin-top:40px;
        margin-left:30px;
     }
     .menuiconimage{
         width:200%;
     }
</style>
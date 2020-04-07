<template>
<div class="icon">
    <div class="carticon">
        <div class="count" >{{ cartLength }}</div>
        <img src="../assets/graphics/bag.svg" alt="Carticon" @click="showCart =! showCart" />
        <Cart v-if="showCart" />
</div>
    </div>
</template>

<script>
import Cart from './Cart'
    export default {
        name:'CartBag',
        components:{
            Cart
        },
        data(){
            return{
                showCart:false,
            }
        },
        computed:{
            cart(){
                return this.$store.state.cart

            },
            cartLength(){
                let total= 0;
                this.$store.state.cart.forEach(item =>{
                    total += item.quantity;
                });
                return total;
            }
        },
      
    }
</script>

<style lang="scss">
.icon{
    padding-left: 300px
}
.carticon {
    background:black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.2rem;
    height:1.2rem;
    padding:1.6rem;       
    border-radius:100%;
    float:right;
    margin-top:-150px;
    margin-right:30px;
    .count{
    position: absolute;
    width: 2rem;
    height: 2rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: orange;
    font-size: 1rem;
    font-weight: 700;
    z-index:99;
    margin-left:30px;
    }
    
    
}

</style>
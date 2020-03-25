<template>
    <div class="carticon" >
        <div class="count" >{{ cartLength }}</div>
        <img src="@/assets/graphics/bag.svg" alt="Carticon" @click="statusCart"/>
        <Cart v-if="showCart" />

    </div>
</template>

<script>
import Cart from './Cart'
    export default {
        name:'CartIcon',
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
           methods:{
             statusCart(){
                return this.showCart =! this.showCart
             }
          }
        
    }
</script>

<style lang="scss">
</style>
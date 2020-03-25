<template>
    <div class="cartitem">
        <h3 class="cartitemtitle">{{item.title}}<span class="dots"></span></h3>
        <p class="cartitemtotal">{{ totalamount }} kr </p>
        <div class="itemvalue">
            <img class="increse" 
            src="./../assets/graphics/arrow-up.svg" alt="uparrow" @click="increaseQuantity">
            <h4 class="count">{{ item.quantity }}</h4>
            <img class="decrese" src="./../assets/graphics/arrow-down.svg" alt="downarrow"
            @click="decreaseQuantity">
        </div>  
    </div>
</template>

<script>
    export default {
        name:'CartItem',
        props:{
            item:Object
        },
        computed:{
            totalamount(){
                return this.item.price * this.item.quantity
            }
        },
        methods:{
            increaseQuantity(){
                this.item.quantity++;

            },
            decreaseQuantity(){
                 if(this.item.quantity>1){
                     this.item.quantity--;
                 }else{
                     this.$store.commit('removeItemInCart',this.item.id)
                 }
            }
        }
        
    }
</script>

<style lang="scss">
.cartitem{
  display:grid;
//   max-width:420px;
  grid-template-columns:1fr 2rem;
  grid-template-rows:2rem 1.4rem;
  margin: 1rem 1rem;
  
  
    .cartitemtitle{
        margin: 0;
        padding: 0;
        display:flex;
        align-items:flex-end;
        .dots{
            flex:1;
            border-bottom:1px dotted black;
            margin:0 0 .3rem 0;
        }
    }
    .cartitemtotal{
        display:flex;
        align-items:flex-start;
        margin:0;
    }
    .itemvalue{
        grid-column: 2/3;
        grid-row:1/3;
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content:space-between;
        
        
        h4{
            font-weight:700;
            margin: .7rem 0 1rem 0;
        }
        
        .increse .decrese{
            margin: .25rem;
            
        }
    }
}

</style>
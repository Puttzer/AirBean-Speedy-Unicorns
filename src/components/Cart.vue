<template>
  <div class="cart">
    <h3>Din beställning </h3>
    <CartItem v-for="(item,index) in cart"
              v-bind:key="index"
              v-bind:item ="item" />
    <div class="totalamount">
      <h3>Total<span class="dots"></span>{{ totalamount }} kr </h3>
      <p> Inkl moms + drönarleverans </p>
    </div>
    <a href class="button" @click="sendOrder">Take My Money</a>
  </div>
</template>

<script>
import CartItem from './CartItem' 
export default {
  name: 'Cart',
  components:{
     CartItem,
  },
  computed:{
    cart(){
      return this.$store.state.cart
    },
    totalamount(){
      let totalamount = 0;
      this.$store.state.cart.forEach(item=>{
        totalamount += item.price * item.quantity
      })
      return totalamount
    }
  },
  methods:{
    sendOrder(){
      this.$store.dispatch('sendOrder')
      this.$router.push('/status')
    }
  }
}
</script>


<style lang="scss">

 .cart{
   position:fixed;
   background:white;
   top: 7rem;
   right: 1rem;
   left: 1rem;
   

   width:300px;
   margin: 1rem;
   box-shadow: 0 0 1rem rgba(0,0,0,.2), 0 0 4rem rgba(0,0,0,.2) ;
   
    
    &after {
     content: '';
        position: absolute;
        top: 0;
        left: 91%;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-bottom-color: white;
        border-top: 0;
        margin-left: -8px;
        margin-top: -8px;
        border-radius: 2px;
    }
   .totalamount{
     display:flex;
     flex-direction:column;
     margin: 2rem 1rem;
     h3{
       display: flex;
       margin:0;
      .dots{
         display:flex;
         justify-content:center;
         align-items:center;
          flex:1;
          border-bottom:2px dotted black;
          margin:3px;
       }
     }
     p{
       display:flex;
       justify-content:flex-start;
       margin:0 0 0 5px; 
       padding:0;
     }

   }
   .button{
        display: flex;
        font-size: 1.4rem;
        width: 90%;
        align-items:center;
        text-decoration: none;
        height: 4rem;
        margin: .7rem 1rem;
        justify-content: center;
        align-items: center;
        color: #eee;
        border-radius: 50px;;
        background:black;
        

        &:active {
            color: white;
            background: black;
        }
   }


 }
</style>

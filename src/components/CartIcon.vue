<template>
  <div class="icon">
    <div class="carticon">
      <div class="count">{{ cartLength }}</div>
      <img src="@/assets/graphics/bag.svg" alt="Carticon" @click="statusCart" />
      <Cart v-if="showCart" />
    </div>
  </div>
</template>	

<script>
import Cart from "./Cart";
export default {
  name: "CartIcon",
  components: {
    Cart
  },
  data() {
    return {
      showCart: false
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartLength() {
      let total = 0;
      this.$store.state.cart.forEach(item => {
        total += item.quantity;
      });
      return total;
    }
  },
  methods: {
    statusCart() {
      return (this.showCart = !this.showCart);
    }
  }
};
</script>	

<style lang="scss">
.icon {
  background-color: black;
  width: 75px;
  height: 75px;
  border-radius: 100%;
  margin-top: 35px;
  margin-right: 25px;
}
.carticon {
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.2rem;
  height: 0.8rem;
  padding: 1.6rem;
  border-radius: 100%;
  float: right;
  .count {
    position: absolute;
    width: 2.6rem;
    height: 2.6rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: orange;
    font-size: 1.5rem;
    font-weight: 700;
    z-index: 99;
    margin-left: 30px;
  }
}
</style> 	

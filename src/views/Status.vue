<template>
  <div class="status">
    <!-- After clicking "take my money" you will be directed here, Loading show first then orderstatus  -->
    <div class="loading" v-if="loading">
      <img src="./../assets/graphics/loader.png" alt="Generating order" />
    </div>
    <h1 v-if="loading">Brewing!</h1>

    <!-- After loading should display order information and time of arrival -->
    <h1 class="orderNum" v-if="order.orderNr">
      Ordernummer:
      <strong>#{{order.orderNr}}</strong>
    </h1>
    <div class="drone-order" v-if="order.orderNr">
      <img src="./../assets/graphics/drone.svg" alt />
      <h1>Din beställning är på väg!</h1>
    </div>
    <div class="eta" v-if="order.orderNr">
      <p>{{order.eta}} minuter</p>
    </div>
    <a href="#" class="btn" v-if="order.orderNr" @click="$router.push('/meny')">OK, Cool!</a>
  </div>
</template>

<script>
export default {
  computed: {
    order() {
      return this.$store.state.activeOrder;
    },
    loading() {
      return this.$store.state.load;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=PT+Serif:700|Work+Sans:400,600&display=swap");

.status {
  background: #e5674e;
  height: 100vh;
  color: white;
  text-align: center;
  padding: 1rem;

  .drone-order {
    img {
      padding-top: 20px;
      width: 300px;
      animation: hover 3s linear infinite;
    }
    @keyframes hover {
      0% {
        transform: translateY(0) rotateZ(0deg);
      }
      25% {
        transform: translateY(0.25rem) rotateZ(1deg);
      }
      50% {
        transform: translateY(0.5rem) rotateZ(0deg);
      }
      75% {
        transform: translateY(0.25rem) rotateZ(-1deg);
      }
      100% {
        transform: translateY(0) rotateZ(0deg);
      }
    }
    h1 {
      font-size: 36px;
      font-family: "PT Serif";
      color: white;
    }
  }
  .eta {
    font-family: "Work Sans";
  }
  .btn {
    display: flex;
    max-width: 14rem;
    width: 100%;
    font-family: "PT Serif", serif;
    font-size: 1.4rem;
    text-decoration: none;
    height: 4rem;
    margin: auto;
    justify-content: center;
    align-items: center;
    color: #222;
    border-radius: 999rem;
    background: rgba($color: #ffffff, $alpha: 0.8);
    &:active {
      background: white;
    }
  }
}
.loading {
  animation: none;
  padding-top: 250px;
}
.orderNum {
  padding-top: 20px;
  font-size: 16px;
  font-family: "Work Sans";
  color: rgba(255, 255, 255, 0.7);
}
h1 {
  font-family: "Pt Serif";
}
</style>
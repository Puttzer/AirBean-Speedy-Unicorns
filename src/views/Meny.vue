<template>
  <div class="menu">
    <section class="upp">
      <button class="menu-btn" @click="$router.push('/Navigation')">
        <img src="../assets/graphics/navicon.svg" />
      </button>
      <CartIcon />
    </section>
    <h1>Meny</h1>
    <section class="products">
      <ul>
        <li v-for="item in menu" :key="item.id" :item="item">
          <button @click="additem(item)" class="add-btn">
            <img src="../assets/graphics/add.svg" />
          </button>
          <h3 class="title">
            {{ item.title}}
            <span>..............</span>
          </h3>
          <p class="desc">{{ item.desc}}</p>
          <h3 class="price">{{ item .price }} kr</h3>
        </li>
      </ul>
    </section>
    <footer>
      <img src="../assets/graphics/graphics-footer.svg" alt />
    </footer>
  </div>
</template>

<script>
import CartIcon from "./../components/CartIcon";

export default {
  name: "Meny",
  components: {
    CartIcon
  },

  computed: {
    menu() {
      return this.$store.state.menu;
    }

    //  seeNavigation(){
    //    return this.$store.state.seeNavigation
    //  }
  },

  methods: {
    additem(item) {
      this.$store.dispatch("addToCart", item);
    }
  }
};
</script>

<style lang="scss" scoped>
html {
  width: 500px;
  margin: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-color: white;
}
.menu {
  width: 37.5rem;
  height: 83.9rem;
  background: rgb(212, 178, 178);
  display: flex;
  flex-direction: column;
}
.upp {
  width: 37.5rem;
  height: 11.3rem;
  background-image: url("../assets/graphics/graphics-header.svg");
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.menu-btn {
  border-radius: 50%;
  margin: 2rem;
  background-color: whitesmoke;
}
.menu-btn {
  border: none;
  cursor: pointer;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin: 2rem;
  background-color: #ffffff;
}
.menu-btn img {
  width: 2.4rem;
  height: 2rem;
}

h1 {
  font-size: 42px;
  margin: 1.5rem;
}

.products {
  flex: 1 0 auto;

  width: 31.1rem;
  margin: 1rem;
}
.products ul {
  margin: 0.5rem;
  list-style-type: none;
  text-decoration: none;
}
.products li {
  text-align: start;
  font-size: 25px;
  line-height: 120%;
}
.add-btn img {
  width: 1.2rem;
  height: 1.2rem;
}
.add-btn {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  border-color: black;
  background-color: black;
  margin-right: 450px;
}
footer {
  background-image: url("../assets/graphics/graphics-footer.svg");
  flex-shrink: 0;
  background-size: cover;
  background-repeat: no-repeat;
}

h1,
li {
  text-align: center;
  color: black;
  font-style: normal;
  font-weight: bold;
}
.title {
  margin-left: 70px;
  margin-top: -35px;
  padding-bottom: 5px;
  display: flex;
  font-size: 1.7rem;
}
.desc {
  margin-left: 70px;
  padding-bottom: 60px;
  display: flex;
  font-size: 16px;
}
.price {
  display: flex;
  font-size: 24px;
  padding-bottom: 5px;
  font-display: bold;
  margin-left: 350px;
  margin-top: -130px;
  margin-right: 0;
}
</style>

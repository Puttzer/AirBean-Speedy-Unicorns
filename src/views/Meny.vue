<template>
  <div class="menu">
    <section class="upp">
      <button class="menu-btn">
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
            <span>......................</span>
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
  },

  methods: {
    additem(item) {
      this.$store.dispatch("addToCart", item);
    }
  }
};
</script>

<style lang="scss">
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

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.menu-btn {
  border-radius: 50%;
  margin: 2rem;
}
.menu-btn {
  border: none;
  cursor: pointer;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin: 2rem;
}
.menu-btn img {
  width: 2.4rem;
  height: 2rem;
}

h1 {
  font-size: 42px;
  line-height: 120%;
  margin: 1.5rem;
}

.products {
  flex: 1 0 auto;

  width: 31.1rem;
  height: 47.4rem;
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
}
.footer {
  width: 37.5rem;
  height: 7.3rem;
  background-image: url("../assets/graphics/graphics-footer.svg");
  flex-shrink: 0;
}

h1,
li {
  text-align: center;
  color: black;
  font-style: normal;
  font-weight: bold;
}
.title {
  margin-left: 40px;
  margin-top: -32px;
  padding-bottom: 5px;
  grid-column: 2/3;
  grid-row: 1/2;
  display: flex;
  font-size: 2.2rem;
}
.desc {
  margin-left: 40px;
  padding-bottom: 25px;
  display: flex;
  font-size: 16px;
}
.price {
  display: flex;
  font-size: 24px;
  padding-bottom: 5px;
  font-display: bold;
  margin-left: 270px;
  margin-top: -80px;
}
</style>

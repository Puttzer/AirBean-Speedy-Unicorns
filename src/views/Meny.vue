<template>
  <div class="menu">
    <section class="upp">
      <button class="menu-btn" @click="$router.push('/Navigation')">
        <img src="../assets/graphics/navicon.svg" />
      </button>
    </section>
    <CartBag />
    <h1>Meny</h1>
    <!-- a comment for pull request! -->
    <section class="products">
      <ul>
        <li v-for="item in menu" :key="item.id" :item="item">
          <button @click="additem(item)" class="add-btn">
            <img src="../assets/graphics/add.svg" />
          </button>
          <div class="products__outer-wrapper">
            <div class="products__inner-wrapper">
              <h3 class="title">
                <span>{{ item.title}}</span>
              </h3>
              <h3 class="price">{{ item.price }} kr</h3>
            </div>
            <p class="desc">{{ item.desc}}</p>
          </div>
        </li>
      </ul>
    </section>
    <footer></footer>
  </div>
</template>

<script>
import CartBag from "../components/CartBag";

export default {
  name: "Meny",
  components: {
    CartBag
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
.products__outer-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.products__inner-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 8px;
}
.products__inner-wrapper::before {
  content: "";
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 5px;
  height: 0;
  line-height: 0;
  border-bottom: 2px dotted #000;
}
.menu {
  background-color: white;
  background: rgb(212, 178, 178);
  display: flex;
  flex-direction: column;
}
.upp {
  overflow: visible;
  height: 11.3rem;
  background-image: url("../assets/graphics/graphics-header.svg");
  background-size: 100%;
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

footer {
  height: 11.3rem;
  width: 100%;
  background-position: bottom center;
  background-image: url("../assets/graphics/graphics-footer.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}

h1 {
  font-size: 42px;
  margin: 1.5rem;
}

.products {
  flex: 1 0 auto;

  margin: 1rem;
}
.products ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-decoration: none;
}
.products li {
  display: flex;
  align-items: center;
  font-size: 25px;
  margin-bottom: 28px;
}
.add-btn img {
  display: block;
  width: 11px;
  height: 11px;
}
.add-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border-color: black;
  background-color: black;
  margin: 0;
  margin-right: 15px;
}

h1,
li {
  text-align: center;
  color: black;
  font-style: normal;
  font-weight: bold;
}
.title {
  display: flex;
  font-size: 23px;
  margin: 0 0 0;
  background: rgb(212, 178, 178);
  z-index: 1;
}
.desc {
  font-size: 12px;
  margin: 0;
}
.price {
  font-size: 23px;
  font-display: bold;
  margin: 0 0 0 10px;
  white-space: nowrap;
  background: rgb(212, 178, 178);
  z-index: 1;
}
</style>

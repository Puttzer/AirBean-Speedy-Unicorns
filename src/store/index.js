import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import dataList from './../assets/data/menu.json'
const API = 'http://localhost:8080/api/beans'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    seeNavigation: false,
    activeOrder: {},
    menu: [],
    cart: [],
    load: false,

  },
  mutations: {
    menuListitem(state, menu) {
      state.menu = menu

    },
    additem(state, item) {
      state.cart.push({
        id: item.id,
        price: item.price,
        title: item.title,
        quantity: 1
      })
    },
    orderStatus(state, order) {
      console.log("If you can see this all is working so far")
      console.log(order);
      state.activeOrder = order
    },

    updateItemInCart(state, id) {
      let index = state.cart.findIndex(item => item.id === id)
      state.cart[index].quantity++;

    },
    removeItemInCart(state, id) {
      let index = state.cart.findIndex(item => item.id === id)
      state.cart.splice(index, 1)
    }

  },



  actions: {
    async getMenuList(context) {
      context.commit('menuListitem', dataList.menu)

    },
    addToCart(context, item) {
      // context.commit('additem' , item)
      let checkItem = context.state.cart.filter(check => check.id === item.id)

      if (checkItem.length > 0) {
        context.commit('updateItemInCart', checkItem[0].id)
      } else {
        context.commit('additem', item)
      }
    },
    async makeOrder(context) {
      console.log("Brewing!")
      let order = {
        items: context.state.cart
      }

      let uuid = await localStorage.getItem('airbeans')

      try {
        context.state.loading = true
        let resp = await axios.post(`${API}/order/${uuid}`, order)
        context.state.loading = false
        context.commit('orderStatus', resp.data)
      } catch (err) {
        console.log(err)
      }
    }


  },
  modules: {
  }
})
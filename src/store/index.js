import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import dataList from './../assets/data/menu.json'
const API = 'http://localhost:5000/api/beans'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // seeNavigation: false,
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
      console.log("Brewing! if youre seeing this, working as intended so far")
      let order = {
        items: context.state.cart
      }
      try {
        context.state.load = true
        let resp = await axios.post(`${API}/order/`, order)
        console.log(resp)
        context.state.load = false
        context.commit('orderStatus', resp.data)
      } catch (err) {
        console.log(err)
        console.log("oopsie something went wrong!")
      }
    }


  },
  modules: {
  }
})
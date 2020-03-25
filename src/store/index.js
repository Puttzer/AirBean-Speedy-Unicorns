import Vue from 'vue'
import Vuex from 'vuex'

import dataList from './../assets/data/menu.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeOrder: {},
    menu:[],
    cart:[],
  
  },
  mutations: {
    menuListitem(state,menu){
      state.menu = menu
    
    },
    additem(state,item){
      state.cart.push({
        id:item.id,
        price:item.price,
        title:item.title,
        quantity:1
      })
    },
    
    updateItemInCart(state,id){
      let index = state.cart.findIndex(item => item.id === id)
      state.cart[index].quantity++;

    },
    removeItemInCart(state,id){
      let index = state.cart.findIndex(item => item.id===id)
      state.cart.splice(index,1)
    }

},

   
  
  actions: {
    async getMenuList(context){
       context.commit('menuListitem',dataList.menu)

    },
    addToCart(context , item){
      // context.commit('additem' , item)
        let checkItem = context.state.cart.filter(check => check.id === item.id)
        
        if(checkItem.length > 0){
          context.commit('updateItemInCart',checkItem[0].id)
        }else{
          context.commit('additem',item)} 
      },
       
   
  },
  modules: {
  }
})
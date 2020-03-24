import Vue from 'vue'
import Vuex from 'vuex'

import menuList from '../../datamenu/data/menu.json'

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
    }
    
  

},

   
  
  actions: {
    async getMenuList(context){
       context.commit('menuListitem',menuList.menu)

    },
 
      
    
   
  },
  modules: {
  }
})
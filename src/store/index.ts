import {createStore} from 'vuex'

const defaultState = {
  count: 10
}

const store = createStore({
  state:()=>defaultState,
  mutations: {
    increment(state){
      state.count++;
    }
  },
  actions:{
    increment(context){
      context.commit('increment')
    }
  }
})

export default store;
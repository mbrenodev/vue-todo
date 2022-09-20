import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [
      {id: 1, titulo: "Ir ao supermercado", concluido: false },
      {id: 2, titulo: "Corta cabelo", concluido: false }
    ],
  },
  getters: {
  },
  mutations: {
    adicionaTarefa(state, titulo){
      if(titulo){
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido: false
        })
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

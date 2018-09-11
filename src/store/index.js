import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

const getters={
    loadingshow:(state)=>{
        return state.loadingshow
    },
    headershow:state=>{
        return state.headershow
    },
    footershow:state=>{
        return state.footershow
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
import Vue from 'vue'
import Vuex from 'vuex'

import  mutations  from './mutations';
import  actions  from './actions';
import  ModuleA  from './modules/moduleA';
// 使用路由
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count:1000
    },
    mutations,
    actions,
    modules:{
        a: ModuleA
    }
})

export default store
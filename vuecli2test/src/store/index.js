import Vue from 'vue'
import Vuex from 'vuex'

// 使用路由
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count:1000
    },
    mutations:{
        updateCount(state,count){
            state.count = count
        }
    },
    actions:{

    }
})

export default store
import Vue from 'vue'
import Vuex from 'vuex'
import { UPDATE_COUNT } from './vuex-types';

// 使用路由
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count:1000
    },
    mutations:{
        [UPDATE_COUNT](state,count){
            state.count = count
        }
    },
    actions:{
        updateByAction(context,count){
            // 模拟异步操作
            setTimeout(()=>{
                context.commit(UPDATE_COUNT,count)
            },1000)
        }
    }
})

export default store
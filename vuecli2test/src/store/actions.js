import { UPDATE_COUNT } from './vuex-types';
export default {
    updateByAction(context,count){
        return new Promise((reslove,reject)=>{
            // 模拟异步操作
            setTimeout(()=>{
                context.commit(UPDATE_COUNT,count)
                reslove('qqqqq3333222')
            },1000)
        })
        
    }
}
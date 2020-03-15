import { UPDATE_COUNT } from './vuex-types';
export default {
    [UPDATE_COUNT](state,count){
        state.count = count
    }
}
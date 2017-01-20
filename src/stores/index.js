import  Vue from 'vue';
import Vuex from 'vuex';
import loading from './loading';
Vue.use(Vuex);
console.log(1111);
export default new Vuex.Store({
    //modules: {
    //    loading: loading
    //}
    state: {
        loadingCount: 0
    },
    mutations: {
        increment (state) {
            state.loadingCount++;
        },
        decrement (state) {
            state.loadingCount = state.loadingCount > 0 ? state.loadingCount-- : 0;
        },
        reset (state) {
            state.loadingCount = 0;
        }
    },
    actions: {
        increment: ({commit}) => commit('increment'),
        decrement: ({commit}) => commit('decrement'),
        reset: ({commit}) => commit('reset')
    }
});

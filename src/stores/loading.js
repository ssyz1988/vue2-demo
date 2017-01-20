const module = {
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
};
export default module;
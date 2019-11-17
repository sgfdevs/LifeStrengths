export default {
    namespaced: true,
    state: {
        drawerOpen: false,
    },
    mutations: {
        updateDrawerOpen(state, value) {
            state.drawerOpen = value;
        },
    },
};

import Vue from 'vue';
import Vuex from 'vuex';

import app from './app';

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
    const store = new Vuex.Store({
        modules: {
            app,
        },
    });

    return store;
}

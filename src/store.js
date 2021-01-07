import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sidebar: null,
        user: null,
        userAll: null,
        isLoggedIn: false
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            state.isLoggedIn = true;
        },
        setUserAllData(state, userAll) {
            state.userAll = userAll;
        }
    },
    actions: {
        setUser({ commit }, user) {
            commit('setUser', user)
        },
        setUserAllData({ commit }, userAll) {
            commit('setUserAll', userAll);
        }
    }
}) 
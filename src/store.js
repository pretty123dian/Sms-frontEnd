import Vue from 'vue'
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        sidebar: null,
        user:null,
        isLoggedIn:false
    },
    mutations:{
        setUser(state,user){

        }
    }
}) 
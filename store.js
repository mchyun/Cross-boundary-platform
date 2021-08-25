import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: ''
    },
    isLogin: false,
  },
  getters: {
    username(state) {
      return state.user.username;
    },
    isLogin(state) {
      return state.isLogin;
    }
  },
  mutations: {
    login(state, user) {
      state.user = user;
      state.isLogin = true;
      sessionStorage.setItem('isLogin', '1')
      sessionStorage.setItem('user', JSON.stringify(user))
    },
    logout(state) {
      state.isLogin = false;
      state.user = {};
      sessionStorage.removeItem('isLogin')
      sessionStorage.removeItem('user')
    }
  },
  actions: {
    login(context, user) {
      context.commit('login', user);
    },
    logout(context) {
      context.commit('logout');
    }
  }
})

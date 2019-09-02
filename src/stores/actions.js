import * as types from './mutation_types';

const actions = {
  loginChat: ({ commit }, payload) => {
    commit(types.LOGIN_CHAT, payload);
  },
  logoutChat: ({ commit }) => {
    commit(types.LOGOUT_CHAT);
  },
};

export default actions;

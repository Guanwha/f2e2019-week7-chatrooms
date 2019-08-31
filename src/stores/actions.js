import * as types from './mutation_types';

const actions = {
  loginChat: ({ commit }, payload) => {
    commit(types.LOGIN_CHAT, payload);
  },
};

export default actions;

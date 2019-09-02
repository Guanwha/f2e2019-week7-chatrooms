import * as types from './mutation_types';


export const mutations = {
  // payload is user information (include isCat, selectIdx, name)
  [types.LOGIN_CHAT](state, payload) {
    // console.log('LOGIN_CHAT');
    state.isCat = payload.isCat;
    state.animalIdx = payload.selectIdx;
    state.loginTime = `${new Date().getTime()}`;
    state.name = `${payload.name}`;
  },
  // payload is error object (include action, errMessage)
  [types.UPDATE_ERR](state, payload) {
    if (payload) {
      state.lastErrorMessage = payload;
    }
    state.isLoading = false;
  },
};

export const state = {
  isCat: true,
  animalIdx: 0,
  loginTime: 0,               // milliseconds since January 1, 1970
  name: '',
  lastErrorMessage: null,     // include action, errMessage
  isLoading: false,
};

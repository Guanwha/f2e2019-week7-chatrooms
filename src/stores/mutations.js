// import * as types from './mutation_types';


export const mutations = {
  // // payload is error object (include action, errMessage)
  // [types.UPDATE_ERR](state, payload) {
  //   if (payload) {
  //     state.lastErrorMessage = payload;
  //   }
  //   state.isLoading = false;
  // },
};

export const state = {
  lastErrorMessage: null,     // include action, errMessage
  isLoading: false,
};

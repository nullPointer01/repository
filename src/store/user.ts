// initial state
import { StoreOptions } from "vuex";
import AccessEnum from "@/access/accessEnum";
import { UserControllerService } from "../../generated";

// getters
export default {
  namespaced: true,
  state: {
    loginUser: {
      userName: "未登录",
    },
  },
  actions: {
    async getLoginUser({ commit, state }, payload) {
      //从远程获取登陆信息
      // const res = await UserControllerService.getLoginUserUsingGet();
      // if (res.data === 0) {
      //   commit("updateUser", res.data);
      // } else {
      //   commit("updateUser", {
      //     ...state.loginUser,
      //     userRole: AccessEnum.NOT_LOGIN,
      //   });
      // }
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
      // console.log(payload);
    },
  },
} as StoreOptions<any>;

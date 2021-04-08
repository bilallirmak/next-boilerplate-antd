import { action, makeAutoObservable } from "mobx";
import authAPI from "../api/auth.api";
import StorageService from "../utils/storage";
import StoreProvider from "../utils/store-provider";

class AuthStore {
  accessToken = null;

  constructor() {
    makeAutoObservable(this);
  }

  async login(values) {
    const [err, response] = await authAPI.login(values).toArray()
    console.log(response, "RESPONSE")

    if (!err && response) {
      const UserStore = StoreProvider.getStore('UserStore')
      await StorageService.set('token', response)
      // await UserStore.verifySession()
      UserStore.setLogin(true)
    }

    return !err
  }

  async register(values) {
    const [err, response] = await authAPI.register(values).toArray()
    console.log(err, "ERR")
    console.log(response, "RESSS")
    if (!err && response) {
      const UserStore = StoreProvider.getStore('UserStore')
      await StorageService.set('token', response)
      // await UserStore.verifySession()
      UserStore.setLogin(true)
    }

    return !err
  }

  async logout() {
    // const [err, response] = await authAPI.logout().toArray()
    // if (!err) {
      await StorageService.remove('token')
    // }

  }

}

export default new AuthStore();

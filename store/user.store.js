import { makeAutoObservable, action, runInAction } from 'mobx'
import userAPI from '../api/user.api'
import StoreProvider from '../utils/store-provider'

class UserStore {
  user = null
  isLogin = true
  loading = true

  constructor() {
    makeAutoObservable(this)
  }

  async verifySession() {
    // !this.loading && (this.loading = true)
    const [err, response] = await userAPI.verifySession().toArray()
    if (!err && response) {
      console.log('USER:', response)
      await runInAction(async () => {
        this.user = response.user
        !this.isLogin && (this.isLogin = true)
        this.loading = false
      })

      return true
    }
    this.removeUser()
    return false
  }

  async setLogin(login) {
    if (!login) {
      // localStorage.removeItem('token')
      const AuthStore = StoreProvider.getStore('AuthStore')
      await AuthStore.logout()
    }

    this.isLogin = login
  }

  removeUser() {
    this.setLogin(false)
    this.loading = false
    this.user = null
  }
}

export default new UserStore()

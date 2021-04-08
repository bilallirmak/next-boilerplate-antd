import React, {useState, useEffect} from "react";
import '../styles/less/variables.less'
import '../styles/css/app.css'
import {useRouter} from 'next/router'

//TODO: DON'T REMOVE
import '../core/extensions/promise'
import '../core/extensions/string'
import interceptors from '../core/interceptors'
import '../store'
//TODO: DON'T REMOVE END

import StoreProvider from "../utils/store-provider";
import {observer} from "mobx-react-lite";
import Loading from "../components/core/loading";

const UserStore = StoreProvider.getStore('UserStore')

const authRoutes = ['/login', '/register', '/forgot-password']

function MyApp({Component, pageProps}) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    !loading && setLoading(true)
    if (UserStore.isLogin) {
      init().then(() => console.log('REDIRECT TRUE'))
      return
    }
    redirect(false).then(() => console.log('REDIRECT FALSE'))
  }, [UserStore.isLogin])

  async function init() {
    const isVerify = await verify()
    await redirect(isVerify)
    if (isVerify) {
      return setLoading(false)
    }
  }

  async function verify() {
    return await UserStore.verifySession()
  }

  async function redirect(isVerify) {
    const isAuthRoute = authRoutes.includes(router.asPath)
    if (!isVerify) {
      if (isAuthRoute) {
        return setLoading(false)
      }
      await router.push('/login', null, {shallow: true})
      return
    }
    if (isAuthRoute) {
      return await router.push('/')
    }
  }


  return loading ? <Loading/>: <Component {...pageProps} />
}


export default observer(MyApp)

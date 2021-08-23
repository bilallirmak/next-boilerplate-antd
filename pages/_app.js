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
import {stores, StoreWrap} from "../store";


const authRoutes = ['/login', '/register', '/forgot-password']

function MyApp({Component, pageProps}) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  const {UserStore} = stores

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
      return setLoading(false)
    }
    if (isAuthRoute) {
      return await router.push('/')
    }
  }


  return loading ? <Loading/>: <StoreWrap store={{ ...stores }}> <Component {...pageProps} /></StoreWrap>
}


export default observer(MyApp)

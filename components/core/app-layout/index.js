import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import styles from './index.module.css'
import { useRouter } from 'next/router'
import StoreProvider from '../../../utils/store-provider'
import Loading from '../loading'
import { Layout } from 'antd'
import { useStore } from '../../../store'

const { Footer, Content, Header } = Layout

const authRoutes = ['/login', '/register', '/forgot-password']

function AppLayout({ children }) {
  const router = useRouter()
  const { UserStore } = useStore()
  const [loading, setLoading] = useState(true)

  const isAuthRoute = authRoutes.includes(router.pathname)

  useEffect(() => {
    check().then(() => console.log('checked'))
  }, [])

  async function check() {
    const isVerify = await UserStore.verifySession()
    redirect(isVerify).then(() => isVerify && setLoading(false))
  }

  async function redirect(isVerify) {
    const isAuthRoute = authRoutes.includes(router.asPath)
    if (!isVerify) {
      if (isAuthRoute) {
        return setLoading(false)
      }
      return await router.push('/login')
    }

    if (isAuthRoute) {
      await router.push('/')
    }
  }

  return isAuthRoute ? (
    loading ? (
      <Loading />
    ) : (
      children
    )
  ) : (
    <Layout className={styles.layout}>
      <Layout className={cn('site-layout')}>
        {/*<Header className={styles.header}>*/}
        {/*  <AppHeader />*/}
        {/*</Header>*/}
        <Content className={styles.content}>
          {loading ? <Loading /> : children}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default AppLayout

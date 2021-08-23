import React from 'react'
import { useRouter } from 'next/router'
import { i18 } from '../../i18n'
import { Col, Row } from 'antd'
import TextTitle from '../core/text/title'
import AppButton from '../core/button'
import TextBody from '../core/text/body'
import { useStore } from '../../store'

const Home = () => {
  const router = useRouter()

  const changeLang = async (locale) => {
    await i18.changeLanguage(locale)
  }

  const { UserStore } = useStore()

  return (
    <Row justify={'center'}>
      <Col span={24} align={'middle'}>
        <TextTitle>Welcome To Boilerplate</TextTitle>
      </Col>
      <Col span={24} align={'middle'}>
        <AppButton
          ghost={true}
          type={'danger'}
          onClick={() => UserStore.setLogin(false)}
        >
          <TextBody>Cikis Yap</TextBody>
        </AppButton>
      </Col>
    </Row>
  )
}

export default Home

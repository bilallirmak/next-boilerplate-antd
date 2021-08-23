import React, { useState } from 'react'
import { Row, Col, Form } from 'antd'
import cn from 'classnames'
import Button from '../../core/button'
import { RESPONSIVE_8 } from '../../../constants'
import Link from 'next/link'
import AppInput from '../../core/input'
import AppCard from '../../core/card'
import styles from './register-form.module.css'
import TextTitle from '../../core/text/title'
import { useStore } from '../../../store'

const RegisterForm = () => {
  const [submit, setSubmit] = useState(false)

  const { AuthStore } = useStore()

  const onFinish = async (values) => {
    values = {
      email: values.email,
      password: values.password
    }

    setSubmit(true)
    await AuthStore.register(values)
    setSubmit(false)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="basic"
      initialValues={{
        email: '',
        password: '',
        passwordConfirm: ''
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row
        className={cn(styles.container, 'site-card-wrapper')}
        justify="center"
        align="middle"
      >
        <Col {...RESPONSIVE_8}>
          <Row align="middle" justify="center">
            <Col>
              <AppCard bordered={false} className={styles.card}>
                <Row gutter={[0, 15]} justify={'center'}>
                  <Col>
                    <TextTitle className={styles.title}>
                      Sign Up to Boilerplate
                    </TextTitle>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      noStyle
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your email!'
                          // type: "email"
                        }
                      ]}
                    >
                      <AppInput placeholder="hello@example.com" />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <Form.Item
                      noStyle
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your email!'
                        }
                      ]}
                    >
                      <AppInput placeholder="Password" />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <Form.Item
                      noStyle
                      name="passwordConfirm"
                      rules={[
                        {
                          required: true,
                          message: 'Please confirm your password!'
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve()
                            }
                            return Promise.reject(
                              new Error(
                                'The two passwords that you entered do not match!'
                              )
                            )
                          }
                        })
                      ]}
                    >
                      <AppInput placeholder="Password Confirm" />
                    </Form.Item>
                  </Col>

                  <Col>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      className={styles.button}
                      loading={submit}
                    >
                      Create Account
                    </Button>
                  </Col>

                  <Col span={24}>
                    <Row justify="center">
                      <Col span={24}>
                        <label className={styles.text}>
                          I have already account
                          <Link href="/login">
                            <a>| Sign In</a>
                          </Link>
                        </label>
                        <label>to your account</label>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </AppCard>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  )
}

export default RegisterForm

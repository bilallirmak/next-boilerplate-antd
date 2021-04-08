import React, {useState} from 'react'
import {Row, Col, Card, Switch, Form} from 'antd'
import styles from './login-form.module.css'
import cn from 'classnames'
import Button from '../../core/button'
import AppInput from '../../core/input'
import {RESPONSIVE_8} from '../../../constants'
import Link from 'next/link'
import {observer} from "mobx-react-lite";
import StoreProvider from "../../../utils/store-provider";
import TextBody from "../../core/text/body";
import TextTitle from "../../core/text/title";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

const AuthStore = StoreProvider.getStore('AuthStore')

const LoginForm = () => {
    const [submit, setSubmit] = useState(false)

    const onFinish = async (values) => {
        console.log('Success:', values);
        setSubmit(true)
        await AuthStore.login(values)
        setSubmit(false)

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            initialValues={{
                email: "test1@test1.com",
                password: "Abc1234+0"
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Row
                justify="center"
                align="middle"
                className={cn("site-card-wrapper", styles.container)}
            >
                <Col {...RESPONSIVE_8}>
                    <Row align="middle" justify="center">

                        <Col>
                            <Card bordered={false} className={styles.card}>
                                <Row gutter={[0, 15]} justify={'center'}>
                                    <Col span={24}>
                                        <TextTitle bold className={styles.title}>Sign In to ONCOTRUST PEDIGIRI</TextTitle>
                                    </Col>
                                    <Col span={24}>
                                        <Form.Item
                                            noStyle
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your email!',
                                                    // type: "email"
                                                },
                                            ]}
                                        >
                                            <AppInput
                                                className={styles.input}
                                                placeholder="hello@example.com"

                                            />
                                        </Form.Item>
                                    </Col>

                                    <Col span={24}>
                                        <Form.Item
                                            noStyle
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your password!',
                                                },
                                            ]}
                                        >
                                            <AppInput className={styles.input}
                                                      placeholder="Password"
                                            />
                                        </Form.Item>

                                    </Col>

                                    <Form.Item
                                        noStyle
                                    >

                                        <Col>
                                            <Button type={'primary'} block htmlType="submit" className={styles.button}
                                                    loading={submit}>
                                                Sign In
                                            </Button>
                                        </Col>
                                    </Form.Item>
                                    <Col span={24}>
                                        <Row justify="space-between">
                                            <Col>
                                                <label className={styles.label}>Don't have an account?</label>
                                                <label className={styles.left}>
                                                    <Link href="/register">
                                                        <a href="#">Sign Up</a>
                                                    </Link>
                                                </label>
                                            </Col>
                                            <Col>

                                                <label className={styles.right}>
                                                    <Link href="/forgot-password">
                                                        <a>Forgot Password</a>
                                                    </Link>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Form>
    )
}

export default observer(LoginForm)

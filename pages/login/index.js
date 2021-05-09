import React from "react"
import MainLayout from "/components/MainLayout"
import Title from "antd/lib/typography/Title"
import {Button, Col, Form, Row, Input} from "antd"
import { LockOutlined, MailOutlined} from '@ant-design/icons'
import axios from "axios"
import feCookie from 'js-cookie'
import {useRouter} from "next/router"

export default function About() {

    const router = useRouter()

    const onFinish = (values) => {
        console.log('Success:', values);
        const data = JSON.stringify(values)

        const config = {
            method: 'post',
            url: 'http://localhost:3000/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        }

        axios(config)
            .then(function (response) {
                let data = response.data

                console.log(data);
                feCookie.set('acTn', data.accessToken)
                router.push('/')

            })
            .catch(function (error) {
                console.log(error);
                feCookie.remove('acTn')
            });

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <MainLayout>
            <Title>
                Login page
            </Title>
            <Row justify="space-around" align="middle">
                <Col span={6}>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={
                                [
                                    { required: true, message: 'Please input your E-mail!' },
                                    { type: 'email', message: 'The input is not valid E-mail!' }
                                ]
                            }
                        >
                            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-mail" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </MainLayout>
    )
}

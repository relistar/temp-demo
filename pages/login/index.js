import React from "react"
import {Button, Form, Input} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import {API} from "../../bapi/manual";
import {useRouter} from "next/router";
import MainLayout from "../../components/MainLayout";

export default function Login() {
    const router = useRouter();

    const onFinish = (values) => {
        API.loginByCredentials(values).then(res => {
            router.push({pathname: "/auth", query: res.data})
        }).catch(res => {
            console.log(res.data)
        })
    }

    return (
        <MainLayout title={"Вход"}>
            <section>
                <div className="container">
                    <div className="login-form">
                        <Form
                            name="normal_login"
                            className="login-form"
                            onFinish={onFinish}
                            size="large"
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'Email введен неверно',
                                    },
                                    {
                                        required: true,
                                        message: 'Введите Email',
                                    },
                                ]}
                            >
                                <Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="Email"/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Введите пароль'
                                    }
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="Пароль"
                                />
                            </Form.Item>

                            <Form.Item>
                                <div className="button">
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Войти
                                    </Button>
                                </div>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

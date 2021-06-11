import React from "react"
import MainLayout from "../../components/MainLayout";
import {Button, Checkbox, Form, Input} from "antd";
import {LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import {API} from "../../bapi/manual";
import {useRouter} from "next/router";

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

export default function Login() {
    const router = useRouter();

    const onFinish = (values) => {
        API.loginByCredentials(values).then(res => {
            if (process.browser) {
                window.localStorage.setItem('token', res.data)
            }

            router.push({pathname: "/auth", query: res.data})
        }).catch(res => {
            if (process.browser) {
                window.localStorage.removeItem('token')
            }
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

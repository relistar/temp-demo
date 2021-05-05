import 'antd/dist/antd.css'
import React from "react"
import {Layout} from 'antd'
import styles from '/styles/header.module.scss'
import Header from '/components/Header'

const {Content} = Layout

export default function MainLayout({children}) {
    return (
        <Layout>
            <Header/>
            <Content className={styles.main}>
                {children}
            </Content>
        </Layout>

    )
}

import 'antd/dist/antd.css'
import React from "react"
import {Layout} from 'antd'
import styles from '/styles/header.module.scss'
import Header from '/components/Header'
import Head from "next/head"

const {Content} = Layout

export default function MainLayout({children, title = 'Title'}) {
    return (
        <Layout>
            <Head>
                <title>{title}</title>

                <meta charSet="utf-8"/>
                <meta name='viewport' content='width=device-width,initial-scale=1'/>
                <meta content='true' name='HandheldFriendly'/>
                <meta content='width' name='MobileOptimized'/>
                <meta content='yes' name='apple-mobile-web-app-capable'/>

            </Head>
            <Header/>
            <Content className={styles.main}>
                {children}
            </Content>
        </Layout>

    )
}

import 'normalize.css'
import 'antd/dist/antd.css';
import '../styles/global.scss'
import React from "react"
import ruRu from "antd/lib/locale/ru_RU"
import {ConfigProvider} from "antd"

export default function MyApp({Component, pageProps}) {
    return (
        <ConfigProvider locale={ruRu}>
            <Component {...pageProps} />
        </ConfigProvider>
    )
}

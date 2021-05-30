import 'normalize.css'/*
import 'antd/dist/antd.css'*/
import 'antd/lib/button/style/index.css'
import 'antd/lib/layout/style/index.css'
import 'antd/lib/input/style/index.css'
import 'antd/lib/input-number/style/index.css'
import 'antd/lib/checkbox/style/index.css'
import '/styles/global.scss'
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

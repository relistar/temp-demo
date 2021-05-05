import {DatePicker} from 'antd'
import 'antd/dist/antd.css'
import React from "react"
import {ConfigProvider} from 'antd'
import ruRu from 'antd/lib/locale/ru_RU'


export default function Home() {
    return (
        <ConfigProvider locale={ruRu}>
            <DatePicker/>
        </ConfigProvider>
    )
}

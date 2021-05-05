import React from "react"
import {DatePicker} from 'antd'
import {dateFormat} from "../components/constants"
import MainLayout from "../components/MainLayout"
import Title from "antd/lib/typography/Title"

export default function Home() {
    return (
        <MainLayout>
            <Title>
                Home page
            </Title>
            <DatePicker format={dateFormat}/>
        </MainLayout>
    )
}

import React from 'react'
import styles from "../../styles/header.module.scss"
import {Layout, Menu} from "antd"
import Link from "next/link"

const {Header} = Layout

export default function MyHeader() {
    return (
        <Header className={styles.header}>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1">
                    <Link href="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link href="/about">About</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link href="/articles">Articles</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link href="/login">Login</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}
import React from "react"
import {Layout} from 'antd'
import Header from '/components/Header'
import Footer from '/components/Footer'
import Head from "next/head"

const {Content} = Layout

export default function MainLayout({children, title = 'Title'}) {
    return (
        <>
            <Head>
                <title>{title}</title>

                <meta charSet="utf-8"/>
                <meta name='viewport' content='width=device-width,initial-scale=1'/>
                <meta content='true' name='HandheldFriendly'/>
                <meta content='width' name='MobileOptimized'/>
                <meta content='yes' name='apple-mobile-web-app-capable'/>

                <link rel="apple-touch-icon" sizes="57x57" href="/fav/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/fav/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/fav/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/fav/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/fav/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/fav/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/fav/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/fav/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192" href="/fav/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/fav/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png"/>
                <link rel="manifest" href="/fav/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/fav/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <Header/>
            <Content>
                {children}
            </Content>
            <Footer/>
        </>

    )
}

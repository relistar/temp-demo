import React from "react"
import {Layout} from 'antd'
import Head from "next/head"
import { GoogleFonts } from "next-google-fonts";
import Header from '../Header'
import Footer from '../Footer'

const {Content} = Layout

export default function MainLayout({children, title = 'Title'}) {
    return (
        <>
            <Head>
                <title>{title}</title>

                <meta charSet="utf-8"/>
                <meta name='viewport' content='width=device-width,initial-scale=1,maximum-scale=1'/>
                <meta content='true' name='HandheldFriendly'/>
                <meta content='width' name='MobileOptimized'/>
                <meta content='yes' name='apple-mobile-web-app-capable'/>

                <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/icons/iconsicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/icons/iconsicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/iconsicon-16x16.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>

                <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" />
            </Head>
            <Header/>
            <Content>
                {children}
            </Content>
            <Footer/>
        </>

    )
}

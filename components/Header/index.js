import React, {useState} from 'react'
import Link from "next/link"
import {Drawer, Button} from 'antd'
import {CloseIcon} from "../lib/icon"
import Image from "next/image"
import { useRouter } from 'next/router'

export default function MyHeader(props) {
    const [burgerOpened, setBurgerOpened] = useState(false)

    const { pathname } = useRouter()

    const openBurger = () => {
        setBurgerOpened(true)
    }

    const closeBurger = () => {
        setBurgerOpened(false)
    }

    const titleBlock = (
        <div className="burger-menu-title">
            <div className="burger-menu-title__logo">
                <Image src="/img/logo.png" width={66} height={16}/>
            </div>
            <div className="burger-menu-title__desc">
                Сборка и производство электрощитов
            </div>
        </div>
    )

    return (
        <header className={'header d-xss-none'}>
            <div className="container">
                <div className="preheader d-lg-none">
                    <div className="preheader__desc">Сборка и производство электрощитов</div>
                    <div className="preheader__contacts">
                        <a className="preheader__contact" href="tel:+79040770777">+7(904) 077-07-77</a>
                        <a className="preheader__contact" href="tel:+79040770777">+7(904) 077-07-77</a>
                    </div>
                </div>
                <div className="header__main">
                    <div className="logo">
                        <Link href="/">
                            <a href="/">
                                <Image src="/img/logo.png" width={66} height={16}/>
                            </a>
                        </Link>
                    </div>
                    <div className="empty empty--border-white d-lg-none"/>
                    <nav className="nav d-lg-none">
                        <ul className="navigation">
                            <li className={"navigation__item" + (pathname === '/quiz' ? " navigation__item--active" : "")}>
                                <Link href="/quiz">
                                    <a key="quiz" href="#">Конструктор</a>
                                </Link>
                            </li>
                            <li className={"navigation__item" + (pathname === '/manual' ? " navigation__item--active" : "")}>
                                <Link href="/manual">
                                    <a key="manual" href="#">Ручной подбор</a>
                                </Link>
                            </li>
                            <li className={"navigation__item navigation__item--has-left-border" + (pathname.startsWith('/card') ? " navigation__item--active" : "")}>
                                <Link href="/card">
                                    <a key="manual" href="#">Карточка щита</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-right d-lg-flex">
                        <div className="contacts-wrap d-md-none">
                            <div className="contacts">
                                <a className="contacts__item" href="tel:+79040770777">+7(904) 077-07-77</a>
                                <a className="contacts__item contacts__item--border contacts__item--margin" href="tel:+79040770777">+7(904) 077-07-77</a>
                            </div>
                        </div>
                        <div className="burger-wrap d-lg-block">
                            <div onClick={openBurger} className="burger">
                                <div className="burger__line"/>
                                <div className="burger__line"/>
                                <div className="burger__line"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Drawer
                    onClose={closeBurger}
                    visible={burgerOpened}
                    closeIcon={<CloseIcon/>}
                    title={titleBlock}
                    width={349}
                >
                    <div className="burger-menu">
                        <nav className="nav">
                            <ul className="navigation">
                                <li className="navigation__item">
                                    <Link href="/quiz">
                                        <a href="#">Конструктор</a>
                                    </Link>
                                </li>
                                <li className="navigation__item">
                                    <Link href="/manual">
                                        <a href="#">Ручной подбор</a>
                                    </Link>
                                </li>
                                <li className="navigation__item navigation__item--active navigation__item--has-left-border">
                                    <Link href="/card"><a href="#">Карточка щита</a></Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="contacts">
                            <a className="contacts__item" href="tel:+79040770777">+7(904) 077-07-77</a>
                            <a className="contacts__item" href="tel:+79040770777">+7(904) 077-07-77</a>
                        </div>
                    </div>
                </Drawer>
            </div>
        </header>
    )
}
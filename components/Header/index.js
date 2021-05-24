import React from 'react'
import Link from "next/link"

export default function MyHeader() {
    return (
        <header className={'header'}>
            <div className="container">
                <div className="preheader">
                    <div className="preheader__desc">Сборка и производство электрощитов</div>
                    <div className="preheader__contacts">
                        <a className="preheader__contact" href="tel:+79040770777">+7(904) 077-07-77</a>
                        <a className="preheader__contact" href="tel:+79040770777">+7(904) 077-07-77</a>
                    </div>
                </div>
                <div className="header__main">
                    <div className="logo">
                        <Link href="/">
                            <img src="/img/logo.png"/>
                        </Link>
                    </div>
                    <div className="empty empty--border-white"/>
                    <nav className="nav">
                        <ul className="navigation">
                            <li className="navigation__item">
                                <Link href="/quiz">
                                    <a href="#">Конструктор</a>
                                </Link>
                            </li>
                            <li className="navigation__item"><a href="#">Ручной подбор</a></li>
                            <li className="navigation__item navigation__item--active navigation__item--has-left-border">
                                <Link href="/card"><a href="#">Карточка щита</a></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
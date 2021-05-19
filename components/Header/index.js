import React from 'react'

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
                    <div className="logo">ТЕМП</div>
                    <div className="empty empty--border-white"/>
                    <nav className="nav">
                        <ul className="navigation">
                            <li className="navigation__item"><a href="#">Конструктор</a></li>
                            <li className="navigation__item"><a href="#">Ручной подбор</a></li>
                            <li className="navigation__item navigation__item--active navigation__item--has-left-border"><a href="#">Карточка щита</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
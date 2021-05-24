import React from 'react'
import Link from "next/link"

export default function MyFooter() {
    return (
        <footer className={'footer-wrap'}>
            <div className="container">

                <div className="footer">
                    <div className="footer__main">
                        <div className="footer__col">
                            <div className="logo logo--footer">
                                <Link href="/">
                                    <img src="/img/logo-white.png" alt="logo"/>
                                </Link>
                            </div>
                            <div className="rights">
                                Все права защищены
                            </div>
                        </div>
                        <div className="footer__col">
                            <nav className="nav">
                                <ul className="footer-navigation">
                                    <li className="footer-navigation__item"><a href="#">Конструктор</a></li>
                                    <li className="footer-navigation__item"><a href="#">Ручной подбор</a></li>
                                    <li className="footer-navigation__item"><Link href="/card"><a href="#">Карточка
                                        щита</a></Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="footer__contacts">
                        <div className="footer__col footer__col--j-start">
                            <a className="email" href="mailto:info@mail.ru">info@mail.ru</a>
                            <div className="intervals">
                                c 9 до 18:00 <br/>
                                без выходных
                            </div>
                        </div>
                        <div className="footer__col">

                            <a className="footer__phone" href="tel:+79040770777">+7(904) 077-07-77</a>
                            <a className="footer__phone" href="tel:+79040770777">+7(904) 077-07-77</a>
                            <a className="footer__callback" href="#">Заказать обратный звонок</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
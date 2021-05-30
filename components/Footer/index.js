import React from 'react'
import Link from "next/link"
import Image from "next/image"

export default function MyFooter() {
    return (
        <footer className={'footer-wrap'}>
            <div className="container">

                <div className="footer">
                    <div className="footer__main">
                        <div className="footer__col footer__col--first footer__col--left">
                            <div className="logo logo--footer">
                                <Link href="/">
                                    <Image src="/img/logo-white.png" alt="logo" width={66} height={16} objectFit/>
                                </Link>
                            </div>
                            <div className="rights">
                                Все права защищены
                            </div>
                        </div>
                        <div className="footer__col footer__col--second">
                            <nav className="nav">
                                <ul className="footer-navigation">
                                    <li className="footer-navigation__item">
                                        <Link href="/quiz">
                                            <a href="#">Конструктор</a>
                                        </Link>
                                    </li>
                                    <li className="footer-navigation__item">
                                        <Link href="/quiz2">
                                            <a href="#">Ручной подбор</a>
                                        </Link>
                                    </li>
                                    <li className="footer-navigation__item">
                                        <Link href="/card">
                                            <a href="#">Карточка щита</a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="footer__contacts">
                        <div className="footer__col--third footer__col footer__col--first footer__col--j-start">
                            <a className="email" href="mailto:info@mail.ru">info@mail.ru</a>
                            <div className="intervals">
                                c 9 до 18:00 <br/>
                                без выходных
                            </div>
                        </div>
                        <div className="footer__col footer__col--second">

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
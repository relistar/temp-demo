import React from "react"
import MainLayout from "../components/MainLayout"
import {CalculatorOutlined, ArrowRightOutlined} from "@ant-design/icons"
import {Button} from "antd"
import {HandClickIcon} from "../components/lib/icon"
import Link from "next/link"

export default function Home() {

    return (
        <MainLayout>
            <section>
                <div className="container">
                    <div className="page-header">
                        <div className="main-page-header">
                            <div className="main-page-header__logo">
                                <img src="/img/logo.svg"/>
                            </div>
                           {/* <div className="main-page-header__text">
                                Фаза - это проводник, по которому ток приходит к потребителю. Соответственно ноль служит
                                для
                                <br/>
                                того, чтобы электрический ток двигался в обратном направлении к нулевому контуру. ...
                            </div>*/}
                        </div>
                        <div className="empty empty--first bg-diag-line"/>
                        <div className="empty empty--second"/>
                        <div className="empty empty--third empty--circle-top">
                            <svg width="274" height="124" viewBox="0 0 275 124" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M274 0C274 67.931 212.887 123 137.5 123C62.1131 123 1 67.931 1 0"
                                      stroke="#DCE8FF"/>
                            </svg>
                        </div>
                        <div className="empty empty--fourth"/>
                    </div>
                    <div className="page-header page-header--sub">
                        <div className="empty empty--first"/>
                        <div className="empty empty--second"/>
                        <div className="empty empty--third empty--no-border"/>
                        <div className="empty empty--fourth empty--no-border"/>
                    </div>

                    <div className="constructor-cards">
                        <div className="constructor-card constructor-card--first">
                            <div className="constructor-card__icon"><CalculatorOutlined/></div>
                            <div className="constructor-card__name">Конструктор щита</div>
                            <div className="constructor-card__desc">Ответьте на ряд вопросов и мы поможем <br/>Вам
                                выбрать готовое решение
                            </div>
                            <Link href="/card">
                                <div className="constructor-card__btn">
                                    <Button type="primary">Собрать щит<ArrowRightOutlined/></Button>
                                </div>
                            </Link>
                        </div>
                        <div className="constructor-card">
                            <div className="constructor-card__icon"><HandClickIcon/></div>
                            <div className="constructor-card__name">Ручной подбор щита</div>
                            <div className="constructor-card__desc">Уже знаете что собирать? Тогда выберите <br/>товары
                                из готовой спецификации и мы <br/>рассчитаем продукцию
                            </div>
                            <div className="constructor-card__btn">
                                <Button type="primary">Собрать щит<ArrowRightOutlined/></Button>
                            </div>
                        </div>
                    </div>
                    <div className="page-header page-header--under">
                        <div className="empty empty--first"/>
                        <div className="empty empty--second empty--no-border"/>
                        <div className="empty empty--third empty--no-border"/>
                        <div className="empty empty--fourth empty--no-border"/>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

import React from "react"
import MainLayout from "../components/MainLayout"
import {CalculatorOutlined, ArrowRightOutlined} from "@ant-design/icons"
import {Button} from "antd"
import {HandClickIcon} from "../components/lib/icon"
import Link from "next/link"
import {withAuthServerSideProps} from "../session/withAuth";

export default function Home() {

    return (
        <MainLayout title={"Главная"}>
            <section>
                <div className="container">
                    <div className="intro">
                        <div className="page-header">
                            <div className="empty empty--first bg-diag-line"/>
                            <div className="empty empty--second"/>
                            <div className="empty empty--third empty--circle-top">
                                <svg width="100%" height="124" viewBox="0 0 275 124" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M274 0C274 67.931 212.887 123 137.5 123C62.1131 123 1 67.931 1 0"
                                          stroke="#DCE8FF"/>
                                </svg>
                            </div>
                            <div className="empty empty--fourth"/>
                        </div>
                        <div className="main-page-header">
                            <div className="main-page-header__logo">
                                <img src="/img/logo.svg" width={181} height={65}/>
                            </div>
                            <div className="main-page-header__text">
                                Фаза - это проводник, по которому ток приходит к потребителю. Соответственно ноль служит
                                для того, чтобы электрический ток двигался в обратном направлении к нулевому контуру.
                                ... Заземляющий провод, называемый так же землей, не находится под напряжением и
                                предназначен&nbsp;для&nbsp;защиты человека от поражения электрическим током.
                            </div>
                        </div>
                        <div className="page-header page-header--sub d-lg-none">
                            <div className="empty empty--first"/>
                            <div className="empty empty--second"/>
                            <div className="empty empty--third empty--no-border"/>
                            <div className="empty empty--fourth empty--no-border"/>
                        </div>
                    </div>


                    <div className="constructor-cards">
                        <div className="constructor-card constructor-card--first">
                            <div className="constructor-card__icon"><CalculatorOutlined/></div>
                            <div className="constructor-card__name">Конструктор щита</div>
                            <div className="constructor-card__desc">Ответьте на ряд вопросов и мы поможем Вам выбрать
                                готовое решение
                            </div>
                            <Link href="/quiz">
                                <div className="button constructor-card__btn">
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
                            <Link href="/manual">
                                <div className="button constructor-card__btn">
                                    <Button type="primary">Собрать щит<ArrowRightOutlined/></Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="page-header page-header--under d-lg-none">
                        <div className="empty empty--first"/>
                        <div className="empty empty--second empty--no-border"/>
                        <div className="empty empty--third empty--no-border"/>
                        <div className="empty empty--fourth empty--no-border"/>
                    </div>

                    <div className="page-header page-header--under d-xl-none d-xxl-none d-xxxl-none d-lg-flex">
                        <div className="empty empty--first"/>
                        <div className="empty empty--second"/>
                        <div className="empty empty--third"/>
                        <div className="empty empty--fourth"/>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

async function getMainServerSideProps({req, res}) {
    return {
        props: {
        }
    }
}

export const getServerSideProps = withAuthServerSideProps(getMainServerSideProps);
import React from "react"
import {ArrowDownOutlined, ArrowRightOutlined} from '@ant-design/icons'
import MainLayout from "../../components/MainLayout";

export default function FAQ() {

    return (
        <MainLayout title={"FAQ"}>
            <section>
                <div className="container">
                    <div className="page-header page-header--manual">
                        <div className="quiz-page-header">
                            <h1>FAQ</h1>
                            <div className="quiz-question">Часто задаваемые вопросы</div>
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

                    <div className="faq">
                        <div className="faq-title">
                            <div className="faq-title__text">Может ли физическое лицо оформить заказ в
                                интернет-магазине?
                            </div>
                            <div className="faq-title__icon">
                                <ArrowRightOutlined width={11}
                                                    height={11}/>
                            </div>
                        </div>
                        <div className="faq-title">
                            <div className="faq-title__text">Может ли физическое лицо оформить заказ в
                                интернет-магазине?
                            </div>
                            <div className="faq-title__icon faq-title__icon--active">
                                <ArrowDownOutlined width={11}
                                                    height={11}/>
                            </div>
                        </div>
                        <div className="faq-info">
                            -  Нет, без входа в свою учетную запись оформление заказа невозможно. Без регистрации Вы можете приобрести товар через своего личного менеджера. Однако, мы рекомендуем Вам зарегистрироваться в интернет-магазине для того, чтобы получить доступ к расширенному функционалу. Например, после регистрации Вы сможете видеть в режиме реального времени свою индивидуальную цену на каждую позицию, историю заказов в личном кабинете, а также иметь возможность самостоятельно распечатать универсальный передаточный документ или воспользоваться сервисом «Акт сверки».
                        </div>
                        <div className="faq-title">
                            <div className="faq-title__text">Может ли физическое лицо оформить заказ в
                                интернет-магазине?
                            </div>
                            <div className="faq-title__icon">
                                <ArrowRightOutlined width={11}
                                                    height={11}/>
                            </div>
                        </div>
                        <div className="faq-title">
                            <div className="faq-title__text">Может ли физическое лицо оформить заказ в
                                интернет-магазине?
                            </div>
                            <div className="faq-title__icon">
                                <ArrowRightOutlined width={11}
                                                    height={11}/>
                            </div>
                        </div>
                        <div className="faq-title">
                            <div className="faq-title__text">Может ли физическое лицо оформить заказ в
                                интернет-магазине?
                            </div>
                            <div className="faq-title__icon">
                                <ArrowRightOutlined width={11}
                                                    height={11}/>
                            </div>
                        </div>
                        <div className="faq-title">
                            <div className="faq-title__text">Может ли физическое лицо оформить заказ в
                                интернет-магазине?
                            </div>
                            <div className="faq-title__icon">
                                <ArrowRightOutlined width={11}
                                                    height={11}/>
                            </div>
                        </div>
                        <div className="faq-title">
                            <div className="faq-title__text">Может ли физическое лицо оформить заказ в
                                интернет-магазине?
                            </div>
                            <div className="faq-title__icon">
                                <ArrowRightOutlined width={11}
                                                    height={11}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

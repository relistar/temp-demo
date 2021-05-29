import React from "react"
import MainLayout from "/components/MainLayout"
import {Button, Input} from 'antd'
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'

export default function Quiz() {

    return (
        <MainLayout>
            <section>
                <div className="container">
                    <div className="page-header">
                        <div className="quiz-page-header">
                            <h1>Конструктор щита</h1>
                            <div className="quiz-question">Укажите количество линий</div>
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
                    <div className="quiz">
                        <div className="quiz-answers">
                            <div className="card-answers">
                                <div className="card-answer">
                                    <span className="card-answer__text">Кол-во фаз</span>
                                    <span className="card-answer__value">3</span>
                                </div>
                            </div>
                        </div>
                        <div className="quest">
                            <div className="quest__first">
                                <div className="quest-options">
                                    <Input type="number" placeholder="Кол-во линий"/>
                                </div>
                                <div className="quest__empty"/>
                                <div className="quest-btn quest-btn--back">
                                    <Button type="primary" icon={<ArrowLeftOutlined />}>Назад</Button>
                                </div>
                            </div>
                            <div className="quest__second">
                                <div className="quest-desc">
                                    Ли́ния электропереда́чи (ЛЭП) — один из <br/>
                                    компонентов электрической сети, система <br/>
                                    энергетического оборудования, предназначенная для <br/>
                                    передачи электроэнергии посредством <br/>
                                    электрического тока.[источник не указан 221 день] <br/>
                                    Также электрическая линия в составе такой системы, <br/>
                                    выходящая за пределы электростанции или <br/>
                                    подстанции[1][неавторитетный источник?<br/>
                                </div>
                                <div className="quest-btn quest-btn--forward">
                                    <Button type="primary">Далее<ArrowRightOutlined /></Button>
                                </div>
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

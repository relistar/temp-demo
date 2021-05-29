import React from "react"
import MainLayout from "/components/MainLayout"
import {Button, Checkbox, Input} from 'antd'
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'

export default function Quiz() {

    return (
        <MainLayout>
            <section>
                <div className="container">
                    <div className="page-header page-header--quiz">
                        <div className="quiz-page-header">
                            <h1>Конструктор щита</h1>
                            <div className="quiz-question">Укажите количество фаз</div>
                        </div>
                        <div className="quiz-page-status">Вопрос 12/12</div>
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
                        <div className="quiz-answers d-lg-none">
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
                                    <div className="quest-checkbox quest-checkbox--first">
                                        <Checkbox>1 фаза</Checkbox>
                                    </div>
                                    <div className="quest-checkbox quest-checkbox--second">
                                        <Checkbox>3 фазы</Checkbox>
                                    </div>
                                    {/*<Input type="number" placeholder="Кол-во линий"/>*/}
                                </div>
                                <div className="quest__empty d-lg-none"/>
                            </div>
                            <div className="quest__second">
                                <div className="quest-desc">
                                    Фаза – это проводник, по которому ток приходит к потребителю. Соответственно ноль
                                    служит для того, чтобы электрический ток двигался в обратном направлении к нулевому
                                    контуру. ... Заземляющий провод, называемый так же землей, не находится под
                                    напряжением и предназначен для защиты человека от поражения электрическим током.
                                </div>
                            </div>
                        </div>
                        <div className="quest-buttons">
                            <div className="button button--back-icon quest-btn quest-btn--back">
                                <Button type="primary" icon={<ArrowLeftOutlined/>}>Назад</Button>
                            </div>

                            <div className="button quest-btn quest-btn--forward">
                                <Button type="primary">Далее<ArrowRightOutlined/></Button>
                            </div>
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

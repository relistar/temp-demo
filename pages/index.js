import React from "react"
import MainLayout from "../components/MainLayout"
import Title from "antd/lib/typography/Title"
import {Button, Checkbox, InputNumber} from 'antd'
import Scrollbar from "react-scrollbars-custom"
import { DeleteOutlined } from '@ant-design/icons'

export default function Home() {
    return (
        <MainLayout>
            <section className="card">
                <div className="container">
                    <div className="page-header">
                        <Title>
                            Карточка электрощита
                        </Title>
                        <div className="empty empty--first"/>
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
                    <div className="card-main">
                        <div className="card__image">
                        </div>
                        <div className="card-info">
                            <div className="card-info__top">
                                <div className="card-answers">
                                    <div className="card-answer">
                                        <span className="card-answer__text">Площадь</span>
                                        <span className="card-answer__value">240</span>
                                    </div>
                                    <div className="card-answer">
                                        <span className="card-answer__text">Кол-во комнат</span>
                                        <span className="card-answer__value">2</span>
                                    </div>
                                    <div className="card-answer">
                                        <span className="card-answer__text">Кол-во санузлов</span>
                                        <span className="card-answer__value">2</span>
                                    </div>
                                    <div className="card-answer">
                                        <span className="card-answer__text">Генератор</span>
                                        <span className="card-answer__value">Да</span>
                                    </div>
                                    <div className="card-answer">
                                        <span className="card-answer__text">Молнизащита</span>
                                        <span className="card-answer__value">Нет</span>
                                    </div>
                                </div>
                                <div className="card__subtitle">Параметры подобраны исходя из ответов в разделе
                                    “Конструктор”
                                </div>

                            </div>
                            <div className="card-info-form">
                                <div className="card-info-quest">
                                    <div className="card-info-quest__head">
                                        Желаете ли Вы приобрести
                                        дополнительные опции?
                                        Это ни к чему не обязывает, просто
                                        мы рассчитаем с дополнительными
                                        функциями
                                    </div>
                                    <div className="card-info-quest__body">
                                        <Checkbox>Собрать на гребенке</Checkbox>
                                        <Checkbox>Стеклянная дверца</Checkbox>
                                        <Checkbox>Стеклянная дверца</Checkbox>
                                    </div>
                                </div>
                                <div className="card-info-details">
                                    <div className="card-info-details__head">Спецификация электрощита</div>
                                    <div className="card-info-details__lines">
                                        <Scrollbar style={{ width: 250, height: 250 }}>
                                            <div className="card-info-details-line">
                                                <span className="card-info-details-line__name">1. Щит модуля</span>
                                                <InputNumber min={0} defaultValue={1} />
                                                <Button icon={<DeleteOutlined/>}/>
                                            </div>
                                            <div className="card-info-details-line">
                                                <span className="card-info-details-line__name">1. Щит модуля</span>
                                                <InputNumber min={0} defaultValue={1} />
                                                <Button icon={<DeleteOutlined/>}/>
                                            </div>
                                            <div className="card-info-details-line">
                                                <span className="card-info-details-line__name">1. Щит модуля</span>
                                                <InputNumber min={0} defaultValue={1} />
                                                <Button icon={<DeleteOutlined />}></Button>
                                            </div>
                                            <div className="card-info-details-line">
                                                <span className="card-info-details-line__name">1. Щит модуля</span>
                                                <InputNumber min={0} defaultValue={1} />
                                                <Button icon={<DeleteOutlined />}></Button>
                                            </div>
                                            <div className="card-info-details-line">
                                                <span className="card-info-details-line__name">1. Щит модуля</span>
                                                <InputNumber min={0} defaultValue={1} />
                                                <Button icon={<DeleteOutlined />}></Button>
                                            </div>
                                            <div className="card-info-details-line">
                                                <span className="card-info-details-line__name">1. Щит модуля</span>
                                                <InputNumber min={0} defaultValue={1} />
                                                <Button icon={<DeleteOutlined />}></Button>
                                            </div>
                                            <div className="card-info-details-line">
                                                <span className="card-info-details-line__name">1. Щит модуля</span>
                                                <InputNumber min={0} defaultValue={1} />
                                                <Button icon={<DeleteOutlined />}></Button>
                                            </div>
                                        </Scrollbar>
                                    </div>
                                    <div className="card-info-details__submitter">
                                        <Button type="primary">
                                            Сохранить
                                        </Button>
                                        <span className="submitter__label">
                                            Нажимая кнопку, Вы сохраняете все изменения, произведенные в этом окне
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

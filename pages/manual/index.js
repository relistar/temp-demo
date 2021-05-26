import React from "react"
import MainLayout from "/components/MainLayout"
import {Button, Input, InputNumber} from 'antd'
import {ArrowLeftOutlined, ArrowRightOutlined, DeleteOutlined} from '@ant-design/icons'
import CustomScrollbars from "../../components/lib/Scrollbars"

export default function Manual() {
    const specLines = [
        {
            name: "Щит модуля",
            qty: 1
        },
        {
            name: "Щит модуля",
            qty: 1
        },
        {
            name: "Реле напряжения",
            qty: 1
        },
        {
            name: "Щит модуля",
            qty: 1
        },
        {
            name: "УЗО",
            qty: 1
        },
        {
            name: "Автомат",
            qty: 1
        },
        {
            name: "Автомат",
            qty: 1
        },
        {
            name: "Автомат",
            qty: 1
        },
        {
            name: "Автомат",
            qty: 1
        },
        {
            name: "Автомат",
            qty: 1
        },
        {
            name: "Автомат",
            qty: 1
        },
        {
            name: "Автомат",
            qty: 1
        }
    ]

    return (
        <MainLayout>
            <section>
                <div className="container">
                    <div className="page-header">
                        {/*TODO rename*/}
                        <div className="quiz-page-header">
                            <h1>Ручной подбор щита</h1>
                            <div className="quiz-question">Спецификация №12</div>
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
                    <div className="page-header page-header--under-big page-header--border-top">
                        <div className="empty empty--first"/>
                        <div className="empty empty--second"/>
                        <div className="empty empty--third empty--no-border"/>
                        <div className="empty empty--fourth empty--no-border"/>
                    </div>
                    <div className="manual">
                        <div className="categories-block">
                            <ul className="categories">
                                <li className="categories-item categories-item--selected">
                                    <span className="categories-item__text">Автоматы</span>
                                    <span className="categories-item__icon"><ArrowRightOutlined width={20} height={20}/></span>
                                </li>
                                <li className="categories-item">
                                    <span className="categories-item__text">Счетчики</span>
                                    <span className="categories-item__icon"><ArrowRightOutlined width={20} height={20}/></span>
                                </li>
                                <li className="categories-item">
                                    <span className="categories-item__text">УЗО</span>
                                    <span className="categories-item__icon"><ArrowRightOutlined width={20} height={20}/></span>
                                </li>
                                <li className="categories-item">
                                    <span className="categories-item__text">Рубильники</span>
                                    <span className="categories-item__icon"><ArrowRightOutlined width={20} height={20}/></span>
                                </li>
                            </ul>
                        </div>
                        <div className="char-form">
                            <div className="char-form-lines">
                                <div className="char-form-lines__item">
                                    <div className="char-form-lines__name">Количество полюсов</div>
                                    <div className="char-form-variants">
                                        <div className="char-form-variant char-form-variant--selected">1</div>
                                        <div className="char-form-variant">2</div>
                                        <div className="char-form-variant">3</div>
                                    </div>
                                </div>
                                <div className="char-form-lines__item">
                                    <div className="char-form-lines__name">Номинал</div>
                                    <div className="char-form-variants">
                                        <div className="char-form-variant">1</div>
                                        <div className="char-form-variant">2</div>
                                        <div className="char-form-variant">3</div>
                                        <div className="char-form-variant">3</div>
                                    </div>
                                </div>
                                <div className="char-form-lines__item">
                                    <div className="char-form-lines__name">Предельная отключающая способность</div>
                                    <div className="char-form-variants">
                                        <div className="char-form-variant">1</div>
                                        <div className="char-form-variant">2</div>
                                        <div className="char-form-variant">3</div>
                                    </div>
                                </div>
                                <div className="char-form-lines__item">
                                    <div className="char-form-lines__name">Номинал</div>
                                    <div className="char-form-variants">
                                        <div className="char-form-variant">1</div>
                                        <div className="char-form-variant">2</div>
                                        <div className="char-form-variant">3</div>
                                    </div>
                                </div>
                                <div className="char-form-lines__item">
                                    <div className="char-form-lines__name">Номинал</div>
                                    <div className="char-form-variants">
                                        <div className="char-form-variant">1</div>
                                        <div className="char-form-variant">2</div>
                                        <div className="char-form-variant">3</div>
                                    </div>
                                </div>
                                <div className="char-form-lines__item">
                                    <div className="char-form-lines__name">Номинал</div>
                                    <div className="char-form-variants">
                                        <div className="char-form-variant">1</div>
                                        <div className="char-form-variant">2</div>
                                        <div className="char-form-variant">3</div>
                                    </div>
                                </div>
                                <div className="char-form-lines__item">
                                    <div className="char-form-lines__name">Номинал</div>
                                    <div className="char-form-variants">
                                        <div className="char-form-variant">1</div>
                                        <div className="char-form-variant">2</div>
                                        <div className="char-form-variant">3</div>
                                    </div>
                                </div>
                                <div className="char-form-lines__item">
                                    <div className="char-form-lines__name">Номинал</div>
                                    <div className="char-form-variants">
                                        <div className="char-form-variant">1</div>
                                        <div className="char-form-variant">2</div>
                                        <div className="char-form-variant">3</div>
                                    </div>
                                </div>
                                <div className="char-form-lines__item">
                                    <div className="char-form-lines__name">Номинал</div>
                                    <div className="char-form-variants">
                                        <div className="char-form-variant">1</div>
                                        <div className="char-form-variant">2</div>
                                        <div className="char-form-variant">3</div>
                                    </div>
                                </div>
                                <div className="char-form-lines__item">
                                    <div className="char-form-lines__name">Номинал</div>
                                    <div className="char-form-variants">
                                        <div className="char-form-variant">1</div>
                                        <div className="char-form-variant">2</div>
                                        <div className="char-form-variant">3</div>
                                    </div>
                                </div>
                            </div>
                            {/*TODO refactor*/}
                            <div className="char-form__btn">
                                <Button type="primary">Добавить в спецификацию<ArrowRightOutlined /></Button>
                            </div>
                        </div>

                        <div className="spec">
                            <div className="card-info-details">
                                <CustomScrollbars style={{width: '100%', height: 331}} autoHeightMin={331}>
                                    <div className="card-info-details__head">Спецификация электрощита</div>
                                    <div className="card-info-details__lines">

                                        {specLines.map((line, index) => (
                                            <div className="card-info-details-line">
                                                    <span
                                                        className="card-info-details-line__name">{index + 1}. {line.name}</span>
                                                <div className="card-info-details-line__controls">
                                                    <div className="input-num">
                                                        <span className="input-num-btn">-</span>
                                                        <InputNumber min={0} defaultValue={2} onChange={() => {
                                                        }}/>
                                                        <span className="input-num-btn">+</span>
                                                    </div>
                                                    <div className="remove-button">
                                                        <Button icon={<DeleteOutlined/>}/>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CustomScrollbars>
                            </div>
                            <div className="spec__btn">
                                <Button type="primary">Перейти к щиту<ArrowRightOutlined /></Button>
                            </div>
                        </div>
                    </div>
                    <div className="page-header page-header--under">
                        <div className="empty empty--first empty--no-border"/>
                        <div className="empty empty--second empty--no-border"/>
                        <div className="empty empty--third empty--no-border"/>
                        <div className="empty empty--fourth empty--no-border empty--no-border-right"/>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

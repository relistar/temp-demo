import React from "react"
import MainLayout from "../components/MainLayout"
import Title from "antd/lib/typography/Title"
import {Button, Checkbox, InputNumber} from 'antd'
import Scrollbar from "react-scrollbars-custom"
import {DeleteOutlined, FileTextOutlined} from '@ant-design/icons'
import CustomScrollbars from "../components/lib/Scrollbars"

export default function Home() {
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
                        <div className="card-image">
                            <img src="/img/card-image.png" alt="" width={320} height={510}/>
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
                                <div className="card-subtitle">Параметры подобраны исходя из ответов в разделе
                                    “Конструктор”
                                </div>

                            </div>
                            <div className="card-info-form">
                                <div className="card-info-quest">
                                    <div className="card-info-quest__head">
                                        Желаете ли Вы приобрести
                                        дополнительные опции? <br/>
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
                                        <CustomScrollbars style={{width: '100%', height: 282}} autoHeightMin={282}>
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
                                    <div className="card-info-details-submitter">
                                        <div className="card-info-details-submitter__btn btn-wrap">
                                            <Button type="primary">
                                                Сохранить
                                            </Button>
                                        </div>
                                        <span className="card-info-details-submitter__label">
                                            Нажимая кнопку, Вы сохраняете все <br/> изменения, произведенные в этом окне
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-header page-header--second">
                        <Title level={2}>
                            Варианты электрощитов, подходящие под Ваши параметры
                        </Title>
                        <div className="empty empty--first"/>
                        <div className="empty empty--second"/>
                        <div className="empty empty--third empty--no-border"/>
                        <div className="empty empty--fourth empty--no-border empty--relative">
                            <svg className="ellipse--right-bottom" width="167" height="75" viewBox="0 0 169 76"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.999998 76C0.999994 34.5787 38.3842 1.00001 84.5 1.00001C130.616 1 168 34.5786 168 76"
                                    stroke="#DCE8FF"/>
                            </svg>
                        </div>
                    </div>
                    <div className="spec-var-table">
                        <div className="table-head">
                            <div className="table-head__item table-head__item--first">Бренд/серия</div>
                            <div className="table-head__item table-head__item--second">Стоимость</div>
                            <div className="table-head__item table-head__item--third">Наличие</div>
                            <div className="table-head__item table-head__item--fourth table-head__item--empty"/>
                            <div className="table-head__item table-head__item--fifth table-head__item--empty"/>
                        </div>
                        <div className="table-lines">
                            <div className="table-lines__item">
                                <div className="table-lines__col table-lines__col--first">
                                    <span className="table-lines__brand">ABB</span>
                                    &nbsp;
                                    <span className="table-lines__serial">премиум</span>
                                </div>
                                <div className="table-lines__col table-lines__col--second">
                                    <span className="table-lines__price">29'920 &#8381;</span>
                                </div>
                                <div className="table-lines__col table-lines__col--third">
                                    <div className="table-lines-availability table-lines-availability--true">
                                        В наличии
                                    </div>
                                </div>
                                <div className="table-lines__col table-lines__col--fourth">
                                    <div className="btn-wrap">
                                        <Button>Скачать</Button>
                                    </div>
                                </div>
                                <div className="table-lines__col table-lines__col--fifth">
                                    <div className="btn-wrap btn-wrap--icon">
                                        <Button icon={<FileTextOutlined/>}>Заказать</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="table-lines__item">
                                <div className="table-lines__col table-lines__col--first">
                                    <span className="table-lines__brand">ABB</span>
                                    &nbsp;
                                    <span className="table-lines__serial">премиум</span>
                                </div>
                                <div className="table-lines__col table-lines__col--second">
                                    <span className="table-lines__price">29'920 &#8381;</span>
                                </div>
                                <div className="table-lines__col table-lines__col--third">
                                    <div className="table-lines-availability">
                                        Под заказ
                                    </div>
                                </div>
                                <div className="table-lines__col table-lines__col--fourth">
                                    <div className="btn-wrap">
                                        <Button>Скачать</Button>
                                    </div>
                                </div>
                                <div className="table-lines__col table-lines__col--fifth">
                                    <div className="btn-wrap">
                                        <Button icon={<FileTextOutlined/>}>Заказать</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="table-lines__item">
                                <div className="table-lines__col table-lines__col--first">
                                    <span className="table-lines__brand">ABB</span>
                                    &nbsp;
                                    <span className="table-lines__serial">премиум</span>
                                </div>
                                <div className="table-lines__col table-lines__col--second">
                                    <span className="table-lines__price">29'920 &#8381;</span>
                                </div>
                                <div className="table-lines__col table-lines__col--third">
                                    <div className="table-lines-availability table-lines-availability--true">
                                        В наличии
                                    </div>
                                </div>
                                <div className="table-lines__col table-lines__col--fourth">
                                    <div className="btn-wrap">
                                        <Button>Скачать</Button>
                                    </div>
                                </div>
                                <div className="table-lines__col table-lines__col--fifth">
                                    <div className="btn-wrap">
                                        <Button icon={<FileTextOutlined/>}>Заказать</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="table-lines__item">
                                <div className="table-lines__col table-lines__col--first">
                                    <span className="table-lines__brand">ABB</span>
                                    &nbsp;
                                    <span className="table-lines__serial">премиум</span>
                                </div>
                                <div className="table-lines__col table-lines__col--second">
                                    <span className="table-lines__price">29'920 &#8381;</span>
                                </div>
                                <div className="table-lines__col table-lines__col--third">
                                    <div className="table-lines-availability">
                                        Под заказ
                                    </div>
                                </div>
                                <div className="table-lines__col table-lines__col--fourth">
                                    <div className="btn-wrap">
                                        <Button>Скачать</Button>
                                    </div>
                                </div>
                                <div className="table-lines__col table-lines__col--fifth">
                                    <div className="btn-wrap">
                                        <Button icon={<FileTextOutlined/>}>Заказать</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="table-lines__item">
                                <div className="table-lines__col table-lines__col--first">
                                    <span className="table-lines__brand">ABB</span>
                                    &nbsp;
                                    <span className="table-lines__serial">премиум</span>
                                </div>
                                <div className="table-lines__col table-lines__col--second">
                                    <span className="table-lines__price">29'920 &#8381;</span>
                                </div>
                                <div className="table-lines__col table-lines__col--third">
                                    <div className="table-lines-availability table-lines-availability--true">
                                        В наличии
                                    </div>
                                </div>
                                <div className="table-lines__col table-lines__col--fourth">
                                    <div className="btn-wrap">
                                        <Button>Скачать</Button>
                                    </div>
                                </div>
                                <div className="table-lines__col table-lines__col--fifth">
                                    <div className="btn-wrap">
                                        <Button icon={<FileTextOutlined/>}>Заказать</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="empty-table-lines">
                            <div className="empty-table-lines__item">
                                <div className="empty-table-lines__col empty-table-lines__col--first">&nbsp;</div>
                                <div className="empty-table-lines__col empty-table-lines__col--second">&nbsp;</div>
                                <div className="empty-table-lines__col empty-table-lines__col--third">&nbsp;</div>
                                <div className="empty-table-lines__col empty-table-lines__col--fourth">&nbsp;</div>
                                <div className="empty-table-lines__col empty-table-lines__col--fifth">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

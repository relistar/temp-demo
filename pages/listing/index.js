import React, {useEffect, useState} from "react"
import {Button, Checkbox, Input, Modal, Slider} from 'antd'
import {
    ArrowDownOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined, CheckCircleOutlined,
    FileTextOutlined,
    SaveOutlined
} from '@ant-design/icons'
import {API, BASE_API} from "../../bapi/manual";
import {Radio} from 'antd';
import {fitPageHeaderHeight} from "../../native/fitHeader";
import {applySession} from "next-iron-session";
import {options} from "../../session";
import {withAuthServerSideProps} from "../../session/withAuth";
import MainLayout from "../../components/MainLayout";
import {useRouter} from "next/router";
import {CloseIcon, FilterIcon} from "../../components/lib/icon";

export default function Listing({}) {

    return (
        <MainLayout title={"Конструктор щита"}>
            <section>
                <div className="container container--no-p-right">
                    <div className="page-header page-header--quiz">
                        <div className="quiz-page-header">
                            <h1>Конструктор щита</h1>
                            <div className="quiz-question">Подобрать корпус</div>
                        </div>
                        <div className="empty empty--first bg-diag-line"/>
                        <div className="empty empty--second"/>
                        <div className="empty empty--third empty--circle-top">
                            <svg width="274" height="124" viewBox="0 0 275 124" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M274 0C274 67.931 212.887 123 137.5 123C62.1131 123 1 67.931 1 0"
                                      stroke="#b4e1fa"/>
                            </svg>
                        </div>
                        <div className="empty empty--fourth"/>
                    </div>
                    <div className="listing">
                        <div className="listing-filters-mobile">
                            <div className="listing-filters-mobile__text">
                                Фильтры
                            </div>
                            <div className="listing-filters-mobile__icon">
                                <FilterIcon/>
                            </div>
                        </div>
                        <div className="listing-filters">
                            <div className="listing-filters-heading">
                                <div className="listing-filters-heading__text">
                                    Фильтры
                                </div>
                            </div>
                            <div className="listing-filters__body">
                                <ul className="filter-accordion">
                                    <li className="filter-accordion-item filter-accordion-item--active">
                                        <span className="filter-accordion-item__text">Цвет</span>
                                        <div className="filter-accordion-item__icon"><ArrowDownOutlined/></div>
                                    </li>
                                    <div className="filter-variants">
                                        <Checkbox>Белый</Checkbox>
                                        <Checkbox>Черный</Checkbox>
                                        <Checkbox>Серый</Checkbox>
                                        <Checkbox>Темно-серый</Checkbox>
                                    </div>
                                    <li className="filter-accordion-item">
                                        <span className="filter-accordion-item__text">Размеры</span>
                                        <div className="filter-accordion-item__icon"><ArrowRightOutlined/></div>
                                    </li>
                                    <li className="filter-accordion-item">
                                        <span className="filter-accordion-item__text">Бренд</span>
                                        <div className="filter-accordion-item__icon"><ArrowRightOutlined/></div>
                                    </li>
                                    <li className="filter-accordion-item">
                                        <span className="filter-accordion-item__text">Материал</span>
                                        <div className="filter-accordion-item__icon"><ArrowRightOutlined/></div>
                                    </li>
                                    <li className="filter-accordion-item filter-accordion-item--active">
                                        <span className="filter-accordion-item__text">Цена</span>
                                        <div className="filter-accordion-item__icon"><ArrowDownOutlined/></div>
                                    </li>
                                    <div className="filter-variants">
                                        <div className="price-slider">
                                            <Slider range defaultValue={[0, 34]} min={0} max={50}/>
                                            <div className="price-slider-manual">
                                                <div className="price-slider-manual__from">
                                                    <Input value={"129 ₽"}/>
                                                </div>
                                                <div className="price-slider-manual__to">
                                                    <Input value={"22 000 ₽"}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="listing-items">
                            <div className="listing-items-heading">
                                <div className="listing-items-heading__text">
                                    Выберите корпус
                                </div>
                            </div>
                            <div className="listing-items-body">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(olo => (
                                    <div className="listing-card">
                                        <div className="listing-card-top">
                                            <div className="listing-card-top__action">
                                                <FileTextOutlined style={{fontSize: '16px', color: 'white'}}/>
                                            </div>
                                        </div>

                                        <div className="listing-card-info">
                                            <div className="listing-card__image">
                                                <img src="/image2.png"/>
                                            </div>
                                            <div className="listing-card__brand">
                                                Бренд: МАСТЕР-1
                                            </div>

                                            <div className="listing-card__name">
                                                Шкаф МАСТЕР-1, Монтажный настенный
                                            </div>

                                            <div className="listing-card__dimensions">
                                                220х270х140 мм
                                            </div>

                                            <div className="listing-card__description">
                                                RAL 7035, 5 модулей, Степень водо-пылезащитыsssss IP31
                                            </div>
                                            <div className="listing-card-bottom">
                                                <div className="listing-card__price">1 055 ₽</div>
                                                <div className="listing-card__availability">Доступно</div>
                                            </div>

                                            <div className="listing-card__select">
                                                <div className="btn-wrap">
                                                    <Button type="primary">Выбрать</Button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal
                className={"filters-modal"}
                width={434}
                visible={false}
                maskClosable
                closable
                onCancel={()=>{}}
                onOk={()=>{}}
                title={[
                    <div className="modal-title"/>
                ]}
                footer={[
                    <div className="filters-modal-footer"/>
                ]}
                closeIcon={<CloseIcon/>}
            >
                <div className="filters-modal-body">
                    <div className="listing-filters-mobile">
                        <div className="listing-filters-mobile__text">
                            Фильтры
                        </div>
                        <div className="listing-filters-mobile__icon">
                            <FilterIcon/>
                        </div>
                    </div>

                    <ul className="filter-accordion">
                        <li className="filter-accordion-item filter-accordion-item--active">
                            <span className="filter-accordion-item__text">Цвет</span>
                            <div className="filter-accordion-item__icon"><ArrowDownOutlined/></div>
                        </li>
                        <div className="filter-variants">
                            <Checkbox>Белый</Checkbox>
                            <Checkbox>Черный</Checkbox>
                            <Checkbox>Серый</Checkbox>
                            <Checkbox>Темно-серый</Checkbox>
                        </div>
                        <li className="filter-accordion-item">
                            <span className="filter-accordion-item__text">Размеры</span>
                            <div className="filter-accordion-item__icon"><ArrowRightOutlined/></div>
                        </li>
                        <li className="filter-accordion-item">
                            <span className="filter-accordion-item__text">Бренд</span>
                            <div className="filter-accordion-item__icon"><ArrowRightOutlined/></div>
                        </li>
                        <li className="filter-accordion-item">
                            <span className="filter-accordion-item__text">Материал</span>
                            <div className="filter-accordion-item__icon"><ArrowRightOutlined/></div>
                        </li>
                        <li className="filter-accordion-item filter-accordion-item--active">
                            <span className="filter-accordion-item__text">Цена</span>
                            <div className="filter-accordion-item__icon"><ArrowDownOutlined/></div>
                        </li>
                        <div className="filter-variants">
                            <div className="price-slider">
                                <Slider range defaultValue={[0, 34]} min={0} max={50}/>
                                <div className="price-slider-manual">
                                    <div className="price-slider-manual__from">
                                        <Input value={"129 ₽"}/>
                                    </div>
                                    <div className="price-slider-manual__to">
                                        <Input value={"22 000 ₽"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </Modal>
        </MainLayout>
    )
}


async function getListingServerSideProps({req, res}) {
    await applySession(req, res, options)

    const token = req.session.get("token");

    //const response = await BASE_API.getQuiz(token)

    //const questions = response.data;

    return {
        props: {}
    }
}

export const getServerSideProps = withAuthServerSideProps(getListingServerSideProps);
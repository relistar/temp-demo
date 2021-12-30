import React, {useState} from 'react'
import Link from "next/link"
import {Button, Checkbox, Drawer, Form, Input, Modal, Upload} from 'antd'
import {AddIcon, CloseIcon, TrackIcon} from "../lib/icon"
import {useRouter} from 'next/router'
import {API} from "../../bapi/manual";
import format from 'date-fns/format'
import {dateFormat} from "../constants";

const {Dragger} = Upload;

export default function MyHeader(props) {
    const [burgerOpened, setBurgerOpened] = useState(false)
    const [isTrackFormModalOpened, setIsTrackFormModalOpened] = React.useState(false)
    const [isTrackResultModalOpened, setIsTrackResultFormModalOpened] = React.useState(false)
    const [isOrderModalOpened, setIsOrderModalOpened] = React.useState(false)
    const [trackError, setTrackError] = useState(null)
    const [trackData, setTrackData] = useState(null)


    const {pathname} = useRouter()

    const openBurger = () => {
        setBurgerOpened(true)
    }

    const closeBurger = () => {
        setBurgerOpened(false)
    }

    function handleTrackFormModalCancel() {
        setIsTrackFormModalOpened(false)
    }

    function handleTrackFormModalOk() {
        setIsTrackFormModalOpened(false)
    }

    function handleTrackFormModalOpen() {
        setIsTrackFormModalOpened(true)
    }


    function handleTrackResultFormModalCancel() {
        setIsTrackResultFormModalOpened(false)
    }

    function handleTrackResultFormModalOk() {
        setIsTrackResultFormModalOpened(false)
    }

    function handleTrackResultFormModalOpen() {
        setIsTrackFormModalOpened(false)
        setIsTrackResultFormModalOpened(true)
    }

    function handleOrderFormModalCancel() {
        setIsOrderModalOpened(false)
    }

    function handleOrderFormModalOk() {
        setIsOrderModalOpened(false)
    }

    function handleOrderFormModalOpen() {
        setIsOrderModalOpened(true)
    }

    function handleTrackFormSubmit(values) {
        console.log(values)
        API.trackOrder(values).then(({data}) => {
            console.log(data)
            if (data.hasError) {
                setTrackError(data.data)
            } else {
                setTrackError(null)
                setTrackData(data.data)
                setIsTrackFormModalOpened(false)
                setIsTrackResultFormModalOpened(true)
            }
        }).catch(res => {
            console.log(res)

        })
    }

    const titleBlock = (
        <div className="burger-menu-title">
            <div className="burger-menu-title__logo">
                <img src="/img/logo.svg" width={66} height={16}/>
            </div>
            <div className="burger-menu-title__desc">
                Сборка и производство электрощитов
            </div>
        </div>
    )

    return (
        <header className={'header d-xss-none'}>
            <div className="container">
                <div className="preheader d-lg-none">
                    <div className="preheader__desc">Сборка и производство
                        электрощитов
                    </div>
                    <div className="preheader__contacts">
                        {/* <div className="preheader__track" onClick={handleTrackFormModalOpen}>
                            <div className="preheader__track-icon">
                                <TrackIcon/>
                            </div>
                            <a className="preheader__track-link" href="javascript:void(0)">Проверить статус заказа</a>
                        </div> */}
                        <a className="preheader__contact" href="tel:88001016952">8(800) 101-69-52</a>
                        <a className="preheader__contact" href="tel:88001016952">8(800) 101-69-52</a>
                    </div>
                </div>
                <div className="header__main">
                    <div className="logo">
                        <Link href="/">
                            <a href="/">
                                <img src="/img/logo.svg" width={66} height={16}/>
                            </a>
                        </Link>
                    </div>
                    <div className="empty empty--border-white d-lg-none"/>
                    <nav className="nav d-lg-none">
                        <ul className="navigation">
                            <li className={"navigation__item" + (pathname === '/quiz' ? " navigation__item--active" : "")}>
                                <Link href="/quiz">
                                    <a key="quiz" href="#">Конструктор</a>
                                </Link>
                            </li>
                            <li className={"navigation__item navigation__item--has-left-border" + (pathname === '/manual' ? " navigation__item--active" : "")}>
                                <Link href="/manual">
                                    <a key="manual" href="#">Ручной подбор</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-right d-lg-flex">
                        <div className="contacts-wrap d-md-none">
                            <div className="contacts">
                                <a className="contacts__item" href="tel:88001016952">8(800) 101-69-52</a>
                                <a className="contacts__item contacts__item--border contacts__item--margin"
                                   href="tel:88001016952">8(800) 101-69-52</a>
                            </div>
                        </div>
                        <div className="burger-wrap d-lg-block">
                            <div onClick={openBurger} className="burger">
                                <div className="burger__line"/>
                                <div className="burger__line"/>
                                <div className="burger__line"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Drawer
                    onClose={closeBurger}
                    visible={burgerOpened}
                    closeIcon={<CloseIcon/>}
                    title={titleBlock}
                    width={349}
                >
                    <div className="burger-menu">
                        <nav className="nav">
                            <ul className="navigation">
                                <li className="navigation__item">
                                    <Link href="/quiz">
                                        <a href="#">Конструктор</a>
                                    </Link>
                                </li>
                                <li className="navigation__item navigation__item--active navigation__item--has-left-border">
                                    <Link href="/manual">
                                        <a href="#">Ручной подбор</a>
                                    </Link>
                                </li>
                                <li className="navigation__item navigation__item--active navigation__item--has-left-border">
                                    <Link href="/faq">
                                        <a href="#">Частые вопросы</a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="contacts">
                            <a className="contacts__item" href="tel:88001016952">8(800) 101-69-52</a>
                            <a className="contacts__item" href="88001016952">8(800) 101-69-52</a>
                        </div>
                    </div>
                </Drawer>
                <Modal
                    width={572}
                    visible={isTrackFormModalOpened}
                    maskClosable
                    closable
                    onCancel={handleTrackFormModalCancel}
                    onOk={handleTrackFormModalOk}
                    title={[
                        <div className="modal-title"/>
                    ]}
                    footer={[
                        <div className="modal-footer-empty-block">
                            <div className="modal-footer-empty modal-footer-empty--first"/>
                        </div>
                    ]}
                    closeIcon={<CloseIcon/>}
                >
                    <div className="modal-body">
                        <div className="track-form-wrap">
                            <Form
                                name="normal_login"
                                className="track-form"
                                onFinish={handleTrackFormSubmit}
                                size="large"
                            >
                                <Form.Item
                                    name="orderNumber"
                                    rules={[
                                        {
                                            required: true,
                                            message: '',
                                        }
                                    ]}
                                >
                                    <Input placeholder="Номер заказа"/>
                                </Form.Item>
                                {trackError && (<div className={"track-error"}>{trackError.detail}</div>)}

                                <Form.Item>
                                    <div className="button">
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            Проверить
                                        </Button>
                                    </div>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Modal>

                {trackData && (
                    <Modal
                        width={572}
                        visible={isTrackResultModalOpened}
                        maskClosable
                        closable
                        onCancel={handleTrackResultFormModalCancel}
                        onOk={handleTrackResultFormModalOk}
                        title={[
                            <div className="modal-title"/>
                        ]}
                        footer={[
                            <div className="modal-footer-empty-block">
                                <div className="modal-footer-empty modal-footer-empty--first"/>
                            </div>
                        ]}
                        closeIcon={<CloseIcon/>}
                    >
                        <>
                            <div className="track-result-header">
                                <div className="track-result-header__order">Заказ №{trackData.header.orderId}</div>
                                <div
                                    className="track-result-header__order-date">от {format(new Date(trackData.header.creationDate), dateFormat)}</div>
                            </div>

                            <div className="modal-body">
                                <div className="track-result-wrap">
                                    <Form
                                        name="normal_login"
                                        className="track-history"
                                        onFinish={() => {
                                        }}
                                        size="large"
                                    >
                                        {trackData.history.map(line => (
                                            <div className="track-history-line" key={line.title}>
                                                <div className="track-history-line__title">{line.title}</div>
                                                <div
                                                    className="track-history-line__date">{format(new Date(line.date), dateFormat)}</div>
                                            </div>
                                        ))}
                                        <Form.Item>
                                            <div className="button track-button">
                                                <Button type="primary" htmlType="submit" className="login-form-button"
                                                        onClick={() => handleTrackResultFormModalOk()}>
                                                    Закрыть трекинг
                                                </Button>
                                            </div>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </>
                    </Modal>
                )}

                <Modal
                    width={572}
                    visible={isOrderModalOpened}
                    maskClosable
                    closable
                    onCancel={handleOrderFormModalCancel}
                    onOk={handleOrderFormModalOk}
                    title={[
                        <div className="modal-title"/>
                    ]}
                    footer={[
                        <div className="modal-footer-empty-block">
                            <div className="modal-footer-empty modal-footer-empty--first"/>
                        </div>
                    ]}
                    closeIcon={<CloseIcon/>}
                >
                    <>
                        <div className="modal-body">
                            <div className="track-result-wrap">
                                <div className="track-result-title">Заказ в 1 клик</div>
                                <Form
                                    name="normal_login"
                                    className="track-history"
                                    onFinish={() => {
                                    }}
                                    size="large"
                                >
                                    <Form.Item
                                        className="order-input-wrap"
                                        name="name"
                                        rules={[]}
                                    >
                                        <Input className="order-input" placeholder="ФИО"/>
                                    </Form.Item>
                                    <Form.Item
                                        className="order-input-wrap"
                                        name="city"
                                        rules={[]}
                                    >
                                        <Input className="order-input" placeholder="Ваш город"/>
                                    </Form.Item>
                                    <Form.Item
                                        className="order-input-wrap"
                                        name="phone"
                                        rules={[]}
                                    >
                                        <Input className="order-input" placeholder="Телефон"/>
                                    </Form.Item>
                                    <Form.Item
                                        className="order-input-wrap"
                                        name="email"
                                        rules={[]}
                                    >
                                        <Input className="order-input" placeholder="e-mail"/>
                                    </Form.Item>
                                    <Dragger {...props}>
                                        <div className="dragger-box">
                                            <div className="dragger-box-icon"><AddIcon/></div>
                                            <div className="dragger-box-text">
                                                <span className="dragger-box-text__first">Выберите файл</span>
                                                <div className="dragger-box-text__second">или перетащите его сюда</div>
                                            </div>
                                        </div>
                                    </Dragger>
                                    <Form.Item
                                        className="order-input-wrap-checkbox"
                                        name="agreement"
                                        valuePropName="checked"
                                        rules={[]}
                                    >
                                        <Checkbox>
                                            <span className="agreement-box">Нажимая на кнопку, вы соглашаетесь с <a
                                                className="agreement-box__link" href="#">условиями обработки персональных данных.</a></span>
                                        </Checkbox>
                                    </Form.Item>
                                    <Form.Item>
                                        <div className="button track-button">
                                            <Button type="primary" htmlType="submit" className="login-form-button">
                                                Оформить заказ
                                            </Button>
                                        </div>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </>
                </Modal>
            </div>
        </header>
    )
}
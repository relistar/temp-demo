import React, {useEffect, useState} from "react"
import MainLayout from "/components/MainLayout"
import Title from "antd/lib/typography/Title"
import {Button, Checkbox, InputNumber, Modal} from 'antd'
import {CheckCircleOutlined, DeleteOutlined, FileTextOutlined} from '@ant-design/icons'
import CustomScrollbars from "/components/lib/Scrollbars"
import {API, BASE_API} from "../../bapi/manual"
import currency from "currency.js"
import {useRouter} from "next/router";
import {CloseIcon} from "../../components/lib/icon";
import downloader from "js-file-download"
import {withAuthServerSideProps} from "../../session/withAuth";
import {applySession} from "next-session";
import {options} from "../../session";

export default function Card({specificationProp, specificationDetailsProp}) {
    const router = useRouter()
    const [spec, setSpec] = useState(specificationProp)
    const [specDetails, setSpecDetails] = useState(specificationDetailsProp)
    const [isModalOpened, setIsModalOpened] = React.useState(false)
    const [orderDetails, setOrderDetails] = React.useState({orderId: 0})

    useEffect(() => {
        if(orderDetails.orderId) {
            setIsModalOpened(true)
        }
    }, [orderDetails.orderId])

    function handleSpecLineQuantityChange(specLineId, quantity, remove) {
        if (quantity < 0) {
            return
        }

        const newSpec = {...spec}
        let newLines = [...newSpec.lines]

        const currentLine = newLines.find(line => line.specLineId === specLineId)
        currentLine.quantity = quantity

        if(remove) {
            currentLine.isRemoved = remove
        }

        setSpec(newSpec)
    }

    function handleOptionCheck(optionId, checked) {
        const newSpec = {...spec}

        const newOptions = [...newSpec.options]

        const currentOption = newOptions.find(option => option.optionId === optionId)

        currentOption.isChecked = checked
        newSpec.options = newOptions

        setSpec(newSpec)
    }

    function formatPrice(price) {
        return currency(price, {
            separator: '\'',
            pattern: '# !',
            symbol: '₽'
        }).format()
    }

    function handleSaveSpecClick() {
        const lines = spec.lines.map(line => { return {...line, isRemoved: !!line.isRemoved}})

        const specPayload = {specId: spec.specId, lines: lines, options: spec.options}

        API.postSpecForm(specPayload).then(res => {
            const spec = res.data;

            if (spec) {
                setSpec(spec)
            } else {
                router.push({pathname: '/'})
            }

        }).then(res => {
            API.getBuildDetailsById(spec.specId).then(res => {
                setSpecDetails(res.data)
            })
        }).catch(res => {
            console.log(res)
        })
    }

    function handleCreateOrder(brandId, segment) {
        const payload = {brandId, segment, specId: spec.specId}

        API.createOrderByDetail(payload).then(res => {
            setOrderDetails(res.data)
        })
    }

    function handleModalCancel() {
        setIsModalOpened(false)
    }

    function handleModalOk() {
        setIsModalOpened(false)
    }

    function handleDownloadSpecFile(brandId, segment) {
        const payload = {brandId, segment, specId: spec.specId}

        API.downloadSpecFileByDetail(payload).then(res => {
            downloader(res.data, payload.specId + '_' + payload.brandId + '_' + segment + Math.floor(Date.now() / 1000) + '.pdf')
        })
    }

    return (
        <MainLayout title={"Карточка электрощита"}>
            <section className="card">
                <div className="container">
                    <div className="page-header page-header--card">
                        <Title>
                            Карточка электрощита
                        </Title>
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
                    <div className="card-main">
                        <div className="card-image d-md-none">
                            <img src="/img/card-image.png"/>
                        </div>
                        <div className="card-info">
                            <div className="card-info__top">
                                {spec.quest.length ? (
                                    <>
                                        <div className="card-answers">
                                            {spec.quest.map(q => {
                                                return q.answer && (
                                                    <div key={q.questionId} className="card-answer">
                                                        <span className="card-answer__text">{q.text}</span>
                                                        <span
                                                            className="card-answer__value">{q.answer}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="card-subtitle">Параметры подобраны исходя из ответов в разделе
                                            “Конструктор”
                                        </div>
                                    </>
                                ) : (
                                    <div className="card-subtitle">Параметры подобраны исходя из ответов в разделе
                                        “Ручной подбор”
                                    </div>
                                )}
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
                                        {spec.options.map(option => (
                                            <Checkbox key={option.optionId}
                                                      onChange={(e) => {
                                                          handleOptionCheck(option.optionId, e.target.checked)
                                                      }}
                                                      checked={option.isChecked}
                                            >{option.text}</Checkbox>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-info-details d-lg-none">
                                    <CustomScrollbars style={{width: '100%', height: 331}} autoHeightMin={331}>
                                        <div className="card-info-details__head">Спецификация электрощита</div>
                                        <div className="card-info-details__lines">

                                            {spec.lines.map((line, index) => {

                                                if(line.isRemoved) {
                                                    return
                                                }

                                                return <div key={line.specLineId} className="card-info-details-line">
                                                    <span
                                                        className="card-info-details-line__name">{index + 1}. {line.name}</span>
                                                    <div className="card-info-details-line__controls">
                                                        <div className="input-num">
                                                            <span
                                                                onClick={(val) => handleSpecLineQuantityChange(line.specLineId, line.quantity - 1)}
                                                                className="input-num-btn">-</span>
                                                            <InputNumber min={0}
                                                                         value={line.quantity}
                                                                         onChange={(val) => handleSpecLineQuantityChange(line.specLineId, val)}
                                                            />
                                                            <span
                                                                onClick={(val) => handleSpecLineQuantityChange(line.specLineId, line.quantity + 1)}
                                                                className="input-num-btn">+</span>
                                                        </div>
                                                        <div className="remove-button">
                                                            <Button
                                                                onClick={(val) => handleSpecLineQuantityChange(line.specLineId, 0, true)}
                                                                icon={<DeleteOutlined/>}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                    </CustomScrollbars>
                                    <div className="card-info-details-submitter">
                                        <div className="card-info-details-submitter__btn btn-wrap">
                                            <Button onClick={handleSaveSpecClick} type="primary">
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

                    <div className="page-header page-header--card page-header--small hidden d-md-flex">
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
                    <div className="card-info-details hidden d-lg-block">
                        <CustomScrollbars style={{width: '100%', height: 270}} autoHeightMin={270}>
                            <div className="card-info-details__head">Спецификация электрощита</div>
                            <div className="card-info-details__lines">

                                {spec.lines.map((line, index) => {
                                    if(line.isRemoved) {
                                        return
                                    }

                                    return <div key={line.specLineId} className="card-info-details-line">
                                                    <span
                                                        className="card-info-details-line__name">{index + 1}. {line.name}</span>
                                        <div className="card-info-details-line__controls">
                                            <div className="input-num">
                                                            <span
                                                                onClick={() => handleSpecLineQuantityChange(line.specLineId, line.quantity - 1)}
                                                                className="input-num-btn">-</span>
                                                <InputNumber min={0}
                                                             value={line.quantity}
                                                             onChange={(val) => handleSpecLineQuantityChange(line.specLineId, val)}
                                                />
                                                <span
                                                    onClick={(val) => handleSpecLineQuantityChange(line.specLineId, line.quantity + 1)}
                                                    className="input-num-btn">+</span>
                                            </div>
                                            <div className="remove-button">
                                                <Button
                                                    onClick={() => handleSpecLineQuantityChange(line.specLineId, 0, true)}
                                                    icon={<DeleteOutlined/>}/>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </CustomScrollbars>
                        <div className="card-info-details-submitter">
                            <div className="card-info-details-submitter__btn btn-wrap">
                                <Button onClick={handleSaveSpecClick} type="primary">
                                    Сохранить
                                </Button>
                            </div>
                            <span className="card-info-details-submitter__label">
                                            Нажимая кнопку, Вы сохраняете все <br/> изменения, произведенные в этом окне
                                        </span>
                        </div>
                    </div>
                    {specDetails ? (
                        <>
                            <div className="page-header page-header--card hidden d-lg-flex">
                                <Title level={2}>
                                    Варианты электрощитов, подходящие под Ваши параметры
                                </Title>
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
                            <div className="page-header page-header--second d-lg-none">
                                <Title level={2}>
                                    Варианты электрощитов, подходящие под Ваши параметры
                                </Title>
                                <div className="empty empty--first bg-diag-line--reverse"/>
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
                            <div className="spec-var-table  spec-var-table--desktop d-lg-none">
                                <div className="table-head">
                                    <div className="table-head__item table-head__item--first">Бренд/серия</div>
                                    <div className="table-head__item table-head__item--second">Стоимость</div>
                                    <div className="table-head__item table-head__item--third">Наличие</div>
                                    <div className="table-head__item table-head__item--fourth table-head__item--empty"/>
                                    <div className="table-head__item table-head__item--fifth table-head__item--empty"/>
                                </div>
                                <div className="table-lines">
                                    {specDetails.map(line => (
                                        <div key={line.specLineId} className="table-lines__item">
                                            <div className="table-lines__col table-lines__col--first">
                                                <span className="table-lines__brand">{line.brand}</span>
                                                &nbsp;
                                                <span className="table-lines__serial">{line.segment}</span>
                                            </div>
                                            <div className="table-lines__col table-lines__col--second">
                                                <span className="table-lines__price">{formatPrice(line.price)}</span>
                                            </div>
                                            <div className="table-lines__col table-lines__col--third">
                                                {line.availability ? (
                                                    <div
                                                        className="table-lines-availability table-lines-availability--true">
                                                        В наличии
                                                    </div>
                                                ) : (
                                                    <div className="table-lines-availability">
                                                        Под заказ
                                                    </div>
                                                )}
                                            </div>
                                            <div className="table-lines__col table-lines__col--fourth">
                                                <div className="btn-wrap">
                                                    <Button
                                                        onClick={() => handleDownloadSpecFile(line.brandId, line.segment)}>Скачать</Button>
                                                </div>
                                            </div>
                                            <div className="table-lines__col table-lines__col--fifth">
                                                <div className="btn-wrap btn-wrap--icon">
                                                    <Button
                                                        onClick={() => (handleCreateOrder(line.brandId, line.segment))}
                                                        icon={<FileTextOutlined/>}>Заказать</Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="empty-table-lines">
                                    <div className="empty-table-lines__item">
                                        <div
                                            className="empty-table-lines__col empty-table-lines__col--first">&nbsp;</div>
                                        <div
                                            className="empty-table-lines__col empty-table-lines__col--second">&nbsp;</div>
                                        <div
                                            className="empty-table-lines__col empty-table-lines__col--third">&nbsp;</div>
                                        <div
                                            className="empty-table-lines__col empty-table-lines__col--fourth">&nbsp;</div>
                                        <div
                                            className="empty-table-lines__col empty-table-lines__col--fifth">&nbsp;</div>
                                    </div>
                                </div>
                            </div>
                            <div className="nd hidden d-lg-block">
                                {specDetails.map(line => (
                                    <div key={line.specLineId} className="nd-line">
                                        <div className="nd-info">
                                            <div className="nd-info-line">
                                                <div className="nd-info-line__head">Бренд/серия</div>
                                                <div className="nd-info-line__val">
                                                    <div className="nd-info-line__val-bs">
                                                        <span className="nd-info-line__val-brand">{line.brand}</span>
                                                        <span className="nd-info-line__val-seria">{line.segment}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nd-info-line">
                                                <div className="nd-info-line__head">Стоимость</div>
                                                <div className="nd-info-line__val">
                                                    <span
                                                        className="nd-info-line__val-price">{formatPrice(line.price)}</span>
                                                </div>
                                            </div>
                                            <div className="nd-info-line">
                                                <div className="nd-info-line__head">Наличие</div>
                                                <div className="nd-info-line__val">
                                                    {line.availability ? (
                                                        <span
                                                            className="nd-info-line__val-avail nd-info-line__val-avail--true">В наличии</span>
                                                    ) : (
                                                        <span className="nd-info-line__val-avail">Под заказ</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="nd-actions">
                                            <div className="btn-wrap left">
                                                <Button
                                                    onClick={() => handleDownloadSpecFile(line.brandId, line.segment)}>Скачать</Button>
                                            </div>
                                            <div className="btn-wrap right">
                                                <Button onClick={() => (handleCreateOrder(line.brandId, line.segment))}
                                                        icon={<FileTextOutlined/>}>Заказать</Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="page-header page-header--card hidden d-lg-flex">
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
                        </>
                    ) : (
                        <div className="page-header page-header--card">
                            <div className="empty empty--first"/>
                            <div className="empty empty--second"/>
                            <div className="empty empty--third"/>
                            <div className="empty empty--fourth"/>
                        </div>
                    )}
                    <Modal
                        width={530}
                        visible={isModalOpened}
                        maskClosable
                        closable
                        onCancel={handleModalCancel}
                        onOk={handleModalOk}
                        title={[
                            <div className="modal-title"/>
                        ]}
                        footer={[
                            <div className="modal-footer-empty-block">
                                <div className="modal-footer-empty modal-footer-empty--first"/>
                                <div className="modal-footer-empty modal-footer-empty--second"/>
                                <div className="modal-footer-empty modal-footer-empty--third"/>
                                <div className="modal-footer-empty modal-footer-empty--fourth"/>
                            </div>
                        ]}
                        closeIcon={<CloseIcon/>}
                    >
                        <div className="modal-body">
                            <div className="order-creation-status">
                                <CheckCircleOutlined/>
                                {/*<CloseCircleOutlined />*/}
                            </div>
                            <div className="order-creation-msg">
                                Спасибо!
                            </div>
                            <div className="order-creation-msg">
                                Ваша заявка <span className="order-creation-msg__spec">№ {orderDetails.orderId}</span> <br/>успешно
                                отправлена!
                            </div>
                            <div className="order-creation-sub-msg">
                                В ближайшее время с Вами свяжется оператор
                            </div>
                        </div>
                    </Modal>
                </div>
            </section>
        </MainLayout>
    )
}

async function getCardServerSideProps({req, res, params}) {
    await applySession(req, res, options)

    const token = req.session.token;

    const specId = params.specId;

    const specificationRes = await BASE_API.getSpecDetailsById(specId, token)
    let specificationDetailsRes = null

    try {
        specificationDetailsRes = await BASE_API.getBuildDetailsById(specId, token)
    } catch (err) {}

    return {
        props: {
            specificationProp: specificationRes.data,
            specificationDetailsProp: specificationDetailsRes ? specificationDetailsRes.data : null
        }
    }
}

export const getServerSideProps = withAuthServerSideProps(getCardServerSideProps);

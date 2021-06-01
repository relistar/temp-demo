import React, {useEffect, useState} from "react"
import MainLayout from "/components/MainLayout"
import {Button, Input, InputNumber} from 'antd'
import {ArrowLeftOutlined, ArrowRightOutlined, DeleteOutlined} from '@ant-design/icons'
import CustomScrollbars from "../../components/lib/Scrollbars"
import {API} from "../../api/manual";

export default function Manual({categories}) {
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

    const [activeCategory, setActiveCategory] = useState(categories[0].id)
    const [characteristics, setCharacteristics] = useState(null)
    const [isCharFormValid, setIsCharFormValid] = useState(false)

    useEffect(() => {
        API.getCharacteristicsByCategoryId(activeCategory).then(res => {
            setCharacteristics(res.data)
        })

    }, [activeCategory])


    const handleCategoryClick = (categoryId) => {
        console.log(categoryId)
        setActiveCategory(categoryId)
        setIsCharFormValid(false)
    }

    const validateCharacteristics = () => {
        return characteristics.every(char => char.variants.some(variant => variant.selected))
    }

    const handleCharClick = (characteristicId, selectedVariantId) => {
        const chars = [...characteristics]

        const char = chars.find(char => char.id === characteristicId)

        let variants = char.variants;

        variants = variants.map(variant => {
            variant.selected = variant.id === selectedVariantId;
            return variant
        })

        char.variants = variants

        setCharacteristics(chars)

        setIsCharFormValid(validateCharacteristics())
    }

    return (
        <MainLayout>
            <section>
                <div className="container">
                    <div className="page-header page-header--manual">
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
                    <div className="page-header page-header--under-big page-header--border-top d-lg-none">
                        <div className="empty empty--first"/>
                        <div className="empty empty--second"/>
                        <div className="empty empty--third empty--no-border"/>
                        <div className="empty empty--fourth empty--no-border"/>
                    </div>
                    <div className="manual">
                        <div className="categories-block">
                            <ul className="categories">
                                {
                                    categories.map((category) => (
                                        <>
                                            <li key={category.id}
                                                onClick={() => {
                                                    handleCategoryClick(category.id)
                                                }}
                                                className={'categories-item ' + (activeCategory === category.id ? 'categories-item--selected' : '')}>
                                                <span className="categories-item__text">{category.name}</span>
                                                <span className="categories-item__icon"><ArrowRightOutlined width={11}
                                                                                                            height={11}/></span>
                                            </li>
                                            {activeCategory === category.id && (
                                                <div className="accordion-variants hidden d-md-block">
                                                    <div className="char-form-lines">
                                                        {characteristics && characteristics.map(char => (
                                                            <div className="char-form-lines__item">
                                                                <div className="char-form-lines__name">{char.name}</div>
                                                                <div className="char-form-variants">
                                                                    {char.variants.map(variant => (
                                                                        <div key={variant.id}
                                                                             className={'char-form-variant ' + (variant.selected ? 'char-form-variant--selected' : '')}
                                                                             onClick={() => handleCharClick(char.id, variant.id)}
                                                                        >
                                                                            {variant.value}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="char-form">
                            <div className="char-form-lines d-md-none">
                                {characteristics && characteristics.map(char => (
                                    <div className="char-form-lines__item">
                                        <div className="char-form-lines__name">{char.name}</div>
                                        <div className="char-form-variants">
                                            {char.variants.map(variant => (
                                                <div key={variant.id}
                                                     className={'char-form-variant ' + (variant.selected ? 'char-form-variant--selected' : '')}
                                                     onClick={() => handleCharClick(char.id, variant.id)}
                                                >
                                                    {variant.value}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {isCharFormValid && (
                                <div className="button char-form__btn">
                                    <Button type="primary">Добавить в спецификацию<ArrowRightOutlined/></Button>
                                </div>
                            )}
                        </div>

                        <div className="spec">
                            <div className="card-info-details">
                                <CustomScrollbars style={{width: '100%', height: 310}} autoHeightMin={331}>
                                    <div className="card-info-details__head">Спецификация электрощита</div>
                                    <div className="card-info-details__lines">

                                        {specLines.map((line, index) => (
                                            <div className="card-info-details-line">
                                                    <span
                                                        className="card-info-details-line__name">{index + 1}. {line.name}</span>
                                                <div className="card-info-details-line__controls">
                                                    <div className="input-num">
                                                        <span className="input-num-btn">-</span>
                                                        <InputNumber min={0} defaultValue={2}/>
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
                            <div className="card-info-details-submitter">
                                <div className="button spec__btn">
                                    <Button type="primary">Перейти к щиту<ArrowRightOutlined/></Button>
                                </div>
                                <span className="card-info-details-submitter__label hidden d-lg-block">
                                    Нажимая кнопку, Вы сохраняете все <br/> изменения, произведенные в этом окне
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="page-header page-header--under d-lg-none">
                        <div className="empty empty--first empty--no-border"/>
                        <div className="empty empty--second empty--no-border"/>
                        <div className="empty empty--third empty--no-border"/>
                        <div className="empty empty--fourth empty--no-border empty--no-border-right"/>
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


export async function getServerSideProps(context) {
    const res = await API.getCategories()

    console.log(res.data)


    return {
        props: {
            categories: res.data
        }
    }
}
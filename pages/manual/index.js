import React, {useEffect, useState} from "react"
import MainLayout from "/components/MainLayout"
import {Button, InputNumber, message} from 'antd'
import {ArrowRightOutlined, DeleteOutlined} from '@ant-design/icons'
import CustomScrollbars from "../../components/lib/Scrollbars"
import {API, API_FR} from "../../api/manual";

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
    const [spec, setSpec] = useState({spec_id: null})

    useEffect(() => {
        API_FR.getCharacteristicsByCategoryId(activeCategory).then(res => {
            setCharacteristics(res.data)
        })
    }, [activeCategory])

    const info = () => {
        message.info(`Редирект на /card/${spec.spec_id}`);
    };


    const handleCategoryClick = (categoryId) => {
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

    function buildCharsForPostSpec() {
        return characteristics.map(char => {
            return {
                charId: char.id,
                variantId: char.variants.find(variant => variant.selected).id
            }
        });
    }

    const handleAddToSpecClick = () => {
        const chars = buildCharsForPostSpec();
        const specPayload = {...spec, category_id: activeCategory, chars}

        API_FR.postSpec(specPayload).then(res => {
            const data = res.data;
            setSpec({...data, spec_id: data.id})
        })
    }

    const handleSpecLineQuantityChange = (id, quantity) => {

        const payload = {headerId: spec.spec_id, lineId: id, qty: quantity}

        API_FR.updateSpecLine(payload).then(() => {
            API_FR.getSpecDetailsById(spec.spec_id).then(res => {
                const lines = res.data.lines;
                setSpec({...spec, lines: lines.length ? lines : null, spec_id: lines.length ? spec.spec_id : null})
            })
        })
    }

    return (
        <MainLayout>
            <section>
                <div className="container">
                    <div className="page-header page-header--manual">
                        {/*TODO rename*/}
                        <div className="quiz-page-header">
                            <h1>Ручной подбор щита</h1>
                            <div className="quiz-question">Спецификация {spec.spec_id && '№' + spec.spec_id}</div>
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
                                                            <div key={char.id} className="char-form-lines__item">
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
                                    <div key={char.id} className="char-form-lines__item">
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
                                    <Button onClick={() => handleAddToSpecClick()} type="primary">Добавить в
                                        спецификацию<ArrowRightOutlined/></Button>
                                </div>
                            )}
                        </div>

                        <div className="spec">
                            <div className="card-info-details">
                                {spec.spec_id ? (
                                    <CustomScrollbars style={{width: '100%', height: 310}} autoHeightMin={331}>
                                        <div className="card-info-details__head">Спецификация электрощита</div>
                                        <div className="card-info-details__lines">

                                            {spec.lines.map((line, index) => (
                                                <div key={line.id} className="card-info-details-line">
                                                    <span
                                                        className="card-info-details-line__name">{index + 1}. {line.name}</span>
                                                    <div className="card-info-details-line__controls">
                                                        <div className="input-num">
                                                            <span onClick={(val) => handleSpecLineQuantityChange(line.id, line.quantity - 1)} className="input-num-btn">-</span>
                                                            <InputNumber min={0}
                                                                         value={line.quantity}
                                                                         onPressEnter={(val) => handleSpecLineQuantityChange(line.id, val)}
                                                            />
                                                            <span onClick={(val) => handleSpecLineQuantityChange(line.id, line.quantity + 1)} className="input-num-btn">+</span>
                                                        </div>
                                                        <div className="remove-button">
                                                            <Button onClick={(val) => handleSpecLineQuantityChange(line.id, 0)} icon={<DeleteOutlined/>}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CustomScrollbars>
                                ) : (
                                    <>
                                        <div className="card-info-details__head">Спецификация электрощита</div>
                                        <div className="card-info-details__empty">
                                            Спецификация сейчас пуста. Чтобы добавить продукцию, необходимо выбрать
                                            нужное количество товара в первом столбце.
                                        </div>
                                    </>
                                )
                                }
                            </div>
                            {spec.spec_id && (
                                <div className="card-info-details-submitter">
                                    <div className="button spec__btn">
                                        <Button onClick={info} type="primary">Перейти к щиту<ArrowRightOutlined/></Button>
                                    </div>
                                    <span className="card-info-details-submitter__label hidden d-lg-block">
                                        Нажимая кнопку, Вы сохраняете все <br/> изменения, произведенные в этом окне
                                    </span>
                                </div>
                            )}
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


export async function getServerSideProps() {
    const res = await API.getCategories()
    return {
        props: {
            categories: res.data
        }
    }
}
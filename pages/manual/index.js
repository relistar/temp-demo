import React, {useEffect, useState} from "react"
import {Button, InputNumber, message} from 'antd'
import {ArrowRightOutlined, DeleteOutlined, MessageOutlined} from '@ant-design/icons'
import CustomScrollbars from "../../components/lib/Scrollbars"
import {API, BASE_API} from "../../bapi/manual";
import {useRouter} from "next/router";
import {withAuthServerSideProps} from "../../session/withAuth";
import {applySession} from "next-iron-session";
import {options} from "../../session";
import MainLayout from "../../components/MainLayout";
import {SpecDetailsLine} from "../../components/SpecDetailsLine";

export default function Manual({categories, characteristicsProp}) {
    const router = useRouter()

    const [activeCategory, setActiveCategory] = useState(categories[0].categoryId)
    const [characteristics, setCharacteristics] = useState(characteristicsProp)
    const [isCharFormValid, setIsCharFormValid] = useState(false)
    const [spec, setSpec] = useState({specId: null})

    const handleCategoryClick = (categoryId) => {
        API.getCharacteristicsByCategoryId(categoryId).then(res => {
            setCharacteristics(res.data)
        })
        setActiveCategory(categoryId)
        setIsCharFormValid(false)
    }

    const validateCharacteristics = () => {
        return characteristics.every(char => char.variants.some(variant => variant.selected))
    }

    const handleCharClick = (charId, selectedVariantId) => {
        const chars = [...characteristics]

        const char = chars.find(char => char.charId === charId)

        let variants = char.variants;

        variants = variants.map(variant => {
            variant.selected = variant.variantId === selectedVariantId;
            return variant
        })

        char.variants = variants

        setCharacteristics(chars)

        setIsCharFormValid(validateCharacteristics())
    }

    function buildCharsForPostSpec() {
        return characteristics.map(char => {
            return {
                charId: char.charId,
                variantId: char.variants.find(variant => variant.selected).variantId
            }
        });
    }

    const handleAddToSpecClick = () => {
        const chars = buildCharsForPostSpec();
        const specPayload = {...spec, categoryId: activeCategory, chars}

        API.postSpec(specPayload).then(res => {
            const data = res.data;

            setSpec({...data, specId: data.specId})
        })
    }

    const handleSpecLineQuantityChange = (specLineId, quantity) => {

        const payload = {specId: spec.specId, specLineId: specLineId, qty: quantity}

        API.updateSpecLine(payload).then(res => {
            const lines = res.data.lines;
            setSpec({...spec, lines: lines.length ? lines : null, specId: lines.length ? spec.specId : null})
        })
    }

    function handleSubmitCardCreation() {
        router.push({
            pathname: '/card/[specId]',
            query: {specId: spec.specId}
        })
    }

    function handleCommentSave(specLineId, comment) {
        const currentLine = spec.lines.find(line => line.specLineId === specLineId)

        const payload = {specId: spec.specId, specLineId: specLineId, qty: currentLine.quantity, comment: comment}

        API.updateSpecLine(payload).then(res => {
            const lines = res.data.lines;
            setSpec({...spec, lines: lines.length ? lines : null, specId: lines.length ? spec.specId : null})
        })
    }

    return (
        <MainLayout title={"Ручной подбор щита"}>
            <section>
                <div className="container">
                    <div className="page-header page-header--manual">
                        <div className="quiz-page-header">
                            <h1>Ручной подбор щита</h1>
                            <div className="quiz-question">Спецификация {spec.specId && '№' + spec.specId}</div>
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
                                            <li key={category.categoryId}
                                                onClick={() => {
                                                    handleCategoryClick(category.categoryId)
                                                }}
                                                className={'categories-item ' + (activeCategory === category.categoryId ? 'categories-item--selected' : '')}>
                                                <span className="categories-item__text">{category.name}</span>
                                                <span className="categories-item__icon"><ArrowRightOutlined width={11}
                                                                                                            height={11}/></span>
                                            </li>
                                            {activeCategory === category.categoryId && (
                                                <div className="accordion-variants hidden d-md-block">
                                                    <div className="char-form-lines">
                                                        {characteristics && characteristics.map(char => (
                                                            <div key={'m' + char.charId}
                                                                 className="char-form-lines__item">
                                                                <div className="char-form-lines__name">{char.name}</div>
                                                                <div className="char-form-variants">
                                                                    {char.variants.map(variant => (
                                                                        <div key={'m' + variant.variantId}
                                                                             className={'char-form-variant ' + (variant.selected ? 'char-form-variant--selected' : '')}
                                                                             onClick={() => handleCharClick(char.charId, variant.variantId)}
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
                                    <div key={'d' + char.charId} className="char-form-lines__item">
                                        <div className="char-form-lines__name">{char.name}</div>
                                        <div className="char-form-variants">
                                            {char.variants.map(variant => (
                                                <div key={'d' + variant.variantId}
                                                     className={'char-form-variant ' + (variant.selected ? 'char-form-variant--selected' : '')}
                                                     onClick={() => handleCharClick(char.charId, variant.variantId)}
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
                                {spec.specId ? (
                                    <>
                                        <div className="card-info-details__head">Состав электрощита</div>
                                        <CustomScrollbars style={{width: '100%', height: 261}} autoHeightMin={261}>
                                            <div className="card-info-details__lines">

                                                {spec.lines.map((line, index) => (
                                                    <SpecDetailsLine key={line.specLineId}
                                                                     number={index}
                                                                     line={line}
                                                                     onQuantityChange={handleSpecLineQuantityChange}
                                                                     onRemove={() => handleSpecLineQuantityChange(line.specLineId, 0)}
                                                                     onCommentSave={handleCommentSave}
                                                    />
                                                ))}
                                            </div>
                                        </CustomScrollbars>
                                    </>
                                ) : (
                                    <>
                                        <div className="card-info-details__head">Состав электрощита</div>
                                        <div className="card-info-details__empty">
                                            Спецификация сейчас пуста. Чтобы добавить продукцию, необходимо выбрать
                                            нужное количество товара в первом столбце.
                                        </div>
                                    </>
                                )
                                }
                            </div>
                            {spec.specId && (
                                <div className="card-info-details-submitter">
                                    <div className="button spec__btn">
                                        <Button onClick={handleSubmitCardCreation} type="primary">Перейти к
                                            щиту<ArrowRightOutlined/></Button>
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

async function getManualServerSideProps({req, res}) {
    await applySession(req, res, options)

    const token = req.session.get("token");

    const categoriesResponse = await BASE_API.getCategories(token)
    const categories = categoriesResponse.data
    const characteristicsResponse = await BASE_API.getCharacteristicsByCategoryId(categories[0].categoryId, token)
    const characteristics = characteristicsResponse.data

    return {
        props: {
            categories: categories,
            characteristicsProp: characteristics
        }
    }
}

export const getServerSideProps = withAuthServerSideProps(getManualServerSideProps);

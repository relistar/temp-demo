import React, {useEffect, useState} from "react"
import {Button, Checkbox, Input} from 'antd'
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import {API, BASE_API} from "../../bapi/manual";
import {Radio} from 'antd';
import {fitPageHeaderHeight} from "../../native/fitHeader";
import {applySession} from "next-iron-session";
import {options} from "../../session";
import {withAuthServerSideProps} from "../../session/withAuth";
import MainLayout from "../../components/MainLayout";
import {useRouter} from "next/router";

export default function Quiz({questions: questionsProp, views}) {
    const router = useRouter()
    const [questions, setQuestions] = useState(questionsProp)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(getQuestion(0))
    const [currentQuestionValue, setCurrentQuestionValue] = useState(getQuestionValue(currentQuestion))
    const [currentQuestionOptions, setCurrentQuestionOptions] = useState()
    const [checkedCurrentQuestionOptions, setCheckedCurrentQuestionOptions] = useState()

    function getQuestionValue(question) {
        if (question.type === "NUM") {
            return question.value
        }

        if (question.type === "LOV") {
            if (question.value) {
                return question.value
            } else {
                return question.variants[0].variantId
            }
        }

        if (question.type === "CHECK_NUM") {
            if (question.value) {
                return question.value
            } else {
                return {
                    value: null, variantAnswers: question.variants.map(variant => {
                        return {variantId: variant.variantId, answer: false, text: variant.text}
                    })
                }
            }
        }
    }

    useEffect(() => {
        const question = getQuestion(currentQuestionIndex)
        setCurrentQuestion(question)
    }, [currentQuestionIndex])

    useEffect(() => {
        const currentQuestionValue = getQuestionValue(currentQuestion)
        setCurrentQuestionValue(currentQuestionValue)

        fitPageHeaderHeight()
    }, [currentQuestion])

    useEffect(() => {
        if (currentQuestion.type === 'CHECK_NUM') {
            setCurrentQuestionOptions(getCurrentQuestionOptions())
            setCheckedCurrentQuestionOptions(getCheckedCurrentQuestionOptions())
        }
    }, [currentQuestionValue])

    function getQuestion() {
        return questions[currentQuestionIndex]
    }

    function handleRadioChange(e) {
        if (currentQuestion.type === 'CHECK_NUM') {
            let a = {...currentQuestionValue, value: e.target.value}
            setCurrentQuestionValue(a)
        } else {
            setCurrentQuestionValue(e.target.value)
        }
    }

    function switchToNextQuestion() {
        const newQuest = {...currentQuestion}
        newQuest.value = currentQuestionValue

        const newQuestions = [...questions]
        newQuestions[currentQuestionIndex] = newQuest
        setQuestions(newQuestions)
        setCurrentQuestionIndex(currentQuestionIndex + 1)
    }

    function handleNextQuestion() {
        if (currentQuestion.type === 'CHECK_NUM') {
            if (currentQuestionValue && currentQuestionValue.value) {
                switchToNextQuestion()
            }
        } else {
            if (currentQuestionValue) {
                switchToNextQuestion()
            }
        }
    }

    function handlePrevQuestion() {
        setCurrentQuestionIndex(currentQuestionIndex - 1)
    }

    function collectCardCreationPayload(questions) {
        return questions.map(question => {
            if (question.type === 'CHECK_NUM') {
                return {
                    questionId: question.questionId,
                    answer: +question.value.value,
                    variantsAnswers: question.value.variantAnswers.map(variant => ({
                        variantId: variant.variantId,
                        answer: variant.answer
                    }))
                }
            } else {
                return {questionId: question.questionId, answer: +question.value}
            }
        })
    }

    function handleSubmitQuiz() {
        if (currentQuestionValue) {
            const newQuest = {...currentQuestion}
            newQuest.value = currentQuestionValue

            const newQuestions = [...questions]
            newQuestions[currentQuestionIndex] = newQuest

            const cardQuizCreationPayload = collectCardCreationPayload(newQuestions)

            API.postQuiz(cardQuizCreationPayload).then(res => {
                const specId = res.data.specId;

                router.push({
                    pathname: '/card/[specId]',
                    query: {specId: specId}
                })
            }).catch(res => {
            })
        }
    }

    function handleCheckboxWithNumChange(checkedVariantIds) {
        const variantAnswers = [...currentQuestionValue.variantAnswers]

        const newVariantAnswers = variantAnswers.map(variant => {
            return {...variant, answer: checkedVariantIds.includes(variant.variantId)}
        })

        const payload = {...currentQuestionValue, variantAnswers: newVariantAnswers}

        setCurrentQuestionValue(payload)
    }

    function getCurrentQuestionOptions() {
        return currentQuestionValue.variantAnswers.map(variant => {
            return {label: variant.text, value: variant.variantId}
        })
    }

    function getCheckedCurrentQuestionOptions() {
        return currentQuestionValue.variantAnswers.filter(variant => variant.answer).map(variant => {
            return variant.variantId
        })
    }

    function isCurrentQuestionAnswered() {
        if (currentQuestion.type === 'CHECK_NUM') {
            return currentQuestionValue.value
        }

        return currentQuestionValue;
    }

    function getCheckedText(question) {
        const checkedVariantsTexts = question.value.variantAnswers.filter(variant => variant.answer).map(variant => {
            return variant.text
        })

        if (checkedVariantsTexts.length) {
            return '(' + checkedVariantsTexts.join(', ') + ')'
        }

        return ''
    }

    return (
        <MainLayout title={"Конструктор щита"}>
            {views}
            <section>
                <div className="container">
                    <div className="page-header page-header--quiz">
                        <div className="quiz-page-header">
                            <h1>Конструктор щита</h1>
                            <div className="quiz-question">{currentQuestion.text}</div>
                        </div>
                        <div className="quiz-page-status">Вопрос {currentQuestionIndex + 1}/{questions.length}</div>
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
                                {questions.map(q => {
                                    return q.value && (
                                        <div key={q.questionId} className="card-answer">
                                            {q.type === "CHECK_NUM" ? (
                                                <>
                                                    <span
                                                        className="card-answer__text">{q.text}{getCheckedText(q)}</span>
                                                    <span
                                                        className="card-answer__value">{q.value.value}</span>
                                                </>

                                            ) : (
                                                <>
                                                    <span className="card-answer__text">{q.text}</span>
                                                    <span
                                                        className="card-answer__value">{q.type === 'LOV' ? q.variants.find(variant => variant.variantId === q.value).text : q.value}</span>

                                                </>)}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="quest">
                            <div className="quest__first">
                                <div
                                    className={"quest-options " + (currentQuestion.type === 'CHECK_NUM' ? "quest-options--num" : "")}>
                                    {currentQuestion.type === 'LOV' && (
                                        <Radio.Group onChange={handleRadioChange} value={currentQuestionValue}>
                                            {currentQuestion.variants.map(variant => (
                                                <Radio key={variant.variantId}
                                                       value={variant.variantId}>{variant.text}</Radio>
                                            ))}
                                        </Radio.Group>
                                    )}
                                    {currentQuestion.type === 'NUM' && (
                                        <Input type="number" placeholder={currentQuestion.text}
                                               onChange={handleRadioChange} value={currentQuestionValue}/>
                                    )}

                                    {currentQuestion.type === 'CHECK_NUM' && (
                                        <>
                                            <Input type="number" placeholder={currentQuestion.text}
                                                   onChange={handleRadioChange} value={currentQuestionValue.value}/>
                                            <Checkbox.Group options={currentQuestionOptions}
                                                            value={checkedCurrentQuestionOptions}
                                                            onChange={handleCheckboxWithNumChange}/>
                                        </>
                                    )}
                                </div>
                                <div className="quest__empty d-lg-none"/>
                            </div>
                            <div className="quest__second">
                                <div className="quest-desc">
                                    {currentQuestion.label}
                                </div>
                            </div>
                        </div>
                        <div className="quest-buttons">
                            {currentQuestionIndex > 0 && (
                                <div onClick={handlePrevQuestion}
                                     className="button button--back-icon quest-btn quest-btn--back">
                                    <Button type="primary" icon={<ArrowLeftOutlined/>}>Назад</Button>
                                </div>
                            )}
                            {(!(currentQuestionIndex + 1 === questions.length)) && (
                                <div className="button quest-btn quest-btn--forward">
                                    <Button onClick={handleNextQuestion} type="primary"
                                            disabled={!isCurrentQuestionAnswered()}>Далее<ArrowRightOutlined/></Button>
                                </div>
                            )}
                            {(currentQuestionValue && (currentQuestionIndex + 1 === questions.length)) && (
                                <div onClick={handleSubmitQuiz} className="button quest-btn quest-btn--forward">
                                    <Button type="primary">Перейти к щиту<ArrowRightOutlined/></Button>
                                </div>
                            )}
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


async function getQuizServerSideProps({req, res}) {
    await applySession(req, res, options)

    const token = req.session.get("token");

    const response = await BASE_API.getQuiz(token)

    const questions = response.data;

    return {
        props: {
            questions: questions
        }
    }
}

export const getServerSideProps = withAuthServerSideProps(getQuizServerSideProps);
import React, {useEffect, useState} from "react"
import MainLayout from "/components/MainLayout"
import {Button, Checkbox, Input} from 'antd'
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import {API} from "../../api/manual";
import {Radio} from 'antd';
import {fitPageHeaderHeight} from "../../native/fitHeader";
import {useRouter} from "next/router";

export default function Quiz({questions: questionsProp}) {
    const router = useRouter()
    const [questions, setQuestions] = useState(questionsProp)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(getQuestion(0))
    const [currentQuestionValue, setCurrentQuestionValue] = useState(currentQuestion.type === 'LOV' ? currentQuestion.variants[0].variantId : null)

    useEffect(() => {
        const question = getQuestion(currentQuestionIndex);

        if (question.value) {
            setCurrentQuestionValue(question.value)
        } else {
            setCurrentQuestionValue(question.type === 'LOV' ? question.variants[0].variantId : null)
        }

        setCurrentQuestion(question)
    }, [currentQuestionIndex])

    useEffect(() => {
        fitPageHeaderHeight()
    }, [currentQuestion])

    function getQuestion(index) {
        return questions[currentQuestionIndex]
    }

    function handleRadioChange(e) {
        setCurrentQuestionValue(e.target.value)
    }

    function handleNextQuestion() {
        if (currentQuestionValue) {
            const newQuest = {...currentQuestion}
            newQuest.value = currentQuestionValue

            const newQuestions = [...questions]
            newQuestions[currentQuestionIndex] = newQuest

            setQuestions(newQuestions)
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
    }

    function handlePrevQuestion() {
        setCurrentQuestionIndex(currentQuestionIndex - 1)
    }

    function collectCardCreationPayload(questions) {
        return questions.map(question => ({questionId: question.questionId, answer: +question.value}))
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
                    query: { specId: specId }
                })
            }).catch(res => {
                console.log(res)
            })
        }
    }

    return (
        <MainLayout title={"Конструктор щита"}>
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
                                            <span className="card-answer__text">{q.text}</span>
                                            <span
                                                className="card-answer__value">{q.type === 'LOV' ? q.variants.find(variant => variant.variantId === q.value).text : q.value}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="quest">
                            <div className="quest__first">
                                <div className="quest-options">
                                    {currentQuestion.type === 'LOV' && (
                                        <Radio.Group onChange={handleRadioChange} value={currentQuestionValue}>
                                            {currentQuestion.variants.map(variant => (
                                                <Radio key={variant.variantId} value={variant.variantId}>{variant.text}</Radio>
                                            ))}
                                        </Radio.Group>
                                    )}
                                    {currentQuestion.type === 'NUM' && (
                                        <Input type="number" placeholder={currentQuestion.text}
                                               onChange={handleRadioChange} value={currentQuestionValue}/>
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
                            {(currentQuestionValue && !(currentQuestionIndex + 1 === questions.length)) && (
                                <div onClick={handleNextQuestion} className="button quest-btn quest-btn--forward">
                                    <Button type="primary">Далее<ArrowRightOutlined/></Button>
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

export async function getServerSideProps() {
    const res = await API.getQuiz()
    return {
        props: {
            questions: res.data
        }
    }
}
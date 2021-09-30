import React, {useState} from "react"
import {ArrowDownOutlined, ArrowRightOutlined} from '@ant-design/icons'
import MainLayout from "../../components/MainLayout";
import {applySession} from "next-iron-session";
import {options} from "../../session";
import {BASE_API} from "../../bapi/manual";
import {withAuthServerSideProps} from "../../session/withAuth";

export default function FAQ({questions}) {
    const [selectedQuestion, setSelectedQuestion] = useState(null)

    function handleToggleQuestion(id) {
        if(selectedQuestion === id) {
            id = null
        }
        setSelectedQuestion(id)
    }

    return (
        <MainLayout title={"FAQ"}>
            <section>
                <div className="container">
                    <div className="page-header page-header--manual">
                        <div className="quiz-page-header">
                            <h1>FAQ</h1>
                            <div className="quiz-question">Часто задаваемые вопросы</div>
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

                    <div className="faq">
                        {questions.map(question => (
                            <>
                                <div className="faq-title" key={question.id}
                                     onClick={() => handleToggleQuestion(question.id)}>
                                    <div
                                        className={'faq-title__text' + (selectedQuestion === question.id ? " faq-title__text--selected" : "")}>
                                        {question.question}
                                    </div>
                                    <div className="faq-title__icon">
                                        {selectedQuestion === question.id ? (
                                            <ArrowDownOutlined
                                                width={11}
                                                height={11}/>
                                        ) : (
                                            <ArrowRightOutlined width={11}
                                                                height={11}/>
                                        )}
                                    </div>
                                </div>
                                {selectedQuestion === question.id && (
                                    <div className="faq-info" dangerouslySetInnerHTML={{__html: question.answer}}/>
                                )}
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

async function getFaqServerSideProps({req, res, params}) {
    await applySession(req, res, options)

    const token = req.session.get("token");

    let questions = await BASE_API.getQuestions();

    console.log(questions.data)

    return {
        props: {
            questions: questions.data
        }
    }
}

export const getServerSideProps = withAuthServerSideProps(getFaqServerSideProps);
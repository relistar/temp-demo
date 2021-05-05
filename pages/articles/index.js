import React from "react"
import MainLayout from "/components/MainLayout"
import Title from "antd/lib/typography/Title"
import axios from "axios"
import {Card, Col, Row} from "antd"
import Meta from "antd/lib/card/Meta"
import Link from "next/link"

export default function Articles({articles}) {
    return (
        <MainLayout>
            <Title>Articles</Title>

            <Row justify="space-around" gutter={[24, 24]}>
                {
                    articles.map(
                        article => (
                            <Link href={`/articles/${encodeURIComponent(article.id)}`} key={article.id}>
                                <Col span={6}>
                                    <Card
                                        hoverable
                                        cover={
                                            <img alt="example"
                                                 src={`https://picsum.photos/seed/${article.id}/606/758`}/>
                                        }
                                    >
                                        <Meta title={article.title}/>
                                    </Card>
                                </Col>
                            </Link>
                        )
                    )
                }
            </Row>

            <pre>{JSON.stringify(articles, '', 2)}</pre>
        </MainLayout>
    )
}

export async function getServerSideProps() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    console.log(res.data)


    return {
        props: {articles: res.data}
    }
}


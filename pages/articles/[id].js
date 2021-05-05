import React from "react"
import MainLayout from "/components/MainLayout"
import Title from "antd/lib/typography/Title"
import axios from "axios"
import Paragraph from "antd/lib/typography/Paragraph"

export default function Articles({article}) {
    return (
        <MainLayout>
            <Title>{article.title}</Title>

            <Paragraph>
                {article.body}
            </Paragraph>
        </MainLayout>
    )
}

export async function getServerSideProps(context) {
    const id = context.params.id
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)


    return {
        props: {article: res.data}
    }
}


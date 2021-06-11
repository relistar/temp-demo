import React from "react"
import MainLayout from "../../components/MainLayout";
import {Button, Form, Input} from "antd";
import {applySession} from "next-session";
import {options} from "../../session";
import {API} from "../../bapi/manual";

export default function Auth() {
    return (<></>)
}

export async function getServerSideProps({req, res, query}) {
    await applySession(req, res, options);

    req.session.token = query

    res.statusCode = 302
    res.setHeader('Location', '/')

    return {
        props: {}
    }
}

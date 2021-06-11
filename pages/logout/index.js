import React from "react"
import MainLayout from "../../components/MainLayout";
import {Button, Form, Input} from "antd";
import {applySession} from "next-session";
import {options} from "../../session";
import {API} from "../../bapi/manual";

export default function Logout() {
    return (<></>)
}

export async function getServerSideProps({req, res}) {
    await applySession(req, res, options);

    req.session.destroy()

    res.statusCode = 302
    res.setHeader('Location', '/login')

    return {
        props: {}
    }
}

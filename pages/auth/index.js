import React from "react"
import {applySession} from "next-iron-session";
import {options} from "../../session";

export default function Auth() {
    return (<></>)
}

export async function getServerSideProps({req, res, query}) {
    await applySession(req, res, options);

    req.session.set("token", query)
    await req.session.save()

    res.statusCode = 302
    res.setHeader('Location', '/')

    return {
        props: {}
    }
}

import React from "react"
import {applySession} from "next-iron-session";
import {options} from "../../session";

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

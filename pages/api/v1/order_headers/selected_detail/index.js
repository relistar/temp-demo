import {BASE_API} from "../../../../../bapi/manual";
import {applySession} from "next-session";
import {options} from "../../../../../session";

export default async function createOrderByDetailHandler(req, res) {
    await applySession(req, res, options);

    BASE_API.createOrderByDetail(req.body, req.session.token).then(response => {
        res.status(200).json(response.data)
    })
}
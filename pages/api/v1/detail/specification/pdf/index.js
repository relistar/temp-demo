import {BASE_API} from "../../../../../../bapi/manual";
import {applySession} from "next-iron-session";
import {options} from "../../../../../../session";

export default async function createOrderByDetailHandler(req, res) {
    await applySession(req, res, options);

    BASE_API.downloadSpecFileByDetail(req.body, req.session.get("token")).then(response => {
        res.status(200)
        res.send(response.data)
    })
}
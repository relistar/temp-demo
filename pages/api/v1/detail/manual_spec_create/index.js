import {BASE_API} from "../../../../../bapi/manual";
import {applySession} from "next-session";
import {options} from "../../../../../session";

export default async function manualSpecCreationHandler(req, res) {
    await applySession(req, res, options);

    BASE_API.postSpec(req.body, req.session.token).then(response => {
        res.status(200).json(response.data)
    })
}
import {BASE_API} from "../../../../bapi/manual";
import {applySession} from "next-session";
import {options} from "../../../../session";

export default async function getBuildDetailsByIdHandler(req, res) {
    await applySession(req, res, options);

    const specId = req.query.specId;
    BASE_API.getBuildDetailsById(specId, req.session.token).then(response => {
        res.status(200).json(response.data)
    }).catch(response => {
        res.status(200).json(response.data)
    })
}
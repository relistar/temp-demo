import {BASE_API} from "../../../../bapi/manual";

export default function getBuildDetailsByIdHandler(req, res) {
    const specId = req.query.specId;
    BASE_API.getBuildDetailsById(specId).then(response => {
        res.status(200).json(response.data)
    })
}
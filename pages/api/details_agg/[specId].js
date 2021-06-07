import {API} from "../../../bapi/manual";

export default function getBuildDetailsByIdHandler(req, res) {
    const specId = req.query.specId;
    API.getBuildDetailsById(specId).then(response => {
        res.status(200).json(response.data)
    })
}
import {BASE_API} from "../../../../bapi/manual";

export default function getSpecHandler(req, res) {
    const specId = req.query.specId;
    BASE_API.getSpecDetailsById(specId).then(response => {
        res.status(200).json(response.data)
    }).catch(({response}) => {
        console.log(response)
        res.status(response.status).json(response.data)
    })
}
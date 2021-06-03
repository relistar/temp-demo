import {API} from "../../../api/manual";

export default function getSpecHandler(req, res) {
    const specId = req.query.specId;
    API.getSpecDetailsById(specId).then(response => {
        res.status(200).json(response.data)
    })
}
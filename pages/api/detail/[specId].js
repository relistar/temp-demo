import {API} from "../../../api/manual";

export default function getSpecHandler(req, res) {
    const specId = req.query.specId;
    console.log(req.body)
    API.getSpecDetailsById(specId).then(response => {
        res.status(200).json(response.data)
    })
}
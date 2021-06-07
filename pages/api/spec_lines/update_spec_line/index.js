import {API} from "../../../../bapi/manual";

export default function updateSpecHandler(req, res) {
    API.updateSpecLine(req.body).then(response => {
        res.status(200).json(response.data)
    })
}
import {BASE_API} from "../../../../../bapi/manual";

export default function updateSpecHandler(req, res) {
    BASE_API.updateSpecLine(req.body).then(response => {
        res.status(200).json(response.data)
    })
}
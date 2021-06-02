import {API} from "../../../../api/manual";

export default function updateSpecHandler(req, res) {
    API.updateSpecLine(req.body).then(response => {
        res.status(200).json(response.data)
    })
}
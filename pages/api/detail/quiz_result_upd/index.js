import {API} from "../../../../api/manual";

export default function postSpecFormHandler(req, res) {
    API.postSpecForm(req.body).then(response => {
        res.status(200).json(response.data)
    })
}
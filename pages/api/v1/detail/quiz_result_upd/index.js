import {BASE_API} from "../../../../../bapi/manual";

export default function postSpecFormHandler(req, res) {
    BASE_API.postSpecForm(req.body).then(response => {
        res.status(200).json(response.data)
    }).catch(response => {
        res.status(200).json(response.data)
    })
}
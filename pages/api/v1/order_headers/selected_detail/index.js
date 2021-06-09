import {BASE_API} from "../../../../../bapi/manual";

export default function createOrderByDetailHandler(req, res) {
    BASE_API.createOrderByDetail(req.body).then(response => {
        res.status(200).json(response.data)
    })
}
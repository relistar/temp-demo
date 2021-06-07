import {API} from "../../../../api/manual";

export default function createOrderByDetailHandler(req, res) {
    API.createOrderByDetail(req.body).then(response => {
        res.status(200).json(response.data)
    })
}
import {API} from "../../../../../api/manual";

export default function createOrderByDetailHandler(req, res) {
    API.downloadSpecFileByDetail(req.body).then(response => {
        res.status(200).send(response.data)
    })
}
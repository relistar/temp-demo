import {BASE_API} from "../../../../../../bapi/manual";

export default function createOrderByDetailHandler(req, res) {
    BASE_API.downloadSpecFileByDetail(req.body).then(response => {
        res.status(200)
        res.send(response.data)
    })
}
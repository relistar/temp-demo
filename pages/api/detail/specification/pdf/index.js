import {API} from "../../../../../bapi/manual";

export default function createOrderByDetailHandler(req, res) {
    API.downloadSpecFileByDetail(req.body).then(response => {
        console.log(response.headers)

        res.setHeader('content-type', 'application/pdf')
        res.setHeader('transfer-encoding', 'chunked')
        res.setHeader('connection', 'keep-alive')

        res.status(200).send(response.data)
    })
}
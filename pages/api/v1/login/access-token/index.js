import {BASE_API} from "../../../../../bapi/manual";

export default function postLoginFormHandler(req, res) {
    BASE_API.loginByCredentials(req.body).then(response => {
        res.status(200).json(response.data)
    }).catch(({response}) => {
        console.log(response)
        res.status(response.status).json(response.data)
    })
}
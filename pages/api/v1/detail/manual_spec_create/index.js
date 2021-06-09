import {BASE_API} from "../../../../../bapi/manual";

export default function manualSpecCreationHandler(req, res) {
    BASE_API.postSpec(req.body).then(response => {
        res.status(200).json(response.data)
    })
}
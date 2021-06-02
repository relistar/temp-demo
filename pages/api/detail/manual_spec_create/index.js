import {API} from "../../../../api/manual";

export default function manualSpecCreationHandler(req, res) {
    API.postSpec(req.body).then(response => {
        res.status(200).json(response.data)
    })
}
import {BASE_API} from "../../../../../bapi/manual";

export default function postQuizHandler(req, res) {
    BASE_API.postQuiz(req.body).then(response => {
        res.status(200).json(response.data)
    })
}
import {API} from "../../../../bapi/manual";

export default function postQuizHandler(req, res) {
    API.postQuiz(req.body).then(response => {
        res.status(200).json(response.data)
    })
}
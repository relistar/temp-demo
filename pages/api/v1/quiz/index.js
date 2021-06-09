import {BASE_API} from "../../../../bapi/manual";

export default function getQuizHandler(req, res) {
    BASE_API.getQuiz().then(response => {
        res.status(200).json(response.data)
    })
}
import {API} from "../../../bapi/manual";

export default function getQuizHandler(req, res) {
    API.getQuiz().then(response => {
        res.status(200).json(response.data)
    })
}
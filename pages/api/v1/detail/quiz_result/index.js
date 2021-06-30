import {BASE_API} from "../../../../../bapi/manual";
import {applySession} from "next-iron-session";
import {options} from "../../../../../session";

export default async function postQuizHandler(req, res) {
    await applySession(req, res, options);

    BASE_API.postQuiz(req.body, req.session.get("token")).then(response => {
        res.status(200).json(response.data)
    }).catch(({response}) => {
        console.log(response)
        res.status(response.status).json(response.data)
    })
}
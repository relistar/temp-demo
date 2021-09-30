import {applySession} from "next-iron-session";
import {options} from "../../../../../../session";
import {BASE_API} from "../../../../../../bapi/manual";

export default async function trackOrderHandler(req, res) {
    await applySession(req, res, options);

    return new Promise((resolve, reject) => {

        const payload = req.query;

        BASE_API.trackOrder(payload, req.session.get("token")).then(response => {
            console.log(response.data)
            res.status(200).json({ hasError: false, data: response.data})
            res.end()
            resolve()
        }).catch(({response}) => {
            console.log(response)
            res.status(200).json({ hasError: true, data: response.data})
            res.end()
            resolve()
        })
    });
}
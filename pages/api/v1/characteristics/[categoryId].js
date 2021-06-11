import {BASE_API} from "../../../../bapi/manual";
import {applySession} from "next-session";
import {options} from "../../../../session";

export default async function charsHandler(req, res) {
    console.log(req.headers)

    await applySession(req, res, options);

    const categoryId = req.query.categoryId;

    BASE_API.getCharacteristicsByCategoryId(categoryId, req.session.token).then(response => {
        res.status(200).json(response.data)
    })
}

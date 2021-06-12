import {API, BASE_API} from "../../../../bapi/manual";
import { applySession } from 'next-iron-session';
import {options} from "../../../../session";

export default async function categoriesHandler(req, res) {
    await applySession(req, res, options);

    BASE_API.getCategories(req.session.get("token")).then(response => {
        res.status(200).json(response.data)
    })
}
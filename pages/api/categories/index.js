import {API} from "../../../bapi/manual";

export default function categoriesHandler(req, res) {
    API.getCategories().then(response => {
        res.status(200).json(response.data)
    })
}
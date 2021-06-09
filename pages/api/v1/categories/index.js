import {BASE_API} from "../../../../bapi/manual";

export default function categoriesHandler(req, res) {
    BASE_API.getCategories().then(response => {
        res.status(200).json(response.data)
    })
}
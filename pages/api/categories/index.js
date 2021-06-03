import {API} from "../../../api/manual";

export default function categoriesHandler(req, res) {
    API.getCategories().then(response => {
        res.status(200).json(response.data)
    })
}
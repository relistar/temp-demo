import {API} from "../../../api/manual";

export default function categoriesHandler(req, res) {
    console.log(req)
    API.getCategories().then(response => {
        res.status(200).json(response.data)
    })
}
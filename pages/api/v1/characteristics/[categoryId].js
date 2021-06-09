import {BASE_API} from "../../../../bapi/manual";

export default function charsHandler(req, res) {
    const categoryId = req.query.categoryId;
    BASE_API.getCharacteristicsByCategoryId(categoryId).then(response => {
        res.status(200).json(response.data)
    })
}
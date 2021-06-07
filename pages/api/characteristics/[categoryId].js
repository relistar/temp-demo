import {API} from "../../../bapi/manual";

export default function charsHandler(req, res) {
    const categoryId = req.query.categoryId;
    API.getCharacteristicsByCategoryId(categoryId).then(response => {
        res.status(200).json(response.data)
    })
}
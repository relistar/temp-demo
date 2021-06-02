import {API} from "../../../api/manual";

export default function charsHandler(req, res) {
    const categoryId = req.query.categoryId;
    console.log(categoryId)
    API.getCharacteristicsByCategoryId(categoryId).then(response => {
        res.status(200).json(response.data)
    })
}
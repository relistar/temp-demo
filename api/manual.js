import axios from 'axios'
const environment = process.env.NODE_ENV

const API_PROTOCOL = environment === 'production' ? 'https://' : 'http://'

const API_ROOT =  API_PROTOCOL + 'ovz1.j7775013.pxlzp.vps.myjino.ru/api/v1/'

const axiosInstance = axios.create({
    baseURL: API_ROOT,
    timeout: 1000
})

const jsonAxiosInstance = axios.create({
    baseURL: API_ROOT,
    timeout: 1000,
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export const API = {
    getCategories: () => {
        return axiosInstance.get('/categories')
    },
    getCharacteristicsByCategoryId: (categoryId) => {
        return axiosInstance.get(`/characteristics/${categoryId}`)
    },
    postSpec: (spec) => {
        return jsonAxiosInstance.post('/detail/manual_spec_create/', spec)
    },
    updateSpecLine: (payload) => {
        return jsonAxiosInstance.put('/spec_lines/update_spec_line/', payload)
    },
    getSpecDetailsById: (specId) => {
        return jsonAxiosInstance.get(`/detail/${specId}`)
    },
    getQuiz() {
        return axiosInstance.get('/quiz')
    }
}



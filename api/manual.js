import axios from 'axios'

const environment = process.env.NODE_ENV

const API_PROTOCOL = environment === 'production' ? 'http://' : 'http://'

const API_ROOT = 'https://dev-tadoit.ru/api/v1/'
const API_ROOT_FR = 'http://localhost:3000/api/'

const axiosInstance = axios.create({
    baseURL: API_ROOT,
    timeout: 100000
})

const jsonAxiosInstance = axios.create({
    baseURL: API_ROOT,
    timeout: 100000,
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

const FRaxiosInstance = axios.create({
    baseURL: API_ROOT_FR,
    timeout: 500000
})

const FRjsonAxiosInstance = axios.create({
    baseURL: API_ROOT_FR,
    timeout: 500000,
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
    getBuildDetailsById: (specId) => {
        return axiosInstance.get(`/details_agg/${specId}`)
    },
    getQuiz() {
        return axiosInstance.get('/quiz')
    },
    postQuiz(payload) {
        return jsonAxiosInstance.post('/detail/quiz_result/', payload)
    },
    postSpecForm(spec) {
        return jsonAxiosInstance.put('/detail/quiz_result_upd/', spec)
    },
    createOrderByDetail(detail) {
        return jsonAxiosInstance.post('/order_headers/selected_detail/', detail)
    },
    downloadSpecFileByDetail(payload) {
        return jsonAxiosInstance.post('/detail/specification/pdf/', payload, {responseType: 'blob'})
    }
}

export const FR_API = {
    getCategories: () => {
        return FRaxiosInstance.get('/categories')
    },
    getCharacteristicsByCategoryId: (categoryId) => {
        return FRaxiosInstance.get(`/characteristics/${categoryId}`)
    },
    postSpec: (spec) => {
        return FRjsonAxiosInstance.post('/detail/manual_spec_create', spec)
    },
    updateSpecLine: (payload) => {
        return FRjsonAxiosInstance.put('/spec_lines/update_spec_line', payload)
    },
    getSpecDetailsById: (specId) => {
        return FRjsonAxiosInstance.get(`/detail/${specId}`)
    },
    getBuildDetailsById: (specId) => {
        return FRaxiosInstance.get(`/details_agg/${specId}`)
    },
    getQuiz() {
        return FRaxiosInstance.get('/quiz')
    },
    postQuiz(payload) {
        return FRjsonAxiosInstance.post('/detail/quiz_result', payload)
    },
    postSpecForm(spec) {
        return FRjsonAxiosInstance.put('/detail/quiz_result_upd', spec)
    },
    createOrderByDetail(detail) {
        return FRjsonAxiosInstance.post('/order_headers/selected_detail', detail)
    },
    downloadSpecFileByDetail(payload) {
        return FRjsonAxiosInstance.post('/detail/specification/pdf', payload, {responseType: 'blob'})
    }
}

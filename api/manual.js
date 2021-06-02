import axios from 'axios'

const API_ROOT = 'http://ovz1.j7775013.pxlzp.vps.myjino.ru:49227/api/v1/'
const API_ROOT_FR = '/api/'

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

const FRaxiosInstance = axios.create({
    baseURL: API_ROOT_FR,
    timeout: 5000
})

const FRjsonAxiosInstance = axios.create({
    baseURL: API_ROOT_FR,
    timeout: 5000,
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
    }
}

export const API_FR = {
    getCategories: () => {
        return FRaxiosInstance.get('/categories')
    },
    getCharacteristicsByCategoryId: (categoryId) => {
        return FRaxiosInstance.get(`/characteristics/${categoryId}`)
    },
    postSpec: (spec) => {
        return FRjsonAxiosInstance.post('/detail/manual_spec_create/', spec)
    },
    updateSpecLine: (payload) => {
        return FRjsonAxiosInstance.put('/spec_lines/update_spec_line/', payload)
    },
    getSpecDetailsById: (specId) => {
        return jsonAxiosInstance.get(`/detail/${specId}`)
    }
}



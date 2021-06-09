import axios from 'axios'

const config = process.env.config;
const isLocalDocker = process.env.NODE_DOCKER
const environment = process.env.NODE_ENV
const vercel = process.env.NEXT_PUBLIC_VERCEL

let currentEnvConfig = config[environment]

if(isLocalDocker) {
    currentEnvConfig = config['docker']
} else if(vercel) {
    currentEnvConfig = config['vercel']
}

const API_BASE_URL = currentEnvConfig.api.base
const API_ROOT = currentEnvConfig.api.root

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 100000
})

const jsonApi = axios.create({
    baseURL: API_BASE_URL,
    timeout: 100000,
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

const rootApi = axios.create({
    baseURL: API_ROOT,
    timeout: 500000
})

const jsonRootApi = axios.create({
    baseURL: API_ROOT,
    timeout: 500000,
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export const BASE_API = {
    getCategories: () => {
        return api.get('/categories')
    },
    getCharacteristicsByCategoryId: (categoryId) => {
        return api.get(`/characteristics/${categoryId}`)
    },
    postSpec: (spec) => {
        return jsonApi.post('/detail/manual_spec_create/', spec)
    },
    updateSpecLine: (payload) => {
        return jsonApi.put('/spec_lines/update_spec_line/', payload)
    },
    getSpecDetailsById: (specId) => {
        return jsonApi.get(`/detail/${specId}`)
    },
    getBuildDetailsById: (specId) => {
        return api.get(`/details_agg/${specId}`)
    },
    getQuiz() {
        return api.get('/quiz')
    },
    postQuiz(payload) {
        return jsonApi.post('/detail/quiz_result/', payload)
    },
    postSpecForm(spec) {
        return jsonApi.put('/detail/quiz_result_upd/', spec)
    },
    createOrderByDetail(detail) {
        return jsonApi.post('/order_headers/selected_detail/', detail)
    },
    downloadSpecFileByDetail(payload) {
        return jsonApi.post('/detail/specification/pdf/', payload,{responseType: 'stream'})
    }
}

export const API = {
    getCategories: () => {
        return rootApi.get('/categories/')
    },
    getCharacteristicsByCategoryId: (categoryId) => {
        return rootApi.get(`/characteristics/${categoryId}/`)
    },
    postSpec: (spec) => {
        return jsonRootApi.post('/detail/manual_spec_create/', spec)
    },
    updateSpecLine: (payload) => {
        return jsonRootApi.put('/spec_lines/update_spec_line/', payload)
    },
    getSpecDetailsById: (specId) => {
        return jsonRootApi.get(`/detail/${specId}/`)
    },
    getBuildDetailsById: (specId) => {
        return rootApi.get(`/details_agg/${specId}/`)
    },
    getQuiz() {
        return rootApi.get('/quiz/')
    },
    postQuiz(payload) {
        return jsonRootApi.post('/detail/quiz_result/', payload)
    },
    postSpecForm(spec) {
        return jsonRootApi.put('/detail/quiz_result_upd/', spec)
    },
    createOrderByDetail(detail) {
        return jsonRootApi.post('/order_headers/selected_detail/', detail)
    },
    downloadSpecFileByDetail(payload) {
        return jsonRootApi.post('/detail/specification/pdf/', payload, {responseType: 'blob'})
    }
}

import axios from 'axios'
import {getEnvConfig} from "../config";
import qs from "qs";

const currentEnvConfig = getEnvConfig();

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

function buildAuthHeader(token) {
    return {
        headers: {
            'Authorization': `Bearer ${token.access_token}`
        }
    }
}

export const BASE_API = {
    getCategories: (token) => {
        return api.get('/categories/', buildAuthHeader(token))
    },
    getCharacteristicsByCategoryId: (categoryId, token) => {
        return api.get(`/characteristics/${categoryId}`, buildAuthHeader(token))
    },
    postSpec: (spec, token) => {
        return jsonApi.post('/detail/manual_spec_create/', spec, buildAuthHeader(token))
    },
    updateSpecLine: (payload, token) => {
        return jsonApi.put('/spec_lines/update_spec_line/', payload, buildAuthHeader(token))
    },
    getSpecDetailsById: (specId, token) => {
        return jsonApi.get(`/detail/${specId}`, buildAuthHeader(token))
    },
    getBuildDetailsById: (specId, token) => {
        return api.get(`/details_agg/${specId}`, buildAuthHeader(token))
    },
    getQuiz(token) {
        return api.get('/quiz', buildAuthHeader(token))
    },
    postQuiz(payload, token) {
        return jsonApi.post('/detail/quiz_result/', payload, buildAuthHeader(token))
    },
    postSpecForm(spec, token) {
        return jsonApi.put('/detail/quiz_result_upd/', spec, buildAuthHeader(token))
    },
    createOrderByDetail(detail, token) {
        return jsonApi.post('/order_headers/selected_detail/', detail, buildAuthHeader(token))
    },
    downloadSpecFileByDetail(payload, token) {
        return jsonApi.post('/detail/specification/pdf/', payload, {
            responseType: 'stream',
            headers: buildAuthHeader(token).headers
        })
    },
    loginByCredentials(payload) {
        return api.post('/login/access-token', qs.stringify(payload), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    }
}

export const API = {
    getCharacteristicsByCategoryId: (categoryId) => {
        return rootApi.get(`/characteristics/${categoryId}`)
    },
    postSpec: (spec) => {
        return jsonRootApi.post('/detail/manual_spec_create', spec)
    },
    updateSpecLine: (payload) => {
        return jsonRootApi.put('/spec_lines/update_spec_line', payload)
    },
    getBuildDetailsById: (specId) => {
        return rootApi.get(`/details_agg/${specId}`)
    },
    postQuiz(payload) {
        return jsonRootApi.post('/detail/quiz_result', payload)
    },
    postSpecForm(spec) {
        return jsonRootApi.put('/detail/quiz_result_upd', spec)
    },
    createOrderByDetail(detail) {
        return jsonRootApi.post('/order_headers/selected_detail', detail)
    },
    downloadSpecFileByDetail(payload) {
        return jsonRootApi.post('/detail/specification/pdf', payload, {responseType: 'blob'})
    },
    loginByCredentials(payload) {
        return jsonRootApi.post('/login/access-token', qs.stringify(payload), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    }
}

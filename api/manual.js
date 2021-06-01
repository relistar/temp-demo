import axios from 'axios'

const API_ROOT = 'http://ovz1.j7775013.pxlzp.vps.myjino.ru:49227/api/v1/'

const axiosInstance = axios.create({
    baseURL: API_ROOT,
    timeout: 1000
});

export const API = {
    getCategories: () => {
        return axiosInstance.get('/categories')
    },
    getCharacteristicsByCategoryId: (categoryId) => {
        return axiosInstance.get(`characteristics/${categoryId}`)
    }
}



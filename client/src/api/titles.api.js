import axios from 'axios';

const titleApi = axios.create({
    baseURL: 'http://localhost:8000/titles/api/v1/titles/'
})

export const getAllTitles = async () => {
    return titleApi.get('/');
}

export const getTitle = async (id) => titleApi.get(`/${id}/`);

export const createTitle = async (title) => {
    return titleApi.post('/', title);
}

export const deleteTitle = (id) => titleApi.delete(`/${id}/`);

export const updateTitle = (id, title) => titleApi.put(`/${id}/`, title);
import api from "./api";

export const ApiService = {
    get: async (endpoint: string, params?: any) => {
        const response = await api.get(endpoint, { params });
        return response.data;
    },
    post: async (endpoint: string, body: any) => {
        const response = await api.post(endpoint, body);
        return response.data;
    },
    put: async (endpoint: string, body: any) => {
        const response = await api.put(endpoint, body);
        return response.data;
    },
    delete: async (endpoint: string, params?: any) => {
        const response = await api.delete(endpoint, { params });
        return response.data;
    },
};
// apiClient.ts
import axios from 'axios';

const pendingRequests = new Map<string, boolean>(); // Map to track pending requests

const createApiClient = (baseURL: string, multipart: boolean) => {
    const instance = axios.create({
        baseURL: baseURL,
        headers: {
            'Content-Type': multipart ? 'multipart/form-data' : 'application/json',
            // Other default headers can be added here
        },
    });


    // Intercept requests to include the token
    instance.interceptors.request.use(
        async config => {
            const token = sessionStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        error => Promise.reject(error),
    );

    // Intercept responses to remove completed requests from the map
    instance.interceptors.response.use(
        response => {
            const key = generateRequestKey(response.config);
            console.log('key1', key);
            pendingRequests.delete(key);
            return response;
        },
        error => {
            const key = generateRequestKey(error.config);
            console.log('key1-error', key);
            pendingRequests.delete(key);
            return Promise.reject(error);
        }
    );

    // Helper function to generate a unique key for each request
    const generateRequestKey = (config: any) => {
        if (config.data){
            return `${config.method.toUpperCase()}:${config.url}:${config.data}`;
        }else{
            return `${config.method.toUpperCase()}:${config.url}`;
        }

    };

    return instance;
};

export const post = async (serviceUrl: string, url: string, data: any) => {
    const apiClient = createApiClient(serviceUrl, false);
    const key = `POST:${url}:${JSON.stringify(data)}`;
    console.log('key', key);
    if (pendingRequests.has(key)) {
        // If a request with the same data is already pending, return immediately
        //return Promise.reject('Another request with the same data is already pending.');
    }
    try {
        pendingRequests.set(key, true); // Mark the request as pending
        const response = await apiClient.post(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const postFile = async (serviceUrl: string, url: string, data: any) => {
    const apiClient = createApiClient(serviceUrl, true);
    const key = `POST:${url}:${JSON.stringify(data)}`;
    console.log('key', key);
    if (pendingRequests.has(key)) {
        // If a request with the same data is already pending, return immediately
        //return Promise.reject('Another request with the same data is already pending.');
    }
    try {
        //pendingRequests.set(key, true); // Mark the request as pending
        const response = await apiClient.post(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const get = async (serviceUrl: string, url: string) => {
    const apiClient = createApiClient(serviceUrl, false);
    const key = `GET:${url}`;
    console.log('key', key);
    if (pendingRequests.has(key)) {
        // If a request with the same data is already pending, return immediately
        return Promise.reject('Another request with the same data is already pending.');
    }
    try {
        pendingRequests.set(key, true); // Mark the request as pending
        const response = await apiClient.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const del = async (serviceUrl: string, url: string) => {
    const apiClient = createApiClient(serviceUrl, false);
    const key = `DELETE:${url}`;
    if (pendingRequests.has(key)) {
        // If a request with the same data is already pending, return immediately
        return Promise.reject('Another request with the same data is already pending.');
    }
    try {
        pendingRequests.set(key, true); // Mark the request as pending
        const response = await apiClient.delete(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export default createApiClient;

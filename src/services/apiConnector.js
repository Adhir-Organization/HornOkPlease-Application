import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = async (method,url, data) => {
    return axiosInstance({
        method: `${method}`,
        url: `${url}`,
        data: data ? data: null,
    });
}
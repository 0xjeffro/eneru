import axios from "axios";

const requestInstance = axios.create({
    baseURL: "/"
    });

requestInstance.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

requestInstance.interceptors.response.use(
    (response) => {
        // Do something with response data
        if (response.status === 200) {
            return response.data;
        } else {
            return {
                code: -1,
                msg: "Request failed",
                data: null
            };
        }
    },
    (error) => {
        // Do something with response error
        return Promise.reject(error);
    }
);


export default requestInstance;

import { AxiosRequestConfig } from 'axios';
import instance from './instance';

class AxiosInstance {
    static async get(url: string, config?: AxiosRequestConfig) {
        try {
            const response = await instance.get(url, config!);
            return response.data;
        } catch (error: any) {
            console.log(`error is: `, error.response);
        }
    }

    static async post(url: string, data: object, config?: AxiosRequestConfig) {
        try {
            const response = await instance.post(url, data, config!);
            return response.data;
        } catch (error: any) {
            console.log(`error is: `, error.response);
        }
    }
}

export default AxiosInstance;

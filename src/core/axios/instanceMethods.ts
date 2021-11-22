import { AxiosRequestConfig } from 'axios';
import instance from './instance';

class AxiosInstance {
    static get(url: string, config?: AxiosRequestConfig) {
        return instance
            .get(url, config!)
            .then((res) => res.data)
            .catch((err) => console.log(`error is: `, err));
    }
}

export default AxiosInstance;

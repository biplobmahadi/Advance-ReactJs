import { Fragment, useState } from 'react';
import useSWR from 'swr';
import AxiosInstance from '../core/axios/instanceMethods';

const AxiosComponent = () => {
    const fetcher = (url: string) => AxiosInstance.get(url);

    const { data } = useSWR('/photos', fetcher);

    console.log(data, 'data');

    const obj = {
        title: 'hi',
        url: 'again',
        thumbnailUrl: 'haa',
    };

    const postphotos = async () => {
        const res = await AxiosInstance.post(`/photos`, obj);
        console.log('posted', res);
    };

    return (
        <Fragment>
            {/* <button onClick={getphotos}>See photos</button> */}
            <button onClick={postphotos}>Post photos</button>

            {/* {data?.map((photo: any) => (
                <ul key={photo.id}>
                    <li>{photo.url}</li>
                </ul>
            ))} */}
        </Fragment>
    );
};

export default AxiosComponent;

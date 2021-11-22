import { Fragment, useState } from 'react';
import AxiosInstance from '../core/axios/instanceMethods';

const AxiosComponent = () => {
    const [photos, setphotos] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getphotos = async () => {
        setLoading(true);
        const response = await AxiosInstance.get('/photos');
        console.log(response);
        setLoading(false);
        setphotos(response);
    };

    console.log(photos, 'photos');
    return (
        <Fragment>
            <button onClick={getphotos}>See photos</button>
            {loading && <p>Loading...</p>}

            {photos?.map((photo) => (
                <ul key={photo.id}>
                    <li>{photo.url}</li>
                </ul>
            ))}
        </Fragment>
    );
};

export default AxiosComponent;

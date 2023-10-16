import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PhotoList() {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                const firstTenPhotos = response.data.slice(0, 10);
                setPhotos(firstTenPhotos);
            })
            .catch((error) => {
                console.error(error);
            });
        console.log('123', photos);
    }, []);

    return (
        <div>
            <h1>PhotoList</h1>
            <ul>
                {photos.map((photo) => (
                    <li key={photo.id}>
                        <p>사진제목: {photo.title}</p>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

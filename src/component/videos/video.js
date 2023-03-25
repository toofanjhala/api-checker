import React, { useEffect, useState } from 'react';
import './video.css';
import VideoModal from '../UI/VideoModal';

export const Video = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [videoData, setVideoData] = useState([]);

    useEffect(() => {
        const clientId = 'my-client-id';
        const url = 'http://97.74.94.225:8282/besstMainApi/df/videoSection';
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Client_ID': clientId,
                    }
                });

                const data = await response.json();
                console.log("api", data.Data)
                setVideoData(data.Data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData()
    }, [])

    const handleOpenModal = () => {
        setIsOpen(true);
        
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <section className="api-verifier-box-container">
                <div className="api-verifier-box">
                    <div className="video" onClick={handleOpenModal}>
                        Play Videos
                    </div>
                </div>
            </section>
            {isOpen && <VideoModal videoData={videoData} onClose={handleCloseModal} />}
        </>
    );
};

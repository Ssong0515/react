import {useEffect, useState} from "react";

function useFetchImages(){
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.log("fetch failed", error)
            } finally {
                setIsLoading(false);
            }
        };

        fetchImages();

    }, []);

    return {images, isLoading}

}

export default useFetchImages;
import {useCallback, useMemo, useRef, useState} from "react";
import useFetchImages from "./useFetchImages.jsx";

function ImageGallery() {
    const {images, isLoading} = useFetchImages();
    const [selectedImage, setSelectedImage] = useState(null);
    const galleryRef = useRef(null);

    const filteredImages = useMemo(() => {
        // return images.filter(image => image.id % 2 === 0);
        return images
    }, [images]);

    const handleImageClick = useCallback((image) => {
        setSelectedImage(image)
        if (galleryRef.current) {
            galleryRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, []);

    if (isLoading) {
        return (
            <p>Loading images...</p>
        );
    } else {
        return (
            <div ref={galleryRef}>
                <h1>Image Gallery</h1>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px'}}>
                    {filteredImages.map(image => (

                        <img
                            key={image.id}
                            src={image.thumbnailUrl}
                            alt={image.title}
                            onClick={() => handleImageClick(image)}
                            style={{cursor: 'pointer', width: '100px', height: '100px'}}
                        />
                    ))}
                </div>
                {selectedImage && (
                    <div>
                        <h2>Selected Image</h2>
                        <img src={selectedImage.url} alt={selectedImage.title} style={{ width: '400px' }}/>
                    </div>
                )}
            </div>
        )

    }


}

export default ImageGallery;
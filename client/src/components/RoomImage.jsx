import React from 'react';
import image1 from '../assets/images/img1.png';
import image2 from '../assets/images/img2.png';
import image3 from '../assets/images/img3.png';
import image4 from '../assets/images/img4.png';

const ImageSection = () => {
    const images = [
        { src: image1, alt: 'Room Interior 1' },
        { src: image2, alt: 'Room Interior 2' },
        { src: image3, alt: 'Team Group Photo' },
        { src: image4, alt: 'Game Area' },
    ];

    return (
        <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">Our Facilities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {images.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-48 md:h-64 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSection;
import { useState } from 'react';
import CulturalPhotoGallery from '../components/CulturalPhotoGallery';
import defaultImage from '../upload/default-cultural-image.jpg';

const CulturalRecommended = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const hinduRecommendations = [
    { id: 1, image: defaultImage },
    { id: 2, image: defaultImage },
    { id: 3, image: defaultImage },
    { id: 5, image: defaultImage },
    { id: 6, image: defaultImage },
    { id: 7, image: defaultImage },
    { id: 8, image: defaultImage },
    { id: 9, image: defaultImage },
  ];

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-4xl mx-auto pl-2 pr-2 overflow-hidden">
        <h1 className="text-3xl font-bold text-gray-800 mt-0 mb-2">
          Hindu Cultural Highlights
        </h1>
        <p className="text-gray-600 mb-4">
          Explore the vibrant and spiritual traditions of Hindu culture.
        </p>

        <hr className="mb-4 border-gray-300" />

        <div className="idname">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Siwani Rai</h2>
          <p className="text-gray-600 mb-4">
          @Siwanirai
          </p>
        </div>

        <div className="flex overflow-x-auto gap-4 py-4">
          {hinduRecommendations.map((item) => (
            <div key={item.id} className="flex-shrink-0 cursor-pointer">
              <img
                src={item.image}
                alt={`Cultural post ${item.id}`}
                className="w-32 h-32 object-cover rounded-full border border-gray-300 shadow-sm"
                onClick={() => handleImageClick(item)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking on image
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedImage.image}
              alt="Full view"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white mt-2 text-center">Image ID: {selectedImage.id}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CulturalRecommended;

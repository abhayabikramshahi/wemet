import React from "react";

const photos = [
  {
    id: 1,
    title: "Traditional Dance",
    url: "https://source.unsplash.com/600x400/?nepal,dance",
  },
  {
    id: 2,
    title: "Local Festival",
    url: "https://source.unsplash.com/600x400/?nepal,festival",
  },
  {
    id: 3,
    title: "Cultural Dress",
    url: "https://source.unsplash.com/600x400/?nepal,dress",
  },
  {
    id: 4,
    title: "Temple Architecture",
    url: "https://source.unsplash.com/600x400/?nepal,temple",
  },
  {
    id: 5,
    title: "Folk Music",
    url: "https://source.unsplash.com/600x400/?nepal,music",
  },
  {
    id: 6,
    title: "Traditional Food",
    url: "https://source.unsplash.com/600x400/?nepal,food",
  },
];

const CulturalPhotoGallery = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        Cultural Photo Gallery
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <div key={photo.id} className="rounded-lg overflow-hidden shadow-md bg-white">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700">{photo.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulturalPhotoGallery;

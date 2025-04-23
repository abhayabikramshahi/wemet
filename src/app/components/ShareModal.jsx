import { useState } from 'react';
import { FaTimes, FaImage } from 'react-icons/fa';

const ShareModal = ({ isOpen, onClose, post }) => {
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleShare = () => {
    // TODO: Implement share functionality
    console.log('Sharing post with caption:', caption);
    console.log('Selected image:', selectedImage);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <div className="bg-white rounded-lg w-full max-w-lg mx-4 shadow-xl border border-gray-200">
        <div className="flex items-center justify-end p-3 border-b">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="p-4">
          {/* Original Post Preview */}
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={post.avatar}
                alt={post.username}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">{post.username}</p>
                <p className="text-gray-500 text-xs">{post.handle}</p>
              </div>
            </div>
            <p className="text-sm text-gray-800">{post.content}</p>
            {post.image && (
              <img
                src={post.image}
                alt="Post"
                className="mt-2 rounded-lg w-full h-40 object-cover"
              />
            )}
          </div>

          {/* Share Input */}
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Add your thoughts..."
            className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          />

          {/* Image Upload */}
          <div className="mt-4 flex justify-end">
            <label className="p-2 rounded-full hover:bg-gray-100 cursor-pointer transition-colors">
              <FaImage className="text-xl text-gray-600 hover:text-gray-800" />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>

            {previewUrl && (
              <div className="mt-3 relative">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    setPreviewUrl(null);
                  }}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                >
                  <FaTimes />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border-t flex justify-end">
          <button
            onClick={handleShare}
            className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-200 text-sm font-medium"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
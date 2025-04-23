import { useState, useRef } from 'react';
import { Camera, X } from 'lucide-react';
import AvatarEditor from 'react-avatar-editor';

const PhotoUpload = ({ initialImage, onImageChange }) => {
  const [image, setImage] = useState(initialImage);
  const [isDragging, setIsDragging] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [scale, setScale] = useState(1);
  const editorRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleImageSelect(file);
    }
  };

  const handleImageSelect = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      setShowEditor(true);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageSelect(file);
    }
  };

  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      const croppedImage = canvas.toDataURL();
      setImage(croppedImage);
      setShowEditor(false);
      onImageChange(croppedImage);
    }
  };

  return (
    <div className="relative">
      <div
        className={`w-32 h-32 rounded-full overflow-hidden ${isDragging ? 'border-2 border-red-500' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {showEditor ? (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Edit Photo</h3>
                <button
                  onClick={() => setShowEditor(false)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X size={20} />
                </button>
              </div>
              <AvatarEditor
                ref={editorRef}
                image={image}
                width={250}
                height={250}
                border={50}
                borderRadius={125}
                color={[0, 0, 0, 0.6]}
                scale={scale}
                rotate={0}
              />
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zoom
                </label>
                <input
                  type="range"
                  min="1"
                  max="2"
                  step="0.01"
                  value={scale}
                  onChange={(e) => setScale(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
              <button
                onClick={handleSave}
                className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-gray-400">
                <Camera size={64} />
              </div>
            )}
          </div>
        )}
      </div>
      <label className="absolute bottom-0 right-0 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors cursor-pointer">
        <Camera size={20} />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default PhotoUpload;
import { useState, useRef } from 'react';
import { Smile, Send, X } from 'lucide-react';
import defaultAvatar from '../../assets/default-avatar.svg';

const PostCreator = () => {
  const [postContent, setPostContent] = useState('');
  const [media, setMedia] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const fileInputRef = useRef(null);
  const modalRef = useRef(null);

  // Mock user profile (replace with actual data)
  const userProfile = {
    name: 'John Doe',
    avatar: defaultAvatar,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating post:', postContent, media);

    // Reset state
    setPostContent('');
    setMedia(null);
    setShowModal(false);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileSizeInMB = file.size / (1024 * 1024);
      if (fileSizeInMB > 1024) {
        alert('The file size exceeds the 1GB limit. Please upload a smaller file.');
        return;
      }
      setMedia(file);
    }
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setPostContent('');
    setMedia(null);
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleCloseModal();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex gap-4">
        <img
          src={userProfile.avatar}
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <textarea
          value={postContent}
          onClick={handleOpenModal}
          placeholder="What's on your mind?"
          className="flex-1 resize-none border-none focus:ring-0 text-gray-700 placeholder-gray-400 text-sm min-h-[60px] cursor-pointer bg-transparent"
          readOnly
        />
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleOutsideClick}
        >
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <img
                  src={userProfile.avatar}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-lg font-semibold text-gray-800">
                  {userProfile.name}
                </span>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-gray-600 hover:text-gray-800"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder={`What's on your mind, ${userProfile.name}?`}
                className="w-full resize-none border border-gray-200 rounded-lg p-3 text-gray-700 placeholder-gray-400 text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Media Preview */}
              {media && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">
                    {media.type.startsWith('image') ? 'Selected Image:' : 'Selected Video:'}
                  </p>
                  <div className="flex justify-center">
                    {media.type.startsWith('image') ? (
                      <img
                        src={URL.createObjectURL(media)}
                        alt="Selected"
                        className="w-48 h-auto rounded-lg"
                      />
                    ) : (
                      <video controls className="w-48 h-auto rounded-lg">
                        <source src={URL.createObjectURL(media)} />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="text-gray-600 hover:text-blue-500 flex items-center gap-1"
                  >
                    <Smile size={20} />
                    Photo/Video
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,video/*"
                    className="hidden"
                    onChange={handleFileSelect}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!postContent.trim() && !media}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
                >
                  <Send size={16} />
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCreator;

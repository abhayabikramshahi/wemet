import React, { useState } from 'react';
import UserPost from './UserPost';
import PropTypes from 'prop-types';
import { MdVerifiedUser } from 'react-icons/md';
import UserImg from '../upload/default-cultural-image.jpg';
import { useNavigate } from 'react-router-dom';

const ProfileHeader = ({ username, isVerified, postsCount, followersCount, followingCount }) => {
  const [showShareMenu, setShowShareMenu] = React.useState(false);
  const navigate = useNavigate();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${username}'s Profile`,
          text: `Check out ${username}'s profile!`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      setShowShareMenu(true);
    }
  };

  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <div className="flex flex-row items-center sm:items-start gap-8 sm:gap-12">
        <img
          src={UserImg}
          alt={`${username}'s profile`}
          className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-3 sm:border-4 border-white shadow-lg"
          loading="lazy"
        />
        <div className="flex-1 flex flex-col gap-1 sm:gap-4">
          <div className="hidden sm:flex sm:items-center gap-6">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">{username}</h2>
              {isVerified && <MdVerifiedUser className="w-5 h-5 text-blue-500" />}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => navigate('/app/profile/edit')}
                className="px-6 py-1.5 rounded font-medium text-sm bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Edit profile
              </button>
              <button
                onClick={handleShare}
                className="px-3 py-1.5 rounded font-medium text-sm bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Share profile
              </button>
            </div>
          </div>
          <div className="sm:hidden flex items-center gap-2">
            <h2 className="text-lg font-semibold">{username}</h2>
            {isVerified && <MdVerifiedUser className="w-4 h-4 text-blue-500" />}
          </div>
          <div className="flex justify-between sm:justify-start sm:gap-10 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:gap-1">
              <strong className="text-sm font-semibold">{postsCount.toLocaleString()}</strong>
              <span className="text-xs sm:text-sm text-gray-500 sm:text-gray-900">posts</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-1">
              <strong className="text-sm font-semibold">{followersCount.toLocaleString()}</strong>
              <span className="text-xs sm:text-sm text-gray-500 sm:text-gray-900">followers</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-1">
              <strong className="text-sm font-semibold">{followingCount.toLocaleString()}</strong>
              <span className="text-xs sm:text-sm text-gray-500 sm:text-gray-900">following</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Buttons */}
      <div className="sm:hidden grid grid-cols-2 gap-2 px-1">
        <button
          onClick={() => navigate('/app/profile/edit')}
          className="w-full px-4 py-1.5 rounded font-medium text-sm bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          Edit profile
        </button>
        <button
          onClick={handleShare}
          className="w-full px-4 py-1.5 rounded font-medium text-sm bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          Share profile
        </button>
      </div>

      {/* Share Menu */}
      {showShareMenu && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4" onClick={() => setShowShareMenu(false)}>
          <div className="bg-white w-full max-w-sm rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold text-center">Share Profile</h3>
            </div>
            <div className="p-4 space-y-3">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setShowShareMenu(false);
                }}
                className="w-full px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium flex items-center justify-center gap-2"
              >
                Copy link
              </button>
            </div>
            <button
              onClick={() => setShowShareMenu(false)}
              className="w-full p-4 border-t text-sm font-medium text-red-500 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Bio = ({ name, title, location, description }) => (
  <div className="mt-2 sm:mt-3 px-4 sm:px-0">
    <p className="text-gray-900 font-semibold text-sm">{name}</p>
    <p className="text-gray-500 text-sm">{title} • {location}</p>
    <p className="text-gray-900 text-sm leading-[18px] mt-1">{description}</p>
  </div>
);

const Tabs = ({ activeTab, onTabChange }) => (
  <div className="mt-6 border-t border-gray-200">
    <div className="flex justify-around text-xs uppercase font-medium">
      <button
        onClick={() => onTabChange('posts')}
        className={`py-3 px-4 flex items-center gap-1.5 transition-colors duration-200 focus:outline-none ${activeTab === 'posts' 
          ? 'border-t border-gray-500 -mt-px text-gray-900' 
          : 'text-gray-400 hover:text-gray-500'}`}
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zm0 11h7v7h-7v-7zM3 14h7v7H3v-7z" />
        </svg>
        Posts
      </button>
      <button
        onClick={() => onTabChange('tagged')}
        className={`py-3 px-4 flex items-center gap-1.5 transition-colors duration-200 focus:outline-none ${activeTab === 'tagged' 
          ? 'border-t border-gray-500 -mt-px text-gray-900' 
          : 'text-gray-400 hover:text-gray-500'}`}
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.8 19.1l-8.2-8.2 1.3-1.3c3.1-3.1 3.1-8.2 0-11.3-3.1-3.1-8.2-3.1-11.3 0-3.1 3.1-3.1 8.2 0 11.3l1.3 1.3-4.3 4.3c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5s.9-.2 1.2-.5l4.3-4.3 1.3 1.3-4.3 4.3c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5s.9-.2 1.2-.5l4.3-4.3 8.2 8.2c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.8-.7.8-1.8.1-2.5z" />
        </svg>
        Tagged
      </button>
    </div>
  </div>
);

const PostsGrid = ({ posts, onPostClick }) => (
  <div className="mt-2 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-4 px-1 sm:px-0">
    {posts.map((post, index) => (
      <div 
        key={index}
        className="relative cursor-pointer overflow-hidden rounded-sm hover:opacity-95 transition-opacity duration-200"
        onClick={() => onPostClick(post)}
      >
        <div className="aspect-[4/5] relative">
          <img
            src={post.imageUrl || UserImg}
            alt={`Post ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            onError={(e) => (e.target.src = 'https://via.placeholder.com/300x300?text=Error')}
          />
        </div>
      </div>
    ))}
  </div>
);

const ProfilePage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeTab, setActiveTab] = useState('posts');

  const posts = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    imageUrl: UserImg,
    caption: `Post caption ${i + 1}`,
    timestamp: `${i + 1} day${i === 0 ? '' : 's'} ago`,
    likes: 1000 + i * 100,
  }));

  const profileData = {
    username: 'alexjohnson',
    isVerified: true,
    name: 'Alex Johnson',
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    description: 'Passionate about tech, hiking, and sci-fi. Exploring the world one adventure at a time! 🌍',
    postsCount: 1234,
    followersCount: 567000,
    followingCount: 890,
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      <div className="w-full max-w-[935px] mx-auto px-0 sm:px-4 py-2 sm:py-8">
        <ProfileHeader
          username={profileData.username}
          isVerified={profileData.isVerified}
          postsCount={profileData.postsCount}
          followersCount={profileData.followersCount}
          followingCount={profileData.followingCount}
        />
        <Bio {...profileData} />
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === 'posts' ? (
          <>
            <PostsGrid posts={posts} onPostClick={setSelectedPost} />
            {selectedPost && (
              <UserPost
                post={selectedPost}
                userData={{
                  username: profileData.username,
                  profileImage: UserImg,
                  title: profileData.title,
                }}
                isOpen={!!selectedPost}
                onClose={() => setSelectedPost(null)}
              />
            )}
          </>
        ) : (
          <div className="mt-6 text-center text-gray-500 text-sm">No tagged posts available.</div>
        )}
      </div>
    </div>
  );
};

ProfileHeader.propTypes = {
  username: PropTypes.string.isRequired,
  isVerified: PropTypes.bool,
  postsCount: PropTypes.number.isRequired,
  followersCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
};

Bio.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

PostsGrid.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      caption: PropTypes.string,
      timestamp: PropTypes.string,
      likes: PropTypes.number,
    })
  ).isRequired,
  onPostClick: PropTypes.func.isRequired,
};

export default ProfilePage;

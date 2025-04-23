import defaultAvatar from '../assets/default-avatar.svg';

// Mock data for development
const mockProfiles = [
  {
    id: 1,
    name: 'Sarah Johnson',
    age: 28,
    bio: 'Love exploring new places and trying different cuisines!',
    interests: ['Travel', 'Food', 'Photography'],
    image: defaultAvatar
  },
  {
    id: 2,
    name: 'Michael Chen',
    age: 31,
    bio: 'Passionate about music and outdoor adventures!',
    interests: ['Music', 'Sports', 'Travel'],
    image: defaultAvatar
  },
  {
    id: 3,
    name: 'Emma Wilson',
    age: 26,
    bio: 'Art lover and fitness enthusiast.',
    interests: ['Art', 'Fitness', 'Reading'],
    image: defaultAvatar
  }
];

let currentIndex = 0;

export const getNextProfile = (userInterests) => {
  if (currentIndex >= mockProfiles.length) {
    currentIndex = 0; // Reset to start if we've shown all profiles
  }
  
  // In a real app, we would filter based on userInterests
  const profile = mockProfiles[currentIndex];
  currentIndex++;
  return profile;
};

export const handleProfileAction = (profileId, action) => {
  // In a real app, this would make an API call to handle likes/dislikes
  console.log(`Profile ${profileId} was ${action}ed`);
  return true;
};
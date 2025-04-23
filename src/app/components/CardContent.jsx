import { Box, Typography } from '@mui/material';

const CardContent = ({ profile }) => {
  const { name, age, bio, interests } = profile;

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" fontWeight="bold">
        {name}, {age}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
        {bio}
      </Typography>
      {interests && interests.length > 0 && (
        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {interests.map((interest) => (
            <Typography
              key={interest}
              sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                backgroundColor: 'primary.light',
                color: '#fff',
                fontSize: '0.8rem',
              }}
            >
              #{interest}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CardContent;
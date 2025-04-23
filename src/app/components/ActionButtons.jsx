import { Box, IconButton } from '@mui/material';
import { Close as CloseIcon, Chat as ChatIcon, Favorite as FavoriteIcon } from '@mui/icons-material';

const ActionButtons = ({ onDislike, onMessage, onLike }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
      <IconButton onClick={onDislike} sx={{ color: 'error.main' }}>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={onMessage} sx={{ color: 'info.main' }}>
        <ChatIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={onLike} sx={{ color: 'success.main' }}>
        <FavoriteIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default ActionButtons;
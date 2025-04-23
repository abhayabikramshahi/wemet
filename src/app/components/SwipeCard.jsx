import { Card } from '@mui/material';

const SwipeCard = ({ children }) => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: 'auto',
        boxShadow: 3,
        borderRadius: 2,
        overflow: 'hidden',
        backgroundColor: 'background.paper',
      }}
    >
      {children}
    </Card>
  );
};

export default SwipeCard;
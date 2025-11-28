import { Box, Typography } from "@mui/material";
import type { User } from "../App";

interface BlockProps {
  user: User;
}

const Block = ({ user }: BlockProps) => {
  return (
    <Box
      sx={{
        border: '2px solid black',
        padding: '16px',
        margin: '8px 0',
        borderRadius: '8px',
        bgcolor: "red",
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    > 
      <Typography variant="h6" color="black">User ID: {user.id}</Typography>
      <Typography variant="body1">User Name: {user.name}</Typography>
    </Box>
  );
};

export default Block;

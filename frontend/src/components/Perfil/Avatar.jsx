import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function AvatarPerfil({file}) {
  return (
      <Avatar
        alt="Avatar"
        src={file || "/static/images/avatar/1.jpg"}
        sx={{ 
          width: 216, height: 216,
          position: "absolute", 
          top: 50, 
          left: 60, 
          
        }}
      />
  );
}
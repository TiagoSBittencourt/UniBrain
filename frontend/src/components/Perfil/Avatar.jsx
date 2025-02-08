import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function AvatarPerfil({file}) {
  return (
      <Avatar className="avatar-foto"
        alt="Avatar"
        src={file}
        sx={{ 
          width: 216, height: 216,
          position: "absolute", 
          top: 80, 
          left: 100, 
          
        }}
      />
  );
}
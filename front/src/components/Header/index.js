import React from 'react';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <div className="header">
      <Typography
        sx={{
          fontSize: '50px',
          color: '#fff',
          textAlign: 'center',
          margin: '3% auto',
        }}>
        Todo List
      </Typography>
    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Goback() {
  let route = useNavigate();

  const go_back = () => {
    route('/');
  };

  return (
    <div>
      <Button
        sx={{ margin: '10px 10px' }}
        onClick={go_back}
        variant="contained"
        startIcon={<ArrowBackIcon />}>
        Go back
      </Button>
    </div>
  );
}

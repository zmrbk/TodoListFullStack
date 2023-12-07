import React from 'react'
import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';

export default function Edit() {
  return (
    <div>
      <Button 
        sx={{margin: '10px 10px'}}
        type='submit' 
        variant="contained" 
        endIcon={<BorderColorIcon />}>
        Edit
      </Button>
    </div>
  )
}

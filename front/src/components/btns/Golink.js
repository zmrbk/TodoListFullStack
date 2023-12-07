import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ViewListIcon from '@mui/icons-material/ViewList';
import Tooltip from '@mui/material/Tooltip';

export default function Golink({ id }) {
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <Tooltip title="Details" placement="bottom" color="primary">
          <IconButton>
            <ViewListIcon />
          </IconButton>
        </Tooltip>
      </Link>
    </div>
  );
}

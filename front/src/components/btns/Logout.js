import React from 'react';
import { useDispatch } from 'react-redux';
import { removeToken } from '../../configs/localstorage';
import { checkToken } from '../../redux/actions/actions';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Logout() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const logout = () => {
    removeToken();
    dispatch(checkToken());
  };

  return (
    <div>
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained"
        endIcon={<LogoutIcon />}>
        Logout
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem sx={{ width: '118px' }} onClick={logout} type="submit">
          Yes
        </MenuItem>
        <MenuItem sx={{ width: '118px' }} onClick={handleClose}>
          No
        </MenuItem>
      </Menu>
    </div>
  );
}

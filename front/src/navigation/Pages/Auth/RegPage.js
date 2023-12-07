import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registration } from '../../../redux/actions/actions';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function RegPage() {
  const disaptch = useDispatch();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const changeData = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };

  const reg = (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      disaptch(registration(data));
    }
  };

  const style = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '320px',
    margin: '10% auto 0px',
  };

  return (
    <Box sx={style}>
      <Typography sx={{ fontSize: '45px', color: '#fff', marginBottom: '10px' }}>
        Registration
      </Typography>
      <Typography sx={{ marginBottom: '30px', color: '#fff' }}>
        Welcome, please create your account
      </Typography>
      <Card sx={{ boxShadow: '12px 13px 14px 7px rgba(53,54,56,0.77)' }}>
        <CardContent
          sx={{
            width: '100%',
            padding: '10% 6%',
            backgroundColor: '#fff',
          }}>
          <form onSubmit={reg}>
            <TextField
              sx={{ width: '95%', marginBottom: '30px' }}
              type="email"
              label="Email"
              required
              variant="outlined"
              value={data.email}
              onChange={changeData('email')}
              placeholder="Enter your email"
            />
            <TextField
              sx={{ width: '95%', marginBottom: '20px' }}
              type="password"
              label="Password"
              required
              variant="outlined"
              value={data.password}
              onChange={changeData('password')}
              placeholder="Enter your password"
            />
            <CardActions>
              <Button
                sx={{ width: '100%', height: '50px', marginBottom: '10px' }}
                type="submit"
                variant="contained">
                Create Account
              </Button>
            </CardActions>
          </form>
          <Link to="/">
            <Typography sx={{ fontSize: '16px', color: '#2b6cb0' }}>Go to Authorization</Typography>
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
}

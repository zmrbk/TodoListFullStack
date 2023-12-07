import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authorization } from '../../../redux/actions/actions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function AuthPage() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const changeData = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };

  const auth = (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      dispatch(authorization(data));
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
    <Box sx={style} variant="fullscreen">
      <Typography sx={{ fontSize: '45px', color: '#fff', marginBottom: '10px' }}>
        Authorization
      </Typography>
      <Typography sx={{ marginBottom: '30px', color: '#fff' }}>
        Welcome, please login to your Todo List
      </Typography>
      <Card sx={{ boxShadow: '12px 13px 14px 7px rgba(53,54,56,0.77)' }}>
        <CardContent
          sx={{
            width: '100%',
            padding: '10% 6%',
            backgroundColor: '#fff',
          }}>
          <form onSubmit={auth}>
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
                Login
              </Button>
            </CardActions>
          </form>
          <Link to="/reg">
            <Typography sx={{ fontSize: '16px', color: '#2b6cb0' }}>Create Account</Typography>
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
}

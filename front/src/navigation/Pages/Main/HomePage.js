import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../../../components/Header';
import ListTodo from '../../../components/ListTodo.js';
import CreateTodo from '../../../components/modals/CreateTodo';
import { get_list_todos } from '../../../redux/actions/actions';
import Typography from '@mui/material/Typography';

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_list_todos());
  }, []);

  return (
    <div>
      <Header />
      <CreateTodo />
      <Typography
        component="span"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '30px',
          color: '#fff',
          marginBottom: '20px',
        }}>
        Main
      </Typography>
      <ListTodo />
    </div>
  );
}

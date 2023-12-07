import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../../../components/Header';
import EditTodo from '../../../components/modals/EditTodo';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function DetailPage() {
  const list = useSelector((state) => state.list_todo);
  const [todo, setTodo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setTodo(list.find((el) => el._id === id));
  }, [id, list]);

  return (
    <div>
      <Header />
      <Typography
        component="span"
        sx={{
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          fontSize: '30px',
          marginBottom: '25px',
        }}>
        Review
      </Typography>
      <List sx={{ width: '100%', maxWidth: '100%' }}>
        <ListItem
          sx={{
            backgroundColor: 'lightblue',
            padding: '15px 10px 15px 10px',
            marginBottom: '30px',
            boxShadow: '12px 13px 14px 7px rgba(53,54,56,0.77)',
          }}>
          <ListItemText>
            <Typography sx={{ fontSize: '22px' }}>Title: {todo?.title}</Typography>

            <Divider
              sx={{
                backgroundColor: 'gray',
                border: '1px solid gray',
                margin: '5px auto',
              }}></Divider>

            <Typography sx={{ fontSize: '18px' }}>Description: {todo?.description}</Typography>

            <Divider
              sx={{
                backgroundColor: 'gray',
                border: '1px solid gray',
                margin: '5px auto',
              }}></Divider>

            <Typography>Status: {todo?.status ? 'Done' : 'Process'}</Typography>
          </ListItemText>
        </ListItem>
      </List>
      <EditTodo elem={todo} />
    </div>
  );
}

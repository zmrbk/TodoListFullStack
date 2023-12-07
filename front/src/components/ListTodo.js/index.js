import React from 'react';
import { useSelector } from 'react-redux';
import Delete from '../btns/Delete';
import Golink from '../btns/Golink';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function ListTodo() {
  const list = useSelector((state) => state.list_todo);

  return (
    <List sx={{ width: '100%', maxWidth: '100%', marginBottom: '80px' }}>
      {list.length > 0 &&
        list.map((el, i) => {
          return (
            <div
              key={i}
              style={el.status ? { backgroundColor: 'lightgreen' } : { backgroundColor: '#fff' }}>
              <ListItem
                sx={{
                  padding: '15px 10px 15px 10px',
                  marginBottom: '30px',
                  boxShadow: '12px 13px 14px 7px rgba(53,54,56,0.77)',
                }}>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>{el?.title}</Typography>
                  <Divider
                    sx={{
                      backgroundColor: 'gray',
                      border: '1px solid gray',
                      margin: '5px auto',
                    }}></Divider>
                  <Typography>{el?.description}</Typography>
                </ListItemText>
                <Typography component="span">
                  <Delete id={el._id} />
                  <Golink id={el._id} />
                </Typography>
              </ListItem>
            </div>
          );
        })}
    </List>
  );
}

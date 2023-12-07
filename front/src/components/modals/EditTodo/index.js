import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { edit_todo } from "../../../redux/actions/actions";
import Edit from "../../btns/Edit";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Goback from "../../btns/Goback";
import InputLabel from '@mui/material/InputLabel';
import { ButtonGroup, FormGroup } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

export default function EditTodo({ elem }) {
  const [todo, setTodo] = useState(null);
  const [status, setStatus] = useState(false);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    setTodo(elem);
    setStatus(elem?.status);
  }, [elem]);

  const saveEdit = (e) => {
    e.preventDefault();
    let data = {
      title: todo.title,
      description: todo.description,
      status:status,
    };
    console.log(data);
    dispatch(edit_todo(elem._id, data));
  };

  const changeData = (prop) => (e) => {
    setTodo({ ...todo, [prop]: e.target.value });
  };

  return (
    <Box>
      <form onSubmit={saveEdit}>
        <FormGroup sx={{width: '100%'}}>
        <InputLabel sx={{color: '#fff'}}>
          Edit Title
        </InputLabel>
        <TextField
          sx={{backgroundColor: '#fff', borderRadius: '4px', marginBottom: '10px'}}
          multiline
          rows={1}
          value={todo?.title} 
          onChange={changeData("title")}
          variant="outlined"
        />
        <InputLabel sx={{color: '#fff'}}>
          Edit Descripton
        </InputLabel>
        <TextField
          sx={{backgroundColor: '#fff', borderRadius: '4px'}}
          multiline
          rows={2}
          value={todo?.description}
          onChange={changeData("description")}
          variant="outlined"
        />
        </FormGroup>
        <Tooltip title="Checkbox" placement="bottom">
          <Checkbox
            sx={{color: '#fff'}}
            type='checkbox'
            color="default"
            value={status}
            onChange={() => setStatus(!status)}
          />
        </Tooltip>
        <ButtonGroup sx={{display: 'flex', justifyContent: 'center', marginBottom: '100px'}}>
          <Edit />
          <Goback />
        </ButtonGroup>
      </form>
    </Box>
  );
}

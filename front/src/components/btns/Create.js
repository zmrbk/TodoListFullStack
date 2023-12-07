import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { ListItem, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { create_todo } from '../../redux/actions/actions';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  borderRadius: '3px',
  boxShadow: 24,
  p: 4,
};

export default function Create() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();
    const [todo, setTodo] = useState({
      title: "",
      description: "",
    });
  
    const changeData = (prop) => (e) => {
      setTodo({ ...todo, [prop]: e.target.value });
    };
  
    const create = (e) => {
      e.preventDefault();
      console.log(todo);
      if (todo.title && todo.description) {
        dispatch(create_todo(todo));
        setTodo({
          title: "",
          description: "",
        });
      }
    };

return (
    <div>
        <Button 
            sx={{marginRight: '20px'}} 
            onClick={handleClickOpen} 
            variant="contained" 
            endIcon={<EditIcon />}>
              Create
        </Button> 
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
        <Fade in={open}>
            <Box sx={style}>
                <form onSubmit={create}>
                    <TextField 
                        sx={{width: '100%', marginBottom: '20px'}}      
                        label="Title"
                        multiline
                        maxRows={4}
                        value={todo.title}
                        onChange={changeData("title")}     
                    />
                    <TextField
                        sx={{width: '100%', marginBottom: '20px'}} 
                        label="Description"
                        multiline
                        maxRows={4}
                        value={todo.description}
                        onChange={changeData("description")}             
                    />
                    <ListItem sx={{display: 'flex', justifyContent: 'end'}}>
                        <Button onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button sx={{marginRight: '-13px',}} autoFocus type='submit' onClick={handleClose} variant="contained" endIcon={<TurnedInIcon />}>
                            Save
                        </Button>
                    </ListItem>
                </form>     
            </Box>
        </Fade>
        </Modal> 
    </div>   
  )
}

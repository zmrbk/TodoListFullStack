import { ListItem } from "@mui/material";
import React from "react";
import Create from "../../btns/Create";
import Logout from "../../btns/Logout";

export default function CreateTodo() {

  return (
    <div className="header-content">
          <ListItem sx={{
            display: 'flex', 
            justifyContent: 'center', 
            marginBottom: '50px'}}>
            <Create />
            <Logout/>
          </ListItem>
    </div> 
    
  );
}

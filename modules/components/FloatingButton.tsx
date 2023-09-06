'use client'
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

let Is_Open = false;
const FloatingButton = () => {
  const [open, setOpen] = useState(true);
  const mouseClick = () => setOpen(!Is_Open);
  return (
    <ul
      className="fab-container"
      onClick={mouseClick}
    >
      <li className="fab-button">
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </li>
      <li >
        <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/9c1fd0c5-07f3-410e-82d0-dae01956a215"></iframe>
      </li>
    </ul>
  );
};

export default FloatingButton;
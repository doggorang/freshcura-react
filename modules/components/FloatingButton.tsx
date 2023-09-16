'use client'
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import AssistantIcon from '@mui/icons-material/Assistant';

let Is_Open = true;
const FloatingButton = () => {
  const [IsElementShown, setOpen] = useState(false);
  const mouseClick = () => {
    setOpen(Is_Open);
    Is_Open=!Is_Open;
  };
  return (
    <ul
      className="fab-container floatingStyle"
      onClick={mouseClick}
    >
      <li className="fab-button">
        <IconButton color="primary" aria-label="Get Assistant">
          <AssistantIcon />
        </IconButton>
      </li>
      { IsElementShown ? <ChatAssistant /> : null }
    </ul>
  );
};

const ChatAssistant = () => {
  return (
    <li>
      <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/9c1fd0c5-07f3-410e-82d0-dae01956a215"></iframe>
    </li>
  );
}

export default FloatingButton;
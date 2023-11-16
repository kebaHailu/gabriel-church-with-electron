import React from 'react'
import Button from "@mui/material/Button";
import { ButtonGroup } from '@mui/material';
import "./Mereja.css"
function Mereja() {
  return (
    <div className="Mereja">
      <ButtonGroup
        
        className="secondary titlebar"
        aria-label="button group"
        
      >
       
        <Button>Frewoch</Button>
        <Button>wetatoch</Button>
        <Button>Makelawian</Button>
        <Button>Dekikan</Button>
      </ButtonGroup>
    </div>
  );
}

export default Mereja;
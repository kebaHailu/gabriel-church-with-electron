import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { ButtonGroup, Button, Typography,Popover, Menu, MenuItem } from '@mui/material';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import "./Mereja.css"
import DekikanData from './DekikanData';
import FrewochData from './FrewochData';
import WetatochData from './WetatochData';
import MakelawianData from './MakelawianData';




/* 
mastebaberia ->  <Button>Frewoch</Button>  <Button>wetatoch</Button> <Button>Makelawian</Button> <Button>Dekikan</Button>
mezmur kefel  -> <Button>Frewoch</Button>  <Button>wetatoch</Button> <Button>Makelawian</Button> <Button>Dekikan</Button>
kine tebeb ->  <Button>Frewoch</Button>  <Button>wetatoch</Button> <Button>Makelawian</Button> <Button>Dekikan</Button>
megbare senay -> <Button>Frewoch</Button>  <Button>wetatoch</Button> <Button>Makelawian</Button> <Button>Dekikan</Button>
*/

 

function Mereja() {
  
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  return (
    <div>
      
      <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => ( <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
            ዝርዝር
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
       
        <ButtonGroup >
        <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => ( <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
          ማስተባበርያ
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
       
        <ButtonGroup >
          
          <Button onClick={() => handleButtonClick('frewoch')}>ፍሬዎች</Button>
          <Button onClick={() => handleButtonClick('wetatoch')}>ወጣቶች</Button>
          <Button onClick={() => handleButtonClick('makelawian')}>ማእከላዊያን</Button>
          <Button onClick={() => handleButtonClick('dekikan')}>ደቂቃን</Button>
         
        </ButtonGroup>
      
          </Popover>
        </div>
      )}
    </PopupState>
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => ( <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
          መዝሙር ክፍል
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
       
        <ButtonGroup >
          
          <Button>ፍሬዎች</Button>
          <Button>ወጣቶች</Button>
          <Button>ማእከላዊያን</Button>
          <Button>ደቂቃን</Button>
        </ButtonGroup>
      
          </Popover>
        </div>
      )}
    </PopupState>
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => ( <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
          ኪነ ጥበብ
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
       
        <ButtonGroup >
          
          <Button>ፍሬዎች</Button>
          <Button>ወጣቶች</Button>
          <Button>ማእከላዊያን</Button>
          <Button>ደቂቃን</Button>
        </ButtonGroup>
      
          </Popover>
        </div>
      )}
    </PopupState>
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => ( <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
          ምግባረ ሰናይ
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
       
        <ButtonGroup >
          
          <Button>ፍሬዎች</Button>
          <Button>ወጣቶች</Button>
          <Button>ማእከላዊያን</Button>
          <Button>ደቂቃን</Button>
        </ButtonGroup>
      
          </Popover>
        </div>
      )}
    </PopupState>
        </ButtonGroup>
      
          </Popover>
        </div>
      )}
    </PopupState>
<div>
          {activeButton === 'dekikan' && <DekikanData />}
          {activeButton === 'frewoch' && <FrewochData />}
          {activeButton === 'wetatoch' && <WetatochData />}
          {activeButton === 'makelawian' && <MakelawianData />}
</div>

</div>
  );
}

export default Mereja;
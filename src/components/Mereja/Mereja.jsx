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
          
          <Button onClick={() => handleButtonClick('frewoch_m')}>ፍሬዎች</Button>
          <Button onClick={() => handleButtonClick('wetatoch_m')}>ወጣቶች</Button>
          <Button onClick={() => handleButtonClick('makelawian_m')}>ማእከላዊያን</Button>
          <Button onClick={() => handleButtonClick('dekikan_m')}>ደቂቃን</Button>
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
          
          <Button onClick={() => handleButtonClick('frewoch_k')}>ፍሬዎች</Button>
          <Button onClick={() => handleButtonClick('wetatoch_k')}>ወጣቶች</Button>
          <Button onClick={() => handleButtonClick('makelawian_k')}>ማእከላዊያን</Button>
          <Button onClick={() => handleButtonClick('dekikan_k')}>ደቂቃን</Button>
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
          
          <Button onClick={() => handleButtonClick('frewoch_s')}>ፍሬዎች</Button>
          <Button onClick={() => handleButtonClick('wetatoch_s')}>ወጣቶች</Button>
          <Button onClick={() => handleButtonClick('makelawian_s')}>ማእከላዊያን</Button>
          <Button onClick={() => handleButtonClick('dekikan_s')}>ደቂቃን</Button>
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
          {activeButton === 'dekikan_m' && <DekikanData type='m' />}
          {activeButton === 'frewoch_m' && <FrewochData type='m'/>}
          {activeButton === 'wetatoch_m' && <WetatochData type='m'/>}
          {activeButton === 'makelawian_m' && <MakelawianData type='m'/>}
          {activeButton === 'dekikan_k' && <DekikanData type='k'/>}
          {activeButton === 'frewoch_k' && <FrewochData type='k'/>}
          {activeButton === 'wetatoch_k' && <WetatochData type='k'/>}
          {activeButton === 'makelawian_k' && <MakelawianData type='k'/>}
          {activeButton === 'dekikan_s' && <DekikanData type='s'/>}
          {activeButton === 'frewoch_s' && <FrewochData type='s'/>}
          {activeButton === 'wetatoch_s' && <WetatochData type='s'/>}
          {activeButton === 'makelawian_s' && <MakelawianData type='s'/>}
</div>

</div>
  );
}

export default Mereja;
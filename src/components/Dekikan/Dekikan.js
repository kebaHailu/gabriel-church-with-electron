import React, {useState} from "react";
import "./Dekikan.css";
import {Typography,Box, Grid,TextField } from "@mui/material";
import Button from '@mui/material/Button';
import {InputLabel,MenuItem, FormControl,Select } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers';
import ProfilePictureUploader from "../ProfilePicture/ProfilePictureUploader";
import InputMask from 'react-input-mask';
import { useFormik } from 'formik';




const PhoneInput = (props) => {
    return (
      <InputMask
        {...props}
        mask="+251 99 999 9999"
        maskChar=" "
        placeholder="+251 __ ___ ____"
      />
    );
  };


  


export default function Dekikan() {
    function useInput(initialValue) {
        const [state, setState] = useState(initialValue);
        const handleChange = (event) => {
            setState(event.target.value);   
        };
        return [state, handleChange];
    }
    const [sex, handleChange] = useInput('');
    const [education, educationChange] = useInput('');
    


 
    return (
        <div className="title">
            <Typography variant='h4'>የደቂቃን አባላት ቅጽ መሙያ</Typography>
       
           
            <form  id="wetatoch-form" >

                <div className = "personal-info">
                <Box 
                    sx={{
                        
                        '& .MuiTextField-root': { m: 1, width: '30ch' },
                        
                    }}
                    >
                    <Typography variant='h5' >የአባሉ መረጃ</Typography>
                    <ProfilePictureUploader />
                    <TextField 
                        className="personal-info-input"
                        id = "fullName"
                        name = "fullName"
                        label="ሙሉ ስም"
                        required = {true}
                        variant="standard"
                        helperText="የሙሉ ስም ያስገቡ"
                    />
                        <DatePicker
                            label="የትውልድ ዘመን፡"
                            />
                        <TextField 
                        className="personal-info-input"
                        name="churchName"
                        required = {true}
                        label="የክርስትና ስም"
                        variant="standard"
                    />
                      
                    
                <FormControl className="formcontrol"  >
                <InputLabel id="sex">ፆታ</InputLabel>
                <Select
                    
                    value={sex}

                    label="sex"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>ወንድ</MenuItem>
                    <MenuItem value={20}>ሴት</MenuItem>
                </Select>
                </FormControl>

                     
                    <FormControl className="formcontrol"  >
                    <InputLabel id="demo-simple-select-label">የት/ት ደረጃ</InputLabel>
                    <Select
                        
                        value={education}
                        label="education"
                        onChange={educationChange}
                    >
                        <MenuItem value={0}>አልተከታተልኩም</MenuItem>
                        <MenuItem value={5}>2ኛ ደርጃ</MenuItem>
                        <MenuItem value={6}>1ኛ ደርጃ</MenuItem>
                    </Select>
                    </FormControl>

                    <TextField 
                        className="personal-info-input"
                        name = "educationName"
                        label="የትምህርት ቤቱ ስም"
                        variant="standard"
                    />
                    <hr/>
                    <Typography variant="h5">የመዝግብ መረጃ</Typography>

                    <TextField 
                        className="personal-info-input"
                        name="classrepName"
                        label="የክፍሉ ተጠሪ ስም"
                        variant="standard"
                    />
                        <DatePicker
                            label="የተመዘገቡበት ቀን"


                            />
                    
                     

                     <Button variant="contained" color="primary" type="submit" style={{marginTop: 4 + 'em'}}>
                        ይህንን ቅጽ መዝግብ
                    </Button>
                   
                    </Box>
                </div>
                
    
        <div className = "church-info">
           <Box 
                    sx={{
                        
                        '& .MuiTextField-root': { m: 1, width: '30ch' },
                        
                    }}
                    >
                          <Typography variant="h5" >የተጠሪ መረጃ</Typography>
                          <ProfilePictureUploader 
/>

<TextField 
    className="personal-info-input"
    name="respondantName"
    label="የተጠሪ ሙሉ ስም"
    variant="standard"
/>
 <TextField 
    className="personal-info-input"
    name="churchName"
    required
    label="የክርስትና ስም"
    variant="standard"
/>
<TextField 
    className="personal-info-input"
    name="churchFatherName"
    label="የንስሐ አባት ስም"
    variant="standard"
/>
<TextField 
    className="personal-info-input"
    name="churchFatherPhone"
    label="የንስሕ አባት ስ.ቁ"
    variant="standard"
    InputProps={{
        inputComponent: PhoneInput,
    }}
/>
<TextField 
                        className="personal-info-input"
                        name = "address"
                        label="የመኖሪያ አድራሻ"
                        variant="standard"
                    />
                   
                    <TextField 
                        className="personal-info-input"
                        name = "houseNumber"
                        label="የቤት ቁጥር"
                        variant="standard"
                    />
                    <TextField 
                        className="personal-info-input"
                        name = "phone1"
                        label="የሞባይል ስልክ ቁጥር "
                        variant="standard"
                        InputProps={{
                            inputComponent: PhoneInput,
                        }}
                    />
                    <TextField 
                        className="personal-info-input"
                        name = "phone2"
                        label="ተጨማሪ ስልክ ቁጥር "
                        variant="standard"
                        InputProps={{
                            inputComponent: PhoneInput,
                        }}
                    />
                    <TextField 
                        className="personal-info-input"
                        name = "email"
                        label="ኢሜይል"
                        variant="standard"
                    />
  <TextField 
    className="personal-info-input"
    name="respondantFamilyResponse"
    label="የተጠሪ የቤተሰብ ሃላፊነት"
    variant="standard"
/>
   

 <TextField 
    className="personal-info-input"
    name="occupation"
    label="የሥራ ሁኔታ"
    variant="standard"
/>
 <TextField 
    className="personal-info-input"
    name="workPlace"
    label="የተሰማሩበት የሥራ ዘርፍ"
    variant="standard"
/>


                 

                    
                    </Box>
        </div>

            
        </form>
    </div>

    );
};

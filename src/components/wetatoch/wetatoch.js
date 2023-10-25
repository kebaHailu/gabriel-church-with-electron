import React, {useState} from "react";
import "./wetatoch.css";
import {Typography,Box, Grid,TextField } from "@mui/material";
import Button from '@mui/material/Button';
import {InputLabel,MenuItem, FormControl,Select } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers';
import ProfilePictureUploader from "../ProfilePicture/ProfilePictureUploader";


export default function Wetatoch() {
    function useInput(initialValue) {
        const [state, setState] = useState(initialValue);
        const handleChange = (event) => {
            setState(event.target.value);   
        };
        return [state, handleChange];
    }
    const [sex, handleChange] = useInput('');
    const [marriage, marriageChange] = useInput('');
    const [education, educationChange] = useInput('');
    const [cheducation, cheducationChange] = useInput('');
    const [churchContrbution, churchContrbutionChange] = useInput('');
    const [otherchurch, otherchurchChange] = useInput('');
 
    return (
        <div className="title">
            <Typography variant='h4'>የሰበታ መካነ ሰላም ቅዱስ ገብርኤል ቤተክርስቲያን የፍሬ ሃይማኖት ሰንበት ትምህርት ቤት የአባላት ቅጽ</Typography>
       
           
            <form  id="wetatoch-form">

                <div className = "personal-info">
                <Box component="form"
                    sx={{
                        
                        '& .MuiTextField-root': { m: 1, width: '30ch' },
                        
                    }}
                    >
                    <Typography variant='h5' >ግላዊ መረጃ</Typography>
                    
                    <TextField 
                        className="personal-info-input"
                        id = "fullName"
                        label="ሙሉ ስም"
                        required = {true}
                        variant="standard"
                        helperText="የሙሉ ስም ያስገቡ"
                    />
                        <DatePicker
                            label="የትውልድ ዘመን፡"
                            />
                    
                <FormControl className="formcontrol"  >
                <InputLabel id="demo-simple-select-label">ፆታ</InputLabel>
                <Select
                    
                    value={sex}
                    label="sex"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>ወንድ</MenuItem>
                    <MenuItem value={20}>ሴት</MenuItem>
                </Select>
                </FormControl>

                     <TextField 
                        className="personal-info-input"
                        label="የመኖሪያ አድራሻ"
                        variant="standard"
                    />
                   
                    <TextField 
                        className="personal-info-input"
                        label="የቤት ቁጥር"
                        variant="standard"
                    />
                    <TextField 
                        className="personal-info-input"
                        label="የሞባይል ስልክ ቁጥር "
                        variant="standard"
                    />
                    <TextField 
                        className="personal-info-input"
                        label="ተጨማሪ ስልክ ቁጥር "
                        variant="standard"
                    />
                    <TextField 
                        className="personal-info-input"
                        label="ኢሜይል"
                        variant="standard"
                    />
                    <FormControl className="formcontrol"  >
                    <InputLabel id="demo-simple-select-label">የትዳር ሁኔታ</InputLabel>
                    <Select
                        
                        value={marriage}
                        label="marriage"
                        onChange={marriageChange}
                    >
                        <MenuItem value={10}>ያገባ</MenuItem>
                        <MenuItem value={20}>ያላገባ</MenuItem>
                    </Select>
                    </FormControl>
                     <TextField 
                        className="personal-info-input"
                        label="የሥራ ሁኔታ"
                        variant="standard"
                    />
                    <FormControl className="formcontrol"  >
                    <InputLabel id="demo-simple-select-label">የት/ት ደረጃ</InputLabel>
                    <Select
                        
                        value={education}
                        label="education"
                        onChange={educationChange}
                    >
                        <MenuItem value={1}>ፒኤችዲ</MenuItem>
                        <MenuItem value={2}>ማስተርስ</MenuItem>
                        <MenuItem value={3}>ዲግሪ</MenuItem>
                        <MenuItem value={4}>ዲፕሎማ</MenuItem>
                        <MenuItem value={5}>2ኛ ደርጃ</MenuItem>
                        <MenuItem value={6}>1ኛ ደርጃ</MenuItem>
                    </Select>
                    </FormControl>
                     <TextField 
                        className="personal-info-input"
                        label="የተሰማሩበት የሥራ ዘርፍ"
                        variant="standard"
                    />
                    <TextField 
                        className="personal-info-input"
                        label="የቴሌግራም ዩዘር ስም"
                        variant="standard"
                    />
                    
                     <TextField 
                        className="family"
                        fullWidth
                        multiline
                        rows={4}
                        label="የቤተሰብ አባላት ከስልክ ቁጥር ጋር"
                        
                    />
                  
                   
                    </Box>
                </div>
    
        <div className = "church-info">
           <Box component="form"
                    sx={{
                        
                        '& .MuiTextField-root': { m: 1, width: '30ch' },
                        
                    }}
                    >
                    <Typography variant='h5' >ምንፈሳዊ መረጃ</Typography>
                    <TextField 
                        className="personal-info-input"
                        label="የክርስትና ስም"
                        variant="standard"
                    />
                
                <FormControl className="formcontrol"  >
                <InputLabel  >የቤተክርስቲያን አገልግሎት</InputLabel>
                <Select
                    
                    value={churchContrbution}
                    label="churchContrbution"
                    onChange={churchContrbutionChange}
                >
                    <MenuItem value={1}>ከበሮ መምታት</MenuItem>
                    <MenuItem value={2}>ዜማ መድረስ</MenuItem>
                    <MenuItem value={3}>የዝማሬ መሣሪያዎች ችሎታ</MenuItem>
                    <MenuItem value={4}>ሥነጽሁፍ ድርሰት</MenuItem>
                    <MenuItem value={5}>በክህነት</MenuItem>
                </Select>
                </FormControl>
                    <TextField 
                        className="personal-info-input"
                        label="የንስሐ አባት ስም"
                        variant="standard"
                    />


                    <FormControl className="formcontrol"  >
                    <InputLabel id="demo-simple-select-label">የተከታተሉት የመንፈሳዊ ት/ት</InputLabel>
                    <Select

                        
                        value={cheducation}
                        label="cheducation"
                        onChange={cheducationChange}
                    >
                        <MenuItem value={1}>ቀዳማይ</MenuItem>
                        <MenuItem value={2}>ሳልሳይ</MenuItem>
                        <MenuItem value={3}>ካልዓይ</MenuItem>
                        <MenuItem value={4}>ራብዓይ</MenuItem>
                    </Select>
                    </FormControl>
                   
                    <TextField 
                        className="personal-info-input"
                        label="የንስሕ አባት ስ.ቁ"
                        variant="standard"
                    />
                     <FormControl className="formcontrol"  >
                    <InputLabel id="demo-simple-select-label">በሌላ ሰ/ት/ቤት ያገለገሉበት ዘርፍ?</InputLabel>
                    <Select

                        
                        value={otherchurch}
                        label="otherchurch"
                        onChange={otherchurchChange}
                    >
                        <MenuItem value={1}>አገልግዬ አላውቅም</MenuItem>
                        <MenuItem value={2}>በአመራር</MenuItem>
                        <MenuItem value={3}>በክህነት</MenuItem>
                        <MenuItem value={4}>በአባልነት</MenuItem>   
                    </Select>
                    </FormControl>
                   

                    <TextField 
                        className="personal-info-input"
                        label="የክፍሉ ተጠሪ ስም"
                        variant="standard"
                    />
                        <DatePicker
                            label="የተመዘገቡበት ቀን"
                            />
                    
                     <ProfilePictureUploader />

                     <Button variant="contained" color="primary" type="submit" style={{marginTop: 4 + 'em'}}>
                        ይህንን ቅጽ መዝግብ
                    </Button>
                    
                    
                    </Box>
        </div>

            
        </form>
    </div>

    );
};

import React, {useState} from "react";
import "./styles.css";
import {Typography,Box, Grid,TextField } from "@mui/material";
import Button from '@mui/material/Button';
import {InputLabel,MenuItem, FormControl,Select } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers';
import ProfilePictureUploader from "../ProfilePicture/ProfilePictureUploader";
import InputMask from 'react-input-mask';
import { useFormik } from 'formik';
import DBHandler from "../Storage/PouchDBComponent";




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


  


export default function Wetatoch() {
    const handleImageSelected = (imageFile) => {
        formik.setFieldValue("ProfileImage",imageFile);

    }

    const formik = useFormik({
        initialValues: {
            fullName: '',
            address: '',
            houseNumber: '',
            phone1: '',
            phone2: '',
            email: '',
            occupation: '',
            workPlace: '',
            telegramUsername: '',
            family: '',
            churchName: '',
            churchFatherName: '',
            churchFatherPhone: '',
            classrepName: '',
        },
        validateOnBlur: true,
        onSubmit:(values, {setSubmitting, event}) => {

            if (!formik.values.date && !formik.values.sex && !formik.values.marriage && !formik.values.churchContrbution && !formik.values.cheducation && !formik.values.otherchurch && !formik.values.registerdate){
                alert("እባክዎ ባዶ ቦታዎችን በመምረጥ መረጃዎችን ያስገቡ");
            }
            else{
            const database = new DBHandler('Wetatoch');
            database.save(values);
            setSubmitting(false);
            }

        },
    });


 
    return (
        <div className="title">
            <Typography variant='h4'>የወጣት አባላት ቅጽ መሙያ</Typography>
       
           
            <form  id="wetatoch-form" onSubmit={formik.handleSubmit}>
                <div className = "personal-info">
                <Box sx={{'& .MuiTextField-root': { m: 1, width: '30ch' },}}>
                    <Typography variant='h5' >ግላዊ መረጃ</Typography>

                    <ProfilePictureUploader 
                    onImageSelected = {handleImageSelected}
                    />

                    <TextField 
                        className="personal-info-input"
                        id = "fullName"
                        name = "fullName"
                        label="ሙሉ ስም"
                        value = {formik.values.fullName}
                        onChange={formik.handleChange}
                        required
                        variant="standard"
                        helperText="የሙሉ ስም ያስገቡ"
                    />
                        <DatePicker
                            label="የትውልድ ዘመን፡"
                            value={formik.values.date || null}
                            onChange={(date) => {
                              const birthdate = date ? date.format("YYYY-MM-DD") : "";
                              formik.setFieldValue("Birthdate", birthdate);
                            }}
                            />
                    
                <FormControl className="formcontrol"  >
                <InputLabel id="sex">ፆታ</InputLabel>
                <Select
                    
                    value={formik.values.sex || ''}
                    onChange = {formik.handleChange}
                    name = "sex"
                    label="sex"
                >
                    <MenuItem value={'ወንድ'}>ወንድ</MenuItem>
                    <MenuItem value={'ሴት'}>ሴት</MenuItem>
                </Select>
                </FormControl>

                     <TextField 
                        className="personal-info-input"
                        name = "address"
                        required
                        value={formik.values.address || ''}
                        onChange = {formik.handleChange}
                        label="የመኖሪያ አድራሻ"
                        variant="standard"
                    />
                   
                    <TextField 
                        className="personal-info-input"
                        name = "houseNumber"
                        required
                        value={formik.values.houseNumber || ''}
                        onChange = {formik.handleChange}
                        label="የቤት ቁጥር"
                        variant="standard"
                    />
                    <TextField 
                        className="personal-info-input"
                        name = "phone1"
                        required
                        value={formik.values.phone1 || ''}
                        onChange = {formik.handleChange}
                        label="የሞባይል ስልክ ቁጥር "
                        variant="standard"
                        InputProps={{
                            inputComponent: PhoneInput,
                        }}
                    />
                    <TextField 
                        className="personal-info-input"
                        name = "phone2"
                        value={formik.values.phone2 || ''}
                        onChange = {formik.handleChange}
                        label="ተጨማሪ ስልክ ቁጥር "
                        variant="standard"
                        InputProps={{
                            inputComponent: PhoneInput,
                        }}
                    />
                    <TextField 
                        className="personal-info-input"
                        name = "email"
                        required
                        value={formik.values.email || ''}
                        onChange = {formik.handleChange}
                        label="ኢሜይል"
                        variant="standard"
                    />
                    <FormControl className="formcontrol"  >
                    <InputLabel id="demo-simple-select-label">የትዳር ሁኔታ</InputLabel>
                    <Select
                        
                        value={formik.values.marriage || ''}
                        name="marriage"
                        label="marriage"
                        onChange={formik.handleChange}
                    >
                        <MenuItem value={'ያገባ'}>ያገባ</MenuItem>
                        <MenuItem value={'ያገባ'}>ያላገባ</MenuItem>
                    </Select>
                    </FormControl>
                     <TextField 
                        className="personal-info-input"
                        value={formik.values.occupation || ''}
                        onChange = {formik.handleChange}
                        name="occupation"
                        label="የሥራ ሁኔታ"
                        variant="standard"
                    />
                    <FormControl className="formcontrol"  >
                    <InputLabel id="demo-simple-select-label">የት/ት ደረጃ</InputLabel>
                    <Select
                        name = 'education'
                        value={formik.values.education || ''}
                        label="education"
                        onChange={formik.handleChange}
                    >
                        <MenuItem value={'ፒኤችዲ'}>ፒኤችዲ</MenuItem>
                        <MenuItem value={'ማስተርስ'}>ማስተርስ</MenuItem>
                        <MenuItem value={'ዲግሪ'}>ዲግሪ</MenuItem>
                        <MenuItem value={'ዲፕሎማ'}>ዲፕሎማ</MenuItem>
                        <MenuItem value={'2ኛ ደርጃ'}>2ኛ ደርጃ</MenuItem>
                        <MenuItem value={'1ኛ ደርጃ'}>1ኛ ደርጃ</MenuItem>
                    </Select>
                    </FormControl>
                     <TextField 
                        className="personal-info-input"
                        value={formik.values.workPlace || ''}
                        onChange = {formik.handleChange}
                        name="workPlace"
                        label="የተሰማሩበት የሥራ ዘርፍ"
                        variant="standard"
                    />
                    <TextField 
                        className="personal-info-input"
                        required
                        value={formik.values.telegramUsername || ''}
                        onChange = {formik.handleChange}
                        name="telegramUsername"
                        label="የቴሌግራም ዩዘር ስም"
                        variant="standard"
                    />
                    
                     <TextField 
                        className="family"
                        required
                        value={formik.values.family || ''}
                        onChange = {formik.handleChange}
                        name="family"
                        fullWidth
                        multiline
                        rows={4}
                        label="የቤተሰብ አባላት ከስልክ ቁጥር ጋር"
                        
                    />
                  
                   
                    </Box>
                </div>
    
        <div className = "church-info">
           <Box 
                    sx={{
                        
                        '& .MuiTextField-root': { m: 1, width: '30ch' },
                        
                    }}
                    >
                    <Typography variant='h5' >ምንፈሳዊ መረጃ</Typography>
                    <TextField 
                        className="personal-info-input"
                        name="churchName"
                        value={formik.values.churchName || ''}
                        onChange = {formik.handleChange}
                        required
                        label="የክርስትና ስም"
                        variant="standard"
                    />
                
                <FormControl className="formcontrol"  >
                <InputLabel  >የቤተክርስቲያን አገልግሎት</InputLabel>
                <Select
                    
                    value={formik.values.churchContrbution || ''}
                    name="churchContrbution"
                    label="churchContrbution"
                    onChange={formik.handleChange}
                >
                    <MenuItem value={'ከበሮ መምታት'}>ከበሮ መምታት</MenuItem>
                    <MenuItem value={'ዜማ መድረስ'}>ዜማ መድረስ</MenuItem>
                    <MenuItem value={'የዝማሬ መሣሪያዎች ችሎታ'}>የዝማሬ መሣሪያዎች ችሎታ</MenuItem>
                    <MenuItem value={'ሥነጽሁፍ ድርሰት'}>ሥነጽሁፍ ድርሰት</MenuItem>
                    <MenuItem value={'በክህነት'}>በክህነት</MenuItem>
                </Select>
                </FormControl>
                    <TextField 
                        className="personal-info-input"
                        name="churchFatherName"
                        required
                        value={formik.values.churchFatherName || ''}
                        onChange = {formik.handleChange}
                        label="የንስሐ አባት ስም"
                        variant="standard"
                    />


                    <FormControl className="formcontrol"  >
                    <InputLabel id="demo-simple-select-label">የተከታተሉት የመንፈሳዊ ት/ት</InputLabel>
                    <Select

                        
                        value={formik.values.cheducation || ''}
                        name="cheducation"
                        label="cheducation"
                        onChange={formik.handleChange}
                    >
                        <MenuItem value={'ቀዳማይ'}>ቀዳማይ</MenuItem>
                        <MenuItem value={'ሳልሳይ'}>ሳልሳይ</MenuItem>
                        <MenuItem value={'ካልዓይ'}>ካልዓይ</MenuItem>
                        <MenuItem value={'ራብዓይ'}>ራብዓይ</MenuItem>
                    </Select>
                    </FormControl>
                   
                    <TextField 
                        className="personal-info-input"
                        value={formik.values.churchFatherPhone || ''}
                        onChange = {formik.handleChange}
                        name="churchFatherPhone"
                        label="የንስሕ አባት ስ.ቁ"
                        variant="standard"
                        InputProps={{
                            inputComponent: PhoneInput,
                        }}
                    />
                     <FormControl className="formcontrol"  >
                    <InputLabel id="demo-simple-select-label">በሌላ ሰ/ት/ቤት ያገለገሉበት ዘርፍ?</InputLabel>
                    <Select

                        
                        value={formik.values.otherchurch || ''}
                        name="otherchurch"
                        label="otherchurch"
                        onChange={formik.handleChange}
                    >
                        <MenuItem value={'>አገልግዬ አላውቅም'}>አገልግዬ አላውቅም</MenuItem>
                        <MenuItem value={'በአመራር'}>በአመራር</MenuItem>
                        <MenuItem value={'በክህነት'}>በክህነት</MenuItem>
                        <MenuItem value={'በአባልነት'}>በአባልነት</MenuItem>   
                    </Select>
                    </FormControl>
                   
                    <hr/>
                    <Typography variant='h5' >የመዝግብ መረጃ</Typography>

                    <TextField 
                        className="personal-info-input"
                        required
                        name="classrepName"
                        value={formik.values.classrepName || ''}
                        onChange = {formik.handleChange}
                        label="የክፍሉ ተጠሪ ስም"
                        variant="standard"
                    />
                        <DatePicker
                            label="የተመዘገቡበት ቀን"
                            value={formik.values.registerdate || null}
                            onChange={(registerdate) => {
                            registerdate = registerdate ? registerdate.format("YYYY-MM-DD") : "";
                              formik.setFieldValue("registerdate", registerdate);
                            }}


                            />
                    
                     

                     <Button variant="contained" color="primary" type="submit" style={{marginTop: 4 + 'em'}}>
                        ይህንን ቅጽ መዝግብ
                    </Button>
                    
                    
                    </Box>
        </div>

            
        </form>
    </div>

    );
};

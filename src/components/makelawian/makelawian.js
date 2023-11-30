import React, {useState} from "react";
import "../wetatoch/styles.css";
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


  


export default function Makelawian() {
    const handleUserImageSelected = (imageFile) => {
        formik.setFieldValue("ProfileImage",imageFile)
    }
    const handleRespondentImageSelected = (imageFile) => {
        formik.setFieldValue("RespondentImage",imageFile)
    }

    const formik = useFormik({
        initialValues: {
            fullName: '',
            Birthdate: '',
            churchName: '',
            sex: '',
            churchFatherName: '',
            churchFatherPhone: '',
            address: '',
            churchContrbution:'',
            houseNumber:'',
            cheducation:'',
            phone1:'',
            otherchurch:'',
            phone2:'',
            email:'',
            schoolcondition:'',
            schoolname:'',
            family:'',
            respondantName:'',
            respondantFamilyResponse:'',
            occupation:'',
            workPlace:'',
            classrepName:'',
            churchService:'ማስተባበሪያ',





        },
    validateOnBlur:true,
    onSubmit: (values, {setSubmitting,event}) => 
    {   
        
        const database = new DBHandler('Makelawian');
        database.save(values);
        setSubmitting(false);
    }
        
    })
    
    return (
        <div className="title">
            <Typography variant='h4'>የማእከላዊያን አባላት ቅጽ መሙያ</Typography>
            <form  id="wetatoch-form" onSubmit={formik.handleSubmit}>
                <div className = "personal-info">
                <Box sx={{'& .MuiTextField-root': { m: 1, width: '30ch' }, }}>
                    <Typography variant='h5' >የአባሉ መረጃ</Typography>
                    <ProfilePictureUploader 
                    section="personal-info"
                    onImageSelected={handleUserImageSelected} />
                    <TextField 
                        className="personal-info-input"
                        id = "fullName"
                        name = "fullName"
                        label="ሙሉ ስም"
                        value = {formik.values.fullName}
                        onChange = {formik.handleChange}
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
                    
                  <TextField 
                      className="personal-info-input"
                      name="churchName"
                      required
                      value = {formik.values.churchName}
                      onChange = {formik.handleChange}
                      label="የክርስትና ስም"
                      variant="standard"
                  />
                      
                    
                <FormControl className="formcontrol"  >
                <InputLabel id="sex">ፆታ</InputLabel>
                <Select
                    name="sex"
                    value={formik.values.sex}
                    label="sex"
                    onChange={formik.handleChange}
                >
                    <MenuItem value={'ወንድ'}>ወንድ</MenuItem>
                    <MenuItem value={'ሴት'}>ሴት</MenuItem>
                </Select>
                </FormControl>

                <TextField 
                      className="personal-info-input"
                      name="churchFatherName"
                      value = {formik.values.churchFatherName}
                      onChange = {formik.handleChange}
                      label="የንስሐ አባት ስም"
                      variant="standard"
                  />
                  <TextField 
                      className="personal-info-input"
                      name="churchFatherPhone"
                      value = {formik.values.churchFatherPhone}
                      onChange = {formik.handleChange}
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
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        variant="standard"
                    />  
              <FormControl className="formcontrol"  >
              <InputLabel  >የቤተክርስቲያን አገልግሎት</InputLabel>
              <Select
                  name = 'churchContrbution'
                  value={formik.values.churchContrbution}

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
                        name = "houseNumber"
                        value = {formik.values.houseNumber}
                        onChange = {formik.handleChange}
                        label="የቤት ቁጥር"
                        variant="standard"
                    />
                  
                   <FormControl className="formcontrol"  >
                  <InputLabel id="demo-simple-select-label">የተከታተሉት የመንፈሳዊ ት/ት</InputLabel>
                  <Select

                      name="cheducation"
                      value={formik.values.cheducation}
                      label="cheducation"
                      onChange={formik.handleChange}
                  >   <MenuItem value={'አልተከታተልኩም'}>አልተከታተልኩም</MenuItem>
                      <MenuItem value={'ቀዳማይ'}>ቀዳማይ</MenuItem>
                      <MenuItem value={'ሳልሳይ'}>ሳልሳይ</MenuItem>
                      <MenuItem value={'ካልዓይ'}>ካልዓይ</MenuItem>
                      <MenuItem value={'ራብዓይ'}>ራብዓይ</MenuItem>
                  </Select>
                  </FormControl>


                  <TextField 
                        className="personal-info-input"
                        name = "phone1"
                        value = {formik.values.phone1}
                        onChange={formik.handleChange}
                        label="የሞባይል ስልክ ቁጥር "
                        variant="standard"
                        InputProps={{
                            inputComponent: PhoneInput,
                        }}
                    />
                 
                  
                   <FormControl className="formcontrol"  >
                  <InputLabel id="demo-simple-select-label">በሌላ ሰ/ት/ቤት ያገለገሉበት ዘርፍ?</InputLabel>
                  <Select

                      name="otherchurch"
                      value={formik.values.otherchurch}

                      label="otherchurch"
                      onChange={formik.handleChange}
                  >
                      <MenuItem value={'አገልግዬ አላውቅም'}>አገልግዬ አላውቅም</MenuItem>
                      <MenuItem value={'በአመራር'}>በአመራር</MenuItem>
                      <MenuItem value={'በክህነት'}>በክህነት</MenuItem>
                      <MenuItem value={'በአባልነት'}>በአባልነት</MenuItem>   
                  </Select>
                  </FormControl>
                  
                   
                    
                    
                    <TextField 
                        className="personal-info-input"
                        name = "phone2"
                        label="ተጨማሪ ስልክ ቁጥር "
                        value={formik.values.phone2}
                        onChange={formik.handleChange}
                        variant="standard"
                        InputProps={{
                            inputComponent: PhoneInput,
                        }}
                    />
                    <TextField 
                        className="personal-info-input"
                        name = "email"
                        values = {formik.values.email}
                        onChange={formik.handleChange}
                        label="ኢሜይል"
                        variant="standard"
                    />
                    <FormControl className="formcontrol"  >
                    <InputLabel id="demo-simple-select-label">የት/ት ደረጃ</InputLabel>
                    <Select
                        name="schoolcondition"
                        value={formik.values.schoolcondition}
                        label="schoolcondition"
                        onChange={formik.handleChange}
                    >
                        <MenuItem value={'ዲፕሎማ'}>ዲፕሎማ</MenuItem>
                        <MenuItem value={'መሰናዶ'}>መሰናዶ</MenuItem>
                        <MenuItem value={'2ኛ ደርጃ'}>2ኛ ደርጃ</MenuItem>
                        <MenuItem value={'1ኛ ደርጃ'}>1ኛ ደርጃ</MenuItem>
                    </Select>
                    </FormControl>
                    <TextField 
                        className="personal-info-input"
                        name = "schoolname"
                        value = {formik.values.schoolname}
                        onChange={formik.handleChange}
                        label="የትምህርት ቤቱ ስም"
                        variant="standard"
                    />
                   
                    
                     <TextField 
                        className="family-unique"
                        name="family"
                        value = {formik.values.family}
                        onChange={formik.handleChange}
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


                          <Typography variant="h5" >የተጠሪ መረጃ</Typography>
                          <ProfilePictureUploader 
                          onImageSelected={handleRespondentImageSelected}
                          />

<TextField 
    className="personal-info-input"
    name="respondantName"
    label="የተጠሪ ስም"
    value={formik.values.respondantName}
    onChange={formik.handleChange}
    variant="standard"
/>
  <TextField 
    className="personal-info-input"
    name="respondantFamilyResponse"
    value = {formik.values.respondantFamilyResponse}
    onChange={formik.handleChange}
    
    label="የተጠሪ የቤተሰብ ሃላፊነት"
    variant="standard"
/>
   

 <TextField 
    className="personal-info-input"
    name="occupation"
    value = {formik.values.occupation}
    onChange={formik.handleChange}
    label="የሥራ ሁኔታ"
    variant="standard"
/>
 <TextField 
    className="personal-info-input"
    name="workPlace"
    value={formik.values.workPlace}
    onChange={formik.handleChange}
    label="የተሰማሩበት የሥራ ዘርፍ"
    variant="standard"
/>

                    
                   <hr/>
                    <Typography variant="h5"> የመዝግብ መረጃ </Typography>
                    <TextField 
                        className="personal-info-input"
                        name="classrepName"
                        label="የክፍሉ ተጠሪ ስም"
                        variant="standard"
                        value={formik.values.classrepName}
                        onChange={formik.handleChange}
                    />
                        <DatePicker
                            label="የተመዘገቡበት ቀን"
                            value={formik.values.registerDate || null}
                            onChange={(registerDate) => {
                              const newDate = registerDate ? registerDate.format("YYYY-MM-DD") : "";
                              formik.setFieldValue("registerDate", newDate);
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

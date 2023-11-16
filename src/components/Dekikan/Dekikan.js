import React, { useState } from "react";
import "../wetatoch/styles.css";
import { Typography, Box, Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import ProfilePictureUploader from "../ProfilePicture/ProfilePictureUploader";
import InputMask from "react-input-mask";
import { Form, Formik, ErrorMessage, useFormik, Field } from "formik";

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
  const formik = useFormik({
    initialValues: {
      fullName: "",
      churchName: "",
      sex: "",
      schoolcondition: "",
      schoolname: "",
      classrepName: "",
      respondantName: "",
      churchFatherName: "",
      Birthdate: null,
      churchName: "",
      RespondentchurchName: "",
      churchFatherPhone: "",
      address: "",
      houseNumber: "",
      phone1: "",
      phone2: "",
      email: "",
      respondantFamilyResponse: "",
      occupation: "",
      workPlace: "",
      registration: null,
    },

    validateOnBlur: true,
    onSubmit: (values, { setSubmitting, event }) => {
      if (values.Birthdate == "") {
        alert("please selelct date");
      }
      if (values.sex == "") {
        alert("ፆታ ያስገቡ");
      }
      console.log("submitting", values);

      setSubmitting(false);
    },
  });
  return (
    <div className="title">
      <Typography variant="h4">የደቂቃን አባላት ቅጽ መሙያ</Typography>
      <form id="wetatoch-form" onSubmit={formik.handleSubmit}>
        <div className="personal-info">
          <Box sx={{ "& .MuiTextField-root": { m: 1, width: "30ch" } }}>
            <Typography variant="h5">የአባሉ መረጃ</Typography>
            <ProfilePictureUploader section="personal-info" />
            <TextField
              className="personal-info-input"
              id="fullName"
              name="fullName"
              label="ሙሉ ስም"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              required
              variant="standard"
             
            />
            <DatePicker
              name="Birthdate"
              label="የትውልድ ዘመን፡"
              required
              value={formik.values.Birthdate}
              onChange={(date) => formik.setFieldValue("Birthdate", date)}
            />

            <TextField
              className="personal-info-input"
              name="churchName"
              value={formik.values.churchName}
              onChange={formik.handleChange}
              label="የክርስትና ስም"
              required
              variant="standard"
            />

            <FormControl className="formcontrol">
              <InputLabel id="sex" required>
                ፆታ
              </InputLabel>
              <Select
                value={formik.values.sex || ""}
                name="sex"
                label="sex"
                onChange={formik.handleChange}
              >
                <MenuItem value={"ወንድ"}>ወንድ</MenuItem>
                <MenuItem value={"ሴት"}>ሴት</MenuItem>
              </Select>
            </FormControl>

            <FormControl className="formcontrol">
              <InputLabel id="demo-simple-select-label">የት/ት ደረጃ</InputLabel>
              <Select
                value={formik.values.schoolcondition || ""}
                name="schoolcondition"
                label="schoolcondition"
                required
                onChange={formik.handleChange}
              >
                <MenuItem value={"አልተከታተልኩም"}>አልተከታተልኩም</MenuItem>
                <MenuItem value={"2ኛ ደርጃ"}>2ኛ ደርጃ</MenuItem>
                <MenuItem value={"1ኛ ደርጃ"}>1ኛ ደርጃ</MenuItem>
              </Select>
            </FormControl>

            <TextField
              className="personal-info-input"
              name="schoolname"
              label="የትምህርት ቤቱ ስም"
              required
              value={formik.values.schoolname}
              onChange={formik.handleChange}
              variant="standard"
            />
            <hr />
            <Typography variant="h5">የመዝግብ መረጃ</Typography>

                    <TextField 
                        className="personal-info-input"
                        name="classrepName"
                        label="የክፍሉ ተጠሪ ስም"
                        value = {formik.values.classrepName}
                        onChange={formik.handleChange}
                        variant="standard"
                    />
                        <DatePicker
                            label="የተመዘገቡበት ቀን"
                            value={formik.values.registerdate}
                            onChange={(registerdate) => formik.setFieldValue('registerdate', registerdate)}


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
              value={formik.values.respondantName}
              onChange={formik.handleChange}
              required
              label="የተጠሪ ሙሉ ስም"
              variant="standard"
            />
            <TextField
              className="personal-info-input"
              name="RespondentchurchName"
              required
              value={formik.values.RespondentchurchName}
              onChange={formik.handleChange}
              label="የክርስትና ስም"
              variant="standard"
            />
            <TextField
              className="personal-info-input"
              name="churchFatherName"
              required
              value={formik.values.churchFatherName}
              onChange={formik.handleChange}
              label="የንስሐ አባት ስም"
              variant="standard"
            />
            <TextField
              className="personal-info-input"
              name="churchFatherPhone"
              required
              value={formik.values.churchFatherPhone}
              onChange={formik.handleChange}
              label="የንስሕ አባት ስ.ቁ"
              variant="standard"
              InputProps={{
                inputComponent: PhoneInput,
              }}
            />
            <TextField
              className="personal-info-input"
              name="address"
              required
              value={formik.values.address}
              onChange={formik.handleChange}
              label="የመኖሪያ አድራሻ"
              variant="standard"
            />

            <TextField
              className="personal-info-input"
              name="houseNumber"
              type="number"
              required
              value={formik.values.houseNumber}
              onChange={formik.handleChange}
              label="የቤት ቁጥር"
              variant="standard"
            />
            <TextField
              className="personal-info-input"
              name="phone1"
              required
              value={formik.values.phone1}
              onChange={formik.handleChange}
              label="የሞባይል ስልክ ቁጥር "
              variant="standard"
              InputProps={{
                inputComponent: PhoneInput,
              }}
            />
            <TextField
              className="personal-info-input"
              name="phone2"
              required
              value={formik.values.phone2}
              onChange={formik.handleChange}
              label="ተጨማሪ ስልክ ቁጥር "
              variant="standard"
              InputProps={{
                inputComponent: PhoneInput,
              }}
            />
            <TextField
              className="personal-info-input"
              name="email"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              label="ኢሜይል"
              variant="standard"
            />
            <TextField
              className="personal-info-input"
              name="respondantFamilyResponse"
              required
              value={formik.values.respondantFamilyResponse}
              onChange={formik.handleChange}
              label="የተጠሪ የቤተሰብ ሃላፊነት"
              variant="standard"
            />

            <TextField
              className="personal-info-input"
              name="occupation"
              required
              value={formik.values.occupation}
              onChange={formik.handleChange}
              label="የሥራ ሁኔታ"
              variant="standard"
            />
            <TextField
              className="personal-info-input"
              name="workPlace"
              required
              value={formik.values.workPlace}
              onChange={formik.handleChange}
              label="የተሰማሩበት የሥራ ዘርፍ"
              variant="standard"
            />
          </Box>
        </div>
      </form>
    </div>
  );
}

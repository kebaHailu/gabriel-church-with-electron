import React, {useState} from "react";
import "./Dekikan.css";
import {Typography,Box, Grid,TextField } from "@mui/material";
import Button from '@mui/material/Button';
import {InputLabel,MenuItem, FormControl,Select } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers';
import ProfilePictureUploader from "../ProfilePicture/ProfilePictureUploader";
import InputMask from 'react-input-mask';
import {Form,Formik,ErrorMessage, useFormik ,Field} from 'formik';
import * as yup from 'yup';


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

// const validationSchema = Yup.object({
//     fullName: Yup.string().required('Required'),
//     date: Yup.date().required('Required'),
//     churchName: Yup.string().required('Required'),
//     educationName: Yup.string().required('Required'),
//     classrepName: Yup.string().required('Required'),
//     respondantName: Yup.string().required('Required'),
//     churchFatherName: Yup.string().required('Required'),
//     churchFatherPhone: Yup.string().required('Required'),
//     address: Yup.string().required('Required'),
//     houseNumber: Yup.string().required('Required'),
//     phone1: Yup.string().required('Required'),
//     phone2: Yup.string().required('Required'),
//     email: Yup.string().required('Required'),
//     respondantFamilyResponse: Yup.string().required('Required'),
//     occupation: Yup.string().required('Required'),
//     workPlace: Yup.string().required('Required'),
//     });




  


export default function Dekikan() {

    const formik = useFormik({
        initialValues: {
            fullName: '',
            churchName: '',
            sex:'',
            schoolcondition:'',
            schoolname: '',
            classrepName: '',
            respondantName: '',
            churchFatherName: '',
            Birthdate: '',
            churchName : '',
            RespondentchurchName : '',
            churchFatherPhone: '',
            address: '',
            houseNumber: '',
            phone1: '',
            phone2: '',
            email: '',
            respondantFamilyResponse: '',
            occupation: '',
            workPlace: '',
        },
        validationSchema: yup.object().shape({
            fullName: yup.string().required('Full name is required'),
            churchName: yup.string().required('Church name is required'),
            sex: yup.string().required('Gender is required'),
            schoolcondition: yup.string().required('School condition is required'),
            schoolname: yup.string().required('School name is required'),
            classrepName: yup.string().required('Class representative name is required'),
            respondantName: yup.string().required('Respondent name is required'),
            churchFatherName: yup.string().required('Church father name is required'),
            
            churchName: yup.string().required('Church name is required'),
            RespondentchurchName: yup.string().required('Respondent church name is required'),
            churchFatherPhone: yup.string().matches(/^\d{11}$/, 'Invalid phone number format'),
            address: yup.string().required('Address is required'),
            houseNumber: yup.string().required('House number is required'),
            email: yup.string().email('Invalid email format'),
            respondantFamilyResponse: yup.string().required('Respondent family response is required'),
            occupation: yup.string().required('Occupation is required'),
            workPlace: yup.string().required('Work place is required'),
          }),
        validateOnBlur: true,
        onSubmit: (values, {setSubmitting, event}) => {
            event.
            console.log('submitting', values);
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
                helperText="የሙሉ ስም ያስገቡ"
              />
              <DatePicker
                label="የትውልድ ዘመን፡"
                value={formik.values.Birthdate}
                onChange={(date) => formik.setFieldValue("Birthdate", date)}
              />

              <TextField
                className="personal-info-input"
                name="churchName"
                value={formik.values.churchName}
                onChange={formik.handleChange}
                label="የክርስትና ስም"
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
                value={formik.values.classrepName}
                onChange={formik.handleChange}
                variant="standard"
              />
              <DatePicker
                label="የተመዘገቡበት ቀን"
                value={formik.values.registerdate}
                onChange={(registerdate) =>
                  formik.setFieldValue("registerdate", registerdate)
                }
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginTop: 4 + "em" }}
              >
                ይህንን ቅጽ መዝግብ
              </Button>
            </Box>
          </div>

          <div className="church-info">
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "30ch" },
              }}
            >
              <Typography variant="h5">የተጠሪ መረጃ</Typography>
              <ProfilePictureUploader section="church-info" />

              <TextField
                className="personal-info-input"
                name="respondantName"
                value={formik.values.respondantName}
                onChange={formik.handleChange}
                label="የተጠሪ ሙሉ ስም"
                variant="standard"
              />
              <TextField
                className="personal-info-input"
                name="RespondentchurchName"
                value={formik.values.RespondentchurchName}
                onChange={formik.handleChange}
                label="የክርስትና ስም"
                variant="standard"
              />
              <TextField
                className="personal-info-input"
                name="churchFatherName"
                value={formik.values.churchFatherName}
                onChange={formik.handleChange}
                label="የንስሐ አባት ስም"
                variant="standard"
              />
              <TextField
                className="personal-info-input"
                name="churchFatherPhone"
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
                value={formik.values.address}
                onChange={formik.handleChange}
                label="የመኖሪያ አድራሻ"
                variant="standard"
              />

              <TextField
                className="personal-info-input"
                name="houseNumber"
                value={formik.values.houseNumber}
                onChange={formik.handleChange}
                label="የቤት ቁጥር"
                variant="standard"
              />
              <TextField
                className="personal-info-input"
                name="phone1"
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
                value={formik.values.email}
                onChange={formik.handleChange}
                label="ኢሜይል"
                variant="standard"
              />
              <TextField
                className="personal-info-input"
                name="respondantFamilyResponse"
                value={formik.values.respondantFamilyResponse}
                onChange={formik.handleChange}
                label="የተጠሪ የቤተሰብ ሃላፊነት"
                variant="standard"
              />

              <TextField
                className="personal-info-input"
                name="occupation"
                value={formik.values.occupation}
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
            </Box>
          </div>
        </form>
      </div>
    );
};

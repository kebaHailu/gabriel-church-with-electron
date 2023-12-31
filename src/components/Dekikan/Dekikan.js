import React from "react";
import "../wetatoch/styles.css";
import {Typography,Box, Grid,TextField } from "@mui/material";
import Button from '@mui/material/Button';
import {InputLabel,MenuItem, FormControl,Select } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers';
import ProfilePictureUploader from "../ProfilePicture/ProfilePictureUploader";
import InputMask from 'react-input-mask';
import {useFormik } from 'formik';
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
export default function Dekikan() {

  const handleUserImageSelected = (imageSelected) => {
    formik.setFieldValue("ProfileImage",imageSelected)
  }
  const handleRespondentImageSelected = (imageSelected) => {
    formik.setFieldValue("RespondentImage",imageSelected)
  }

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
      
        validateOnBlur: true,
        onSubmit: (values, {setSubmitting, event}) => {
            if (values.sex == "")
            { alert("ፆታ ያስገቡ"); }
            console.log(values)
            const database = new DBHandler("Dekikan");
            database.save(values);
            
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

              <ProfilePictureUploader 
                section="personal-info"
                onImageSelected = {handleUserImageSelected}
                 />

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
                label="የትውልድ ዘመን"
                value={formik.values.date || null}
                onChange={(date) => {
                  const birthdate = date ? date.format("YYYY-MM-DD") : "";
                  formik.setFieldValue("Birthdate", birthdate);
                }}
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
                value={formik.values.registerdate || null}
                onChange={(registerdate) => {
                  const rdate = registerdate
                    ? registerdate.format("YYYY-MM-DD")
                    : "";
                  formik.setFieldValue("registerdate", rdate);
                }}
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
              <ProfilePictureUploader
                onImageSelected = {handleRespondentImageSelected} 
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
};

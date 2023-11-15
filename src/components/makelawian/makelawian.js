import React, { useState } from "react";
import "../wetatoch/styles.css";
import { Typography, Box, Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import ProfilePictureUploader from "../ProfilePicture/ProfilePictureUploader";

import InputMask from "react-input-mask";
import { useFormik } from "formik";
import { Formik, Form, Field } from "formik";

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
  var { values, handleChange, handleBlur, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        fullName: "",
        churchName: "",
        churchFatherName: "",
        churchFatherPhone: "",
        address: "",
        houseNumber: "",
        phone1: "",
        email: "",
        educationName: "",
        family:"",
      },
      onSubmit: (value) => {},
    });
  function useInput(initialValue) {
    const [state, setState] = useState(initialValue);
    const handleChange = (event) => {
      setState(event.target.value);
    };
    return [state, handleChange];
  }
  var [sex, handleChange] = useInput("");
  const [marriage, marriageChange] = useInput("");
  const [education, educationChange] = useInput("");
  const [cheducation, cheducationChange] = useInput("");
  const [churchContrbution, churchContrbutionChange] = useInput("");
  const [otherchurch, otherchurchChange] = useInput("");

  return (
    <div className="title">
      <Typography variant="h4">የማእከላዊያን አባላት ቅጽ መሙያ</Typography>

      <form onSubmit={handleSubmit} id="wetatoch-form">
        <div className="personal-info">
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
            }}
          >
            <Typography variant="h5">የአባሉ መረጃ</Typography>
            <ProfilePictureUploader section="personal-info" />
            <Formik>
              <Form>
                <Field
                  as={TextField}
                  className="personal-info-input"
                  id="fullName"
                  name="fullName"
                  // type='fullName'
                  label="ሙሉ ስም"
                  variant="standard"
                  value={values.fullName }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.fullName && touched.fullName && (
                  <p className="errors">{errors.fullName}</p>
                )}
                <DatePicker label="የትውልድ ዘመን፡" />
                <Field
                  as={TextField}
                  className="personal-info-input"
                  name="churchName"
                  required
                  label="የክርስትና ስም"
                  variant="standard"
                  value={values.churchName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.churchName && touched.churchName && (
                  <p className="errors">{errors.churchName}</p>
                )}
                <FormControl className="formcontrol">
                  <InputLabel id="sex">ፆታ</InputLabel>
                  <Select value={sex} label="sex" onChange={handleChange}>
                    <MenuItem value={10}>ወንድ</MenuItem>
                    <MenuItem value={20}>ሴት</MenuItem>
                  </Select>
                </FormControl>
                <Field
                  as={TextField}
                  className="personal-info-input"
                  name="churchFatherName"
                  label="የንስሐ አባት ስም"
                  variant="standard"
                  value={values.churchFatherName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.churchFatherName && touched.churchFatherName && (
                  <p className="errors">{errors.churchFatherName}</p>
                )}
                <Field
                  as={TextField}
                  className="personal-info-input"
                  name="churchFatherPhone"
                  label="የንስሕ አባት ስ.ቁ"
                  variant="standard"
                  value={values.churchFatherPhone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.churchFatherPhone && touched.churchFatherPhone && (
                  <p className="errors-right">{errors.churchFatherPhone}</p>
                )}
                <Field
                  as={TextField}
                  className="personal-info-input"
                  name="address"
                  label="የመኖሪያ አድራሻ"
                  variant="standard"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.address && touched.address && (
                  <p className="errors">{errors.address}</p>
                )}
                <FormControl className="formcontrol">
                  <InputLabel>የቤተክርስቲያን አገልግሎት</InputLabel>
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
                <Field
                  as={TextField}
                  className="personal-info-input"
                  name="houseNumber"
                  label="የቤት ቁጥር"
                  variant="standard"
                  value={values.houseNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.houseNumber && touched.houseNumber && (
                  <p className="errors">{errors.houseNumber}</p>
                )}
                <FormControl className="formcontrol">
                  <InputLabel id="demo-simple-select-label">
                    የተከታተሉት የመንፈሳዊ ት/ት
                  </InputLabel>
                  <Select
                    value={cheducation}
                    label="cheducation"
                    onChange={cheducationChange}
                  >
                    {" "}
                    <MenuItem value={0}>አልተከታተልኩም</MenuItem>
                    <MenuItem value={1}>ቀዳማይ</MenuItem>
                    <MenuItem value={2}>ሳልሳይ</MenuItem>
                    <MenuItem value={3}>ካልዓይ</MenuItem>
                    <MenuItem value={4}>ራብዓይ</MenuItem>
                  </Select>
                </FormControl>
                <Field
                  as={TextField}
                  className="personal-info-input"
                  name="phone1"
                  label="የሞባይል ስልክ ቁጥር "
                  variant="standard"
                  value={values.phone1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone1 && touched.phone1 && (
                  <p className="errors">{errors.phone1}</p>
                )}
                <FormControl className="formcontrol">
                  <InputLabel id="demo-simple-select-label">
                    በሌላ ሰ/ት/ቤት ያገለገሉበት ዘርፍ?
                  </InputLabel>
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
                <Field
                  as={TextField}
                  className="personal-info-input"
                  name="phone2"
                  label="ተጨማሪ ስልክ ቁጥር "
                  variant="standard"
                  value={values.phone1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone1 && touched.phone1 && (
                  <p className="errors">{errors.phone1}</p>
                )}
                <Field
                  as={TextField}
                  className="personal-info-input"
                  name="email"
                  label="ኢሜይል"
                  variant="standard"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <p className="errors-right">{errors.email}</p>
                )}
                <FormControl className="formcontrol">
                  <InputLabel id="demo-simple-select-label">
                    የት/ት ደረጃ
                  </InputLabel>
                  <Select
                    value={education}
                    label="education"
                    onChange={educationChange}
                  >
                    <MenuItem value={4}>ዲፕሎማ</MenuItem>
                    <MenuItem value={4}>መሰናዶ</MenuItem>
                    <MenuItem value={5}>2ኛ ደርጃ</MenuItem>
                    <MenuItem value={6}>1ኛ ደርጃ</MenuItem>
                  </Select>
                </FormControl>
                <Field
                  as={TextField}
                  className="personal-info-input"
                  name="educationName"
                  label="የትምህርት ቤቱ ስም"
                  variant="standard"
                  value={values.educationName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.educationName && touched.educationName && (
                  <p className="errors-right">{errors.educationName}</p>
                )}
                <Field
                  as={TextField}
                  className="family-unique"
                  name="family"
                  fullWidth
                  multiline
                  rows={4}
                  label="የቤተሰብ አባላት ከስልክ ቁጥር ጋር"
                  value={values.family}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.family && touched.family && (
                  <p className="errors-right">{errors.family}</p>
                )}
              </Form>
            </Formik>
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
              label="የተጠሪ ስም"
              required
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

            <hr />
            <Typography variant="h5"> የመዝግብ መረጃ </Typography>
            <TextField
              className="personal-info-input"
              name="classrepName"
              label="የክፍሉ ተጠሪ ስም"
              variant="standard"
            />
            <DatePicker label="የተመዘገቡበት ቀን" />

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
      </form>
    </div>
  );
}

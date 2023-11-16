import React, { useState } from "react";
import "./styles.css";
import { Typography, Box, Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import ProfilePictureUploader from "../ProfilePicture/ProfilePictureUploader";
import InputMask from "react-input-mask";
import { useFormik } from "formik";

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

  function useInput(initialValue) {
    const [state, setState] = useState(initialValue);
    const handleChange = (event) => {
      setState(event.target.value);
    };
    return [state, handleChange];
  }
  const [sex, handleChange] = useInput("");
  const [marriage, marriageChange] = useInput("");
  const [education, educationChange] = useInput("");
  const [cheducation, cheducationChange] = useInput("");
  const [churchContrbution, churchContrbutionChange] = useInput("");
  const [otherchurch, otherchurchChange] = useInput("");

  return (
    <div className="title">
      <Typography variant="h4">የወጣቶች አባላት ቅጽ መሙያ</Typography>

      <form id="wetatoch-form">
        <div className="personal-info">
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
            }}
          >
            <Typography variant="h5">ግላዊ መረጃ</Typography>
            <ProfilePictureUploader />
            <TextField
              className="personal-info-input"
              id="fullName"
              name="fullName"
              label="ሙሉ ስም"
              required
              variant="standard"
              helperText="የሙሉ ስም ያስገቡ"
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />
            <DatePicker label="የትውልድ ዘመን፡" />

            <FormControl className="formcontrol">
              <InputLabel id="sex">ፆታ</InputLabel>
              <Select
                value={formik.values.sex || ""}
                label="sex"
                onChange={formik.handleChange}
              >
                <MenuItem value={10}>ወንድ</MenuItem>
                <MenuItem value={20}>ሴት</MenuItem>
              </Select>
            </FormControl>

            <TextField
              className="personal-info-input"
              name="address"
              label="የመኖሪያ አድራሻ"
              variant="standard"
              required
              value={formik.values.address}
              onChange={formik.handleChange}
            />

            <TextField
              className="personal-info-input"
              name="houseNumber"
              label="የቤት ቁጥር"
              variant="standard"
              required
              value={formik.values.houseNumber}
              onChange={formik.handleChange}
            />
            <TextField
              className="personal-info-input"
              name="phone1"
              label="የሞባይል ስልክ ቁጥር "
              variant="standard"
              required
              value={formik.values.phone1}
              onChange={formik.handleChange}
              InputProps={{
                inputComponent: PhoneInput,
              }}
            />
            <TextField
              className="personal-info-input"
              name="phone2"
              label="ተጨማሪ ስልክ ቁጥር "
              variant="standard"
              required
              value={formik.values.phone2}
              onChange={formik.handleChange}
              InputProps={{
                inputComponent: PhoneInput,
              }}
            />
            <TextField
              className="personal-info-input"
              name="email"
              label="ኢሜይል"
              variant="standard"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <FormControl className="formcontrol">
              <InputLabel id="demo-simple-select-label">የትዳር ሁኔታ</InputLabel>
              <Select
                label="marriage"
                // onChange={marriageChange}
                required
                value={formik.values.marriage}
                onChange={formik.handleChange}
              >
                <MenuItem value={10}>ያገባ</MenuItem>
                <MenuItem value={20}>ያላገባ</MenuItem>
              </Select>
            </FormControl>
            <TextField
              className="personal-info-input"
              name="occupation"
              label="የሥራ ሁኔታ"
              variant="standard"
              required
              value={formik.values.occupation}
              onChange={formik.handleChange}
            />
            <FormControl className="formcontrol">
              <InputLabel id="demo-simple-select-label">የት/ት ደረጃ</InputLabel>
              <Select
                label="education"
                required
                value={formik.values.education}
                onChange={formik.handleChange}
                // onChange={educationChange}
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
              name="workPlace"
              label="የተሰማሩበት የሥራ ዘርፍ"
              variant="standard"
              required
              value={formik.values.workPlace}
              onChange={formik.handleChange}
            />
            <TextField
              className="personal-info-input"
              name="telegramUsername"
              label="የቴሌግራም ዩዘር ስም"
              variant="standard"
              required
              value={formik.values.telegramUsername}
              onChange={formik.handleChange}
            />

            <TextField
              className="family"
              name="family"
              fullWidth
              multiline
              rows={4}
              required
              value={formik.values.family}
              onChange={formik.handleChange}
              label="የቤተሰብ አባላት ከስልክ ቁጥር ጋር"
            />
          </Box>
        </div>

        <div className="church-info">
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
            }}
          >
            <Typography variant="h5">ምንፈሳዊ መረጃ</Typography>
            <TextField
              className="personal-info-input"
              name="churchName"
              required
              label="የክርስትና ስም"
              variant="standard"
              value={formik.values.churchName}
              onChange={formik.handleChange}
            />

            <FormControl className="formcontrol">
              <InputLabel>የቤተክርስቲያን አገልግሎት</InputLabel>
              <Select
                label="churchContrbution"
                required
                // onChange={churchContrbutionChange}
                value={formik.values.churchContrbution}
                onChange={formik.handleChange}
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
              name="churchFatherName"
              label="የንስሐ አባት ስም"
              variant="standard"
              required
              value={formik.values.churchFatherName}
              onChange={formik.handleChange}
            />

            <FormControl className="formcontrol">
              <InputLabel id="demo-simple-select-label">
                የተከታተሉት የመንፈሳዊ ት/ት
              </InputLabel>
              <Select
                label="cheducation"
                required
                // onChange={cheducationChange}
                value={formik.values.cheducation}
                onChange={formik.handleChange}
              >
                <MenuItem value={1}>ቀዳማይ</MenuItem>
                <MenuItem value={2}>ሳልሳይ</MenuItem>
                <MenuItem value={3}>ካልዓይ</MenuItem>
                <MenuItem value={4}>ራብዓይ</MenuItem>
              </Select>
            </FormControl>

            <TextField
              className="personal-info-input"
              name="churchFatherPhone"
              label="የንስሕ አባት ስ.ቁ"
              variant="standard"
              required
              value={formik.values.churchFatherPhone}
              onChange={formik.handleChange}
              InputProps={{
                inputComponent: PhoneInput,
              }}
            />
            <FormControl className="formcontrol">
              <InputLabel id="demo-simple-select-label">
                በሌላ ሰ/ት/ቤት ያገለገሉበት ዘርፍ?
              </InputLabel>
              <Select
                label="otherchurch"
                required
                value={formik.values.otherchurch}
                onChange={formik.handleChange}
                // onChange={otherchurchChange}
              >
                <MenuItem value={1}>አገልግዬ አላውቅም</MenuItem>
                <MenuItem value={2}>በአመራር</MenuItem>
                <MenuItem value={3}>በክህነት</MenuItem>
                <MenuItem value={4}>በአባልነት</MenuItem>
              </Select>
            </FormControl>

            <hr />
            <Typography variant="h5">የመዝግብ መረጃ</Typography>

            <TextField
              className="personal-info-input"
              name="classrepName"
              label="የክፍሉ ተጠሪ ስም"
              variant="standard"
              required
              value={formik.values.classrepName}
              onChange={formik.handleChange}
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

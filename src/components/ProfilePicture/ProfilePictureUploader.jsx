import { Button } from "@mui/material";
import defaultpic from "./../../Assets/Images/default.jpg";
import { useState } from "react";

const ProfilePictureUploader = ({ section, onImageSelected }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

  if (onImageSelected){
    onImageSelected(file);
  };
  
  };


  const handleButtonClick = () => {
    document.getElementById(`fileInput-${section}`).click();
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>ምስል ይምረጡ</Button>
      <input
        type="file"
        id={`fileInput-${section}`}
        style={{ display: "none" }}
        onChange={handleFileChange}
        onInput={handleFileChange}
      />
      {selectedFile ? (
        <img
          src={URL.createObjectURL(selectedFile)}
          alt=""
          style={{ width: 200, height: 200 }}
        />
      ) : (
        <img src={defaultpic} alt="" style={{ width: 200, height: 200 }} />
      )}
    </div>
  );
};

export default ProfilePictureUploader;

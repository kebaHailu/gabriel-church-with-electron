import React, { useState } from 'react';
import defaultpic from './../../Assets/Images/default.jpg'
import { Button } from '@mui/material';

const ProfilePictureUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handlebuttonClick = (event) => {
    document.getElementById("fileInput").click();
  }

  return (
    <div>
      
      <Button onClick={handlebuttonClick}>ምስል ይምረጡ</Button>
       
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
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
        <img
          src={defaultpic}
          alt=""
          style={{ width: 200, height: 200 }}
        />
      )}
    </div>
  );
};

export default ProfilePictureUploader;
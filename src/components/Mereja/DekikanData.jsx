import React, {useEffect,useState,useMemo} from 'react'
import IconButton from '@mui/material/IconButton';
import {InputLabel,MenuItem, FormControl,Select } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import DBHandler from '../Storage/PouchDBComponent';
import "./Mereja.css"


function DekikanData({type}) {
    const [data,setData]= useState([]);
    const database = useMemo(() => {
      return new DBHandler("Dekikan");
    }, []);
    function datafilter(type, data){
      if(type === 'm'){
        return data.filter(function(dt) {
          return dt.doc.churchService === 'መዝሙር ክፍል';
        });
      }
      if(type === 'k'){
        return data.filter(function(dt) {
          return dt.doc.churchService === 'ኪነ ጥበብ';
        });
      }
      if(type === 's'){
        return data.filter(function(dt) {
          return dt.doc.churchService === 'ምግባረ ሰናይ';
        });
      }
      return data;

    }

    
  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedData = await database.allData();
        fetchedData = datafilter(type, fetchedData);
        
        setData(fetchedData || []);

      }
      catch(error){
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [database,type]);

  const handleDelete = async (id) => {
    var enteredName = prompt("ይህን መረጃ ለመደምሰስ እርግጠኛ ከሆኑ የተማሪውን ሙሉ ስም ያስገቡ !");
    try {
      const document = await database.get(id);
      if (enteredName === document.fullName) {
        await database.delete(id);
        let fetchedData = await database.allData();
        fetchedData = datafilter(type, fetchedData);
        setData(fetchedData || []);
      } else {
        alert("ስም አልተመዘገበም ወይም በትክክል አልገባም ፡ እባኮትን እንደገና በማስተካከል ይሞክሩ።");
      }
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const handleService = async (id, event) => {
    const selectedValue = event.target.value;
    try {
      const document = await database.get(id);
      document.churchService = selectedValue;
      await database.update(document);
      let fetchedData = await database.allData();
      fetchedData = datafilter(type, fetchedData);
      setData(fetchedData || []);

    }
    catch(error){
      console.error("Error updating document", error);
    }

  }
        return (
          <div className="row_posters">
                <span className='st'>የደቂቃን አባላት መረጃ</span><br/>
                <table>
                    <thead className="title-row">
                        <tr>
                            <th> ምስል </th>
                            <th className="s-2">ሙሉ ስም</th>
                            <th>የትውልድ ዝመን</th>
                            <th >የክርስትና ስም</th>
                            <th> ፆታ</th>
                            <th>የት/ት ደረጃ</th>
                            <th >የትምህርት ቤቱ ስም</th>
                            <th >የተጠሪ ምስል</th>
                            <th >የተጠሪ ሙሉ ስም</th>
                            <th >የተጠሪ የንስሃ አባት</th>
                            <th>የተጠሪ የክርስትና ስም</th>
                            <th>የተጠሪ የንሰሃ አባት ስ.ቁ</th>
                            <th >የተጠሪ የመኖሪያ አድሪሻ</th>
                            <th className='s-4'>የቤት ቁጥር</th>
                            <th className="s-3">ዋና ስልክ ቁጥር</th>
                            <th className="s-3">ተጨማሪ ስልክ ቁጥር</th>
                            <th className="s-1">ኢሜል</th>
                            <th className='s-4'>የተጠሪ የቤተሰብ ሃላፊነት</th>
                            <th>የተጠሪ የስራ ሁኔታ</th>
                            <th>የተጠሪ የስራ ቦታ</th>
                            <th>የክፍሉ ተጠሪ ስም</th>
                            <th>የተመዘገበበት ቀን</th>
                            <th className='s-2'>የአገልግሎት ክፍል</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr
                                key={row.doc._id}
                                className={index % 2 === 0 ? "row-even" : "row-odd"}
                            >
                                <td>{row.doc.ProfileImage ? <img src={URL.createObjectURL(row.doc.ProfileImage)} alt="Profile" style={{ width: 100, height: 100 }} /> : "N/A"}</td>
                                <td>{row.doc.fullName || "N/A"}</td>
                                <td>{row.doc.Birthdate || "N/A"}</td>
                                <td>{row.doc.churchName || "N/A"}</td>
                                <td>{row.doc.sex || "N/A"}</td>
                                <td>{row.doc.schoolcondition || "N/A"}</td>
                                <td>{row.doc.schoolname || "N/A"}</td>
                                <td>{row.doc.RespondentImage ? <img src={URL.createObjectURL(row.doc.RespondentImage)} alt="Respondent" style={{ width: 100, height: 100 }} /> : "N/A"}</td>
                                <td>{row.doc.respondantName || "N/A"}</td>
                                <td>{row.doc.churchFatherName || "N/A"}</td>
                                <td>{row.doc.RespondentchurchName || "N/A"}</td>
                                <td>{row.doc.churchFatherPhone || "N/A"}</td>
                                <td>{row.doc.address || "N/A"}</td>
                                <td>{row.doc.houseNumber || "N/A"}</td>
                                <td>{row.doc.phone1 || "N/A"}</td>
                                <td>{row.doc.phone2 || "N/A"}</td>
                                <td>{row.doc.email || "N/A"}</td>
                                <td>{row.doc.respondantFamilyResponse || "N/A"}</td>
                                <td>{row.doc.occupation || "N/A"}</td>
                                <td>{row.doc.workPlace || "N/A"}</td>
                                <td>{row.doc.classrepName || "N/A"}</td>
                                <td>{row.doc.registerdate || "N/A"}</td>
                                <td>
                                <FormControl style={{margin:0,padding:0, width:"90%" }}>
                                <InputLabel >የአገልግሎት ክፍል ቀይር</InputLabel>
                                <Select
                                  value = {row.doc.churchService || ""}
                                  name="churchService"
                                  label="የአገልግሎት ክፍል ቀይር"
                                  onChange={(event) => handleService(row.doc._id,event)}
                                >
                                  <MenuItem value={"ማስተባበሪያ"}>ማስተባበሪያ</MenuItem>
                                  <MenuItem value={"መዝሙር ክፍል"}>መዝሙር ክፍል</MenuItem>
                                  <MenuItem value={"ኪነ ጥበብ"}>ኪነ ጥበብ</MenuItem>
                                  <MenuItem value={"ምግባረ ሰናይ"}>ምግባረ ሰናይ</MenuItem>
                                </Select>
                              </FormControl>
                                </td>
                                
                                <td>
                                    <IconButton aria-label="delete" onClick={() => handleDelete(row.doc._id)}>
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
}

export default DekikanData;

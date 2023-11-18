import React, {useEffect,useState} from 'react'
import Button from "@mui/material/Button";
import { ButtonGroup } from '@mui/material';
import "./Mereja.css"
import DBHandler from '../Storage/PouchDBComponent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
function Mereja() {
  const [data,setData]= useState([]);
  const database = new DBHandler("Dekikan")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await database.allData();
        setData(fetchedData || []);

      }
      catch(error){
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await database.delete(id);
      const fetchedData = await database.allData();
      setData(fetchedData || []);
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };
  return (
    <div>
      <div className="Mereja">
        <ButtonGroup className="secondary titlebar" aria-label="button group">
          <Button>Frewoch</Button>
          <Button>wetatoch</Button>
          <Button>Makelawian</Button>
          <Button>Dekikan</Button>
        </ButtonGroup>
      </div>

      <div className="row_posters" style={{ fontSize: ".9em" }}>
        <table>
          <thead className="title-row">
            <tr>
              <th className="s-2">ሙሉ ስም</th>
              <th className="s-3">የክርስትና ስም</th>
              <th> ፆታ</th>
              <th>የት/ት ደረጃ</th>
              <th >የትምህርት ቤቱ ስም</th>
              <th>የክፍሉ ተጠሪ ስም</th>
              <th className='s-3'>የተጠሪ ሙሉ ስም</th>
              <th >Church Father Name</th>
              <th>Birthdate</th>
              <th>Respondent Church Name</th>
              <th>Church Father Phone</th>
              <th className="s-1">Address</th>
              <th className='s-4'>House Number</th>
              <th className="s-3">Phone 1</th>
              <th className="s-3">Phone 2</th>
              <th className="s-1">Email</th>
              <th className='s-4'>Respondent Family Response</th>
              <th>Occupation</th>
              <th>Work Place</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.doc._id}
                className={index % 2 === 0 ? "row-even" : "row-odd"}
              >
                <td>{row.doc.fullName || "N/A"}</td>
                <td>{row.doc.churchName || "N/A"}</td>
                <td>{row.doc.sex || "N/A"}</td>
                <td>{row.doc.schoolcondition || "N/A"}</td>
                <td>{row.doc.schoolname || "N/A"}</td>
                <td>{row.doc.classrepName || "N/A"}</td>
                <td>{row.doc.respondantName || "N/A"}</td>
                <td>{row.doc.churchFatherName || "N/A"}</td>
                <td>{row.doc.Birthdate || "N/A"}</td>
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
    </div>
  );
}

export default Mereja;
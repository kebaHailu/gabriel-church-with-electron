import React, {useEffect,useState} from 'react'
import Button from "@mui/material/Button";
import { ButtonGroup } from '@mui/material';
import "./Mereja.css"
import DBHandler from '../Storage/PouchDBComponent';
import { fontSize } from '@mui/system';
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

      <div className="tables" style={{ fontSize: ".9em" }}>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Church Name</th>
              <th>Sex</th>
              <th>School Condition</th>
              <th>School Name</th>
              <th>Class Representative Name</th>
              <th>Respondent Name</th>
              <th>Church Father Name</th>
              <th>Birthdate</th>
              <th>Respondent Church Name</th>
              <th>Church Father Phone</th>
              <th>Address</th>
              <th>House Number</th>
              <th>Phone 1</th>
              <th>Phone 2</th>
              <th>Email</th>
              <th>Respondent Family Response</th>
              <th>Occupation</th>
              <th>Work Place</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.doc._id}>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Mereja;
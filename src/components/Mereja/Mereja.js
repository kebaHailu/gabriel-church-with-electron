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
              <th className="longs">ሙሉ ስም</th>
              <th className="longs">የክርስትና ስም</th>
              <th> ፆታ</th>
              <th>የት/ት ደረጃ</th>
              <th className="longs">የትምህርት ቤቱ ስም</th>
              <th>የክፍሉ ተጠሪ ስም</th>
              <th>የተጠሪ ሙሉ ስም</th>
              <th className="longs">Church Father Name</th>
              <th>Birthdate</th>
              <th>Respondent Church Name</th>
              <th className="long">Church Father Phone</th>
              <th className="longs">Address</th>
              <th>House Number</th>
              <th className="long">Phone 1</th>
              <th className="long">Phone 2</th>
              <th className="longs">Email</th>
              <th className="long">Respondent Family Response</th>
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
                  <button
                    className="editors"
                    onClick={() => handleDelete(row.doc._id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button className="editors">Save</button>
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
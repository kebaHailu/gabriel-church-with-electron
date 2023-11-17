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
        console.log(fetchedData)
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

      <div className="row_posters" style={{ fontSize: ".9em" }}>
        <table>
          <thead className="title-row">
            <tr>
              <th className="longs">FullName</th>
              <th className="longs">ChurchName</th>
              <th>Sex</th>
              <th>SchoolCondition</th>
              <th className="longs">SchoolName</th>
              <th>ClassRepresentativeName</th>
              <th>RespondentName</th>
              <th className="longs">ChurchFatherName</th>
              <th>Birthdate</th>
              <th>RespondentChurchName</th>
              <th className="long">ChurchFatherPhone</th>
              <th className="longs">Address</th>
              <th>HouseNumber</th>
              <th className="long">Phone1</th>
              <th className="long">Phone2</th>
              <th className="longs">Email</th>
              <th className="long">RespondentFamilyResponse</th>
              <th>Occupation</th>
              <th>WorkPlace</th>
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
                  <button className="editors">Delete</button>
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
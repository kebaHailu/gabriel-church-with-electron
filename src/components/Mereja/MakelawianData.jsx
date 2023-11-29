import React, {useEffect,useState} from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DBHandler from '../Storage/PouchDBComponent';
import "./Mereja.css"


function MakelawianData() {
    const [data,setData]= useState([]);
  const database = new DBHandler("Makelawian")
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
          <div className="row_posters">
            <span className="st">የማእከላዊያን አባላት መረጃ</span>
            <table>
              <thead className="title-row">
                <tr>
                  <th> ምስል </th>
                  <th className="s-2">ሙሉ ስም</th>
                  <th>የትውልድ ዝመን</th>
                  <th className="s-3">የክርስትና ስም</th>
                  <th> ፆታ</th>
                  <th className="s-3">የንስሐ አባት ስም</th>
                  <th>የንስሐ አባት ስ.ቁ</th>
                  <th className="s-3">የመኖሪያ አድሪሻ</th>
                  <th>የቤተክርስቲያን አገልግሎት</th>
                  <th className="s-4">የቤት ቁጥር</th>
                  <th>የተከታተሉት የመንፈሳዊ ት/ት</th>
                  <th className="s-3">ዋና ስልክ ቁጥር</th>
                  <th className="s-3">ተጨማሪ ስልክ ቁጥር</th>
                  <th className="s-1">ኢሜል</th>
                  <th className="s-4">በሌላ ሰ/ት/ቤት ያገለገሉበት ዘርፍ</th>
                  <th>የት/ት ደረጃ</th>
                  <th>የትምህርት ቤቱ ስም</th>
                  <th>የቤተሰብ አባላት ከስልክ ቁጥር ጋር</th>
                  <th>የተጠሪ ምስል</th>
                  <th className="s-3">የተጠሪ ስም</th>
                  <th>የተጠሪ የቤተሰብ ሃላፊነት</th>
                  <th>የተጠሪ የሥራ ሁኔታ</th>
                  <th>ተጠሪ የተሰማሩበት የሥራ ዘርፍ</th>
                  <th className="s-3">የክፍሉ ተጠሪ ስም</th>
                  <th>የተመዘገበበት ቀን</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr
                    key={row.doc._id}
                    className={index % 2 === 0 ? "row-even" : "row-odd"}
                  >
                    <td>
                      {row.doc.ProfileImage ? (
                        <img
                          src={URL.createObjectURL(row.doc.ProfileImage)}
                          alt="Profile"
                          style={{ width: 100, height: 100 }}
                        />
                      ) : (
                        "N/A"
                      )}
                    </td>
                    <td>{row.doc.fullName || "N/A"}</td>
                    <td>{row.doc.Birthdate || "N/A"}</td>
                    <td>{row.doc.churchName || "N/A"}</td>
                    <td>{row.doc.sex || "N/A"}</td>
                    <td>{row.doc.churchFatherName || "N/A"}</td>
                    <td>{row.doc.churchFatherPhone || "N/A"}</td>
                    <td>{row.doc.address || "N/A"}</td>
                    <td>{row.doc.churchContrbution || "N/A"}</td>
                    <td>{row.doc.houseNumber || "N/A"}</td>
                    <td>{row.doc.cheducation || "N/A"}</td>
                    <td>{row.doc.phone1 || "N/A"}</td>
                    <td>{row.doc.phone2 || "N/A"}</td>
                    <td>{row.doc.email || "N/A"}</td>
                    <td>{row.doc.otherchurch || "N/A"}</td>
                    <td>{row.doc.schoolcondition || "N/A"}</td>
                    <td>{row.doc.schoolname || "N/A"}</td>
                    <td>{row.doc.family || "N/A"}</td>
                    <td>
                      {row.doc.RespondentImage ? (
                        <img
                          src={URL.createObjectURL(row.doc.RespondentImage)}
                          alt="Respondent"
                          style={{ width: 100, height: 100 }}
                        />
                      ) : (
                        "N/A"
                      )}
                    </td>
                    <td>{row.doc.respondantName || "N/A"}</td>
                    <td>{row.doc.respondantFamilyResponse || "N/A"}</td>
                    <td>{row.doc.occupation || "N/A"}</td>
                    <td>{row.doc.workPlace || "N/A"}</td>
                    <td>{row.doc.classrepName || "N/A"}</td>
                    <td>{row.doc.registerDate || "N/A"}</td>

                    <td>
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleDelete(row.doc._id)}
                      >
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

export default MakelawianData;

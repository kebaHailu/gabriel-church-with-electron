import React, {useEffect,useState} from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DBHandler from '../Storage/PouchDBComponent';
import "./Mereja.css"


function WetatochData() {
    const [data,setData]= useState([]);
  const database = new DBHandler("Wetatoch")
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
                  <span className='st'>የወጣቶች አባላት መረጃ</span>
                <table>
                    <thead className="title-row">
                        <tr>
                            <th className="s-2">ሙሉ ስም</th>
                            <th>የትውልድ ዝመን</th>
                            <th >የክርስትና ስም</th>
                            <th> ፆታ</th>
                            <th >የመኖሪያ አድሪሻ</th>
                            <th className='s-4'>የቤት ቁጥር</th>
                            <th className="s-3">ዋና ስልክ ቁጥር</th>
                            <th className="s-3">ተጨማሪ ስልክ ቁጥር</th>
                            <th className="s-1">ኢሜል</th>
                            <th>የትዳር ሁኔታ</th>
                            <th>የስራ ሁኔታ</th>
                            <th>የት/ት ደረጃ</th>
                            <th>የተሰማሩበት የስራ ዘርፍ</th>
                            <th >የቴሌግራም  ስም</th>
                            <th >የቤተሰብ አባላት ከስልክ ቁጥር ጋር</th>
                            <th >የቤተክርስቲያን አገልግሎት</th>
                            <th >የንስሐ አባት ስም</th>
                            <th>የንስሐ አባት ስ.ቁ</th>
                            <th>የተከታተሉት የመንፈሳዊ ት/ት</th>
                            <th className='s-4'>በሌላ ሰ/ት/ቤት ያገለገሉበት ዘርፍ</th>
                            <th>የክፍሉ ተጠሪ ስም</th>
                            <th>የተመዘገበበት ቀን</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr
                                key={row.doc._id}
                                className={index % 2 === 0 ? "row-even" : "row-odd"}
                            >
                                <td>{row.doc.fullName || "N/A"}</td>
                                <td>{row.doc.Birthdate || "N/A"}</td>
                                <td>{row.doc.churchName || "N/A"}</td>
                                <td>{row.doc.sex || "N/A"}</td>
                                <td>{row.doc.address || "N/A"}</td>
                                <td>{row.doc.houseNumber || "N/A"}</td>
                                <td>{row.doc.phone1 || "N/A"}</td>
                                <td>{row.doc.phone2 || "N/A"}</td>
                                <td>{row.doc.email || "N/A"}</td>
                                <td>{row.doc.marriage || "N/A"}</td>
                                <td>{row.doc.occupation || "N/A"}</td>
                                <td>{row.doc.education || "N/A"}</td>
                                <td>{row.doc.workPlace || "N/A"}</td>
                                <td>{row.doc.telegramUsername || "N/A"}</td>
                                <td>{row.doc.family || "N/A"}</td>
                                <td>{row.doc.churchContrbution || "N/A"}</td>
                                <td>{row.doc.churchFatherName || "N/A"}</td>
                                <td>{row.doc.churchFatherPhone || "N/A"}</td>
                                <td>{row.doc.cheducation || "N/A"}</td>
                                <td>{row.doc.otherchurch || "N/A"}</td>
                                <td>{row.doc.classrepName || "N/A"}</td>
                                <td>{row.doc.registerdate || "N/A"}</td>


                               

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

export default WetatochData;

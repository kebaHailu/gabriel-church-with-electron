import React, { useState, useEffect } from "react";
import "./Statistics.css";
import Chart from "react-apexcharts";
import DBHandler from "../Storage/PouchDBComponent.jsx";

const DekikanSt = () => {
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);

  const [alteketatelkum, setAlteketatelkum] = useState(0);
  const [secondary, setSecondary] = useState(0);
  const [primary, setPrimary] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dekikan_db = new DBHandler("Dekikan");
        const dekikan = await dekikan_db.allData();
        let maleCount = 0;
        let femaleCount = 0;

        dekikan.forEach((data) => {
          if (data.doc.sex === "ወንድ") {
            maleCount += 1;
          } else {
            femaleCount += 1;
          }
        });

        setMaleCount(maleCount);
        setFemaleCount(femaleCount);

        let alteketatelkum = 0;

        let secondary = 0;
        let primary = 0;

        dekikan.forEach((data) => {
          if (data.doc.schoolcondition === "አልተከታተልኩም") {
            alteketatelkum += 1;
          } else if (data.doc.schoolcondition === "2ኛ ደርጃ") {
            secondary += 1;
          } else if (data.doc.schoolcondition === "1ኛ ደርጃ") {
            primary += 1;
          }
        });

        setAlteketatelkum(alteketatelkum);
        setSecondary(secondary);
        setPrimary(primary);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const Dekikan = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Male", "Female"],
      },
    },
    series: [
      {
        name: "Gender CLASSIFICATION",
        data: [maleCount, femaleCount],
      },
    ],
  };

  const DekikanEducation = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["alteketatelkum", "secondary", "primary"],
      },
    },
    series: [
      {
        name: "Education",
        data: [alteketatelkum, secondary, primary],
      },
    ],
  };

  return (
    <>
      <h1>
        Dekikan Statistics Chart <i className="fas fa-user"></i>{" "}
      </h1>

      <div className="chartsone">
        <div>
          <Chart
            options={Dekikan.options}
            series={Dekikan.series}
            type="bar"
            width="450"
          />
          <br />
          <sapan>{Dekikan.series[0].name}</sapan>
        </div>
        <div>
          <Chart
            options={DekikanEducation.options}
            series={DekikanEducation.series}
            type="area"
            width="450"
          />
          <p>{DekikanEducation.series[0].name}</p>
        </div>
      </div>
    </>
  );
};

export default DekikanSt;

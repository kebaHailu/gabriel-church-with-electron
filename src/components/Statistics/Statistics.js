import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import DBHandler from "../Storage/PouchDBComponent.jsx";

const Statistics = () => {
  const [state, setState] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["male", "female"],
      },
    },
    series: [
      {
        name: "Gender Statics",
        data: [0, 0], // Initialize with default data
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = new DBHandler("your-db-name"); // Replace with your actual database name
        const allData = await db.allData();
        const maleData = allData.filter(
          (data) => data.doc.sex === "male"
        ).length;
        const femaleData = allData.filter(
          (data) => data.doc.sex === "female"
        ).length;

        setState((prevState) => ({
          ...prevState,
          series: [
            {
              ...prevState.series[0],
              data: [maleData, femaleData],
            },
          ],
        }));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // No need to destroy ApexCharts instance explicitly
    };
  }, []);

  if (!state.options || !state.series) {
    return null;
  }

  return (
    <div className="App">
      <h1>
        studnets info chart <i className="fas fa-user"></i>{" "}
      </h1>
      <div className="row">
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="450"
          />
        </div>
        {/* Add other chart components here */}
      </div>
    </div>
  );
};

export default Statistics;

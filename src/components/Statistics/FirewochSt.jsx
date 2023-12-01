import React, { useState, useEffect } from "react";
import "./Statistics.css";
import Chart from "react-apexcharts";
import DBHandler from "../Storage/PouchDBComponent.jsx";

const FirewochSt = () => {
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [kebero, setKebero] = useState(0);
  const [zema, setZema] = useState(0);
  const [zemare, setZemare] = useState(0);
  const [dirst, setDirst] = useState(0);
  const [kihinet, setKhinet] = useState(0);

  const [kedamayi, setKedamayi] = useState(0);
  const [salsai, setSalsai] = useState(0);
  const [kaliay, setKaliay] = useState(0);
  const [rabiay, setRabiay] = useState(0);

  const [amerar, setAmerar] = useState(0);
  const [bekihnet, setBekihnet] = useState(0);
  const [abalenet, setAbalenet] = useState(0);
  const [alawkm, setAlawkm] = useState(0);

  const [dekikanCount, setDekikanCount] = useState(0);
  const [frewochCount, setFrewochCount] = useState(0);
  const [makelawianCount, setMakelawianCount] = useState(0);
  const [wetatochCount, setWetatochCount] = useState(0);
  const [phd, setPhd] = useState(0);
  const [masters, setMasters] = useState(0);
  const [degree, setDegree] = useState(0);
  const [diploma, setDiploma] = useState(0);
  const [secondary, setSecondary] = useState(0);
  const [primary, setPrimary] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dekikan_db = new DBHandler("Dekikan");
        const frewoch_db = new DBHandler("Frewoch");
        const makelawian_db = new DBHandler("Makelawian");
        const wetatoch_db = new DBHandler("Wetatoch");

        const dekikan = await dekikan_db.allData();
        const frewoch = await frewoch_db.allData();
        console.log(frewoch);
        const makelawian = await makelawian_db.allData();
        const wetatoch = await wetatoch_db.allData();

        setDekikanCount(dekikan.length);
        setFrewochCount(frewoch.length);
        setMakelawianCount(makelawian.length);
        setWetatochCount(wetatoch.length);

        let maleCount = 0;
        let femaleCount = 0;

        frewoch.forEach((data) => {
          if (data.doc.sex === "ወንድ") {
            maleCount += 1;
          } else {
            femaleCount += 1;
          }
        });

        setMaleCount(maleCount);
        setFemaleCount(femaleCount);

        let kebero = 0;
        let zema = 0;
        let kihinet = 0;
        let zemare = 0;
        let dirst = 0;

        frewoch.forEach((data) => {
          if (data.doc.churchContrbution === "ዜማ መድረስ") {
            zema += 1;
          } else if (data.doc.churchContrbution === "ሥነጽሁፍ ድርሰት") {
            dirst += 1;
          } else if (data.doc.churchContrbution === "ከበሮ መምታት") {
            kebero += 1;
          } else if (data.doc.churchContrbution === "በክህነት") {
            kihinet += 1;
          } else if (data.doc.churchContrbution === "የዝማሬ መሣሪያዎች ችሎታ") {
            zemare += 1;
          }
        });

        setKebero(kebero);
        setZema(zema);
        setKhinet(kihinet);
        setZemare(zemare);
        setDirst(dirst);

        let kedamayi = 0;
        let salsai = 0;
        let kaliay = 0;
        let rabiay = 0;

        frewoch.forEach((data) => {
          if (data.doc.cheducation === "ቀዳማይ") {
            kedamayi += 1;
          } else if (data.doc.cheducation === "ሳልሳይ") {
            salsai += 1;
          } else if (data.doc.cheducation === "ካልዓይ") {
            kaliay += 1;
          } else if (data.doc.cheducation === "ራብዓይ") {
            rabiay += 1;
          }
        });

        setKedamayi(kedamayi);
        setSalsai(salsai);
        setKaliay(kaliay);
        setRabiay(rabiay);

        let amerar = 0;
        let bekihnet = 0;
        let abalenet = 0;
        let alawkm = 0;

        frewoch.forEach((data) => {
          if (data.doc.otherchurch === "አገልግዬ አላውቅም") {
            alawkm += 1;
          } else if (data.doc.otherchurch === "በአመራር") {
            amerar += 1;
          } else if (data.doc.otherchurch === "በክህነት") {
            bekihnet += 1;
          } else if (data.doc.otherchurch === "በአባልነት") {
            abalenet += 1;
          }
        });

        setAmerar(amerar);
        setBekihnet(bekihnet);
        setAbalenet(abalenet);
        setAlawkm(alawkm);

        let diploma = 0;
        let degree = 0;
        let secondary = 0;
        let primary = 0;
        let phd = 0;
        let masters = 0;

        frewoch.forEach((data) => {
          if (data.doc.education === "ዲፕሎማ") {
            diploma += 1;
          } else if (data.doc.education === "ዲግሪ") {
            degree += 1;
          } else if (data.doc.education === "2ኛ ደርጃ") {
            secondary += 1;
          } else if (data.doc.education === "1ኛ ደርጃ") {
            primary += 1;
          } else if (data.doc.education === "ፒኤችዲ") {
            phd += 1;
          } else if (data.doc.education === "ማስተርስ") {
            masters += 1;
          }
        });

        setDiploma(diploma);
        setDegree(degree);
        setMasters(masters);
        setPhd(phd);
        setSecondary(secondary);
        setPrimary(primary);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const state = {
    options: {
      
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["ደቂቃን", "ፍሬዎች", "ማዕከላውያን", "ወጣቶች"],
      },
    },
    series: [
      {
        name: "የተማሪዎች ክፍል ንጻሬ",
        data: [dekikanCount, frewochCount, makelawianCount, wetatochCount],
      },
    ],
  };

  const firewoch = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["ወንድ", "ሴት"],
      },
    },
    series: [
      {
        name: "የፍሬ አባላት ጾታ",
        data: [maleCount, femaleCount],
      },
    ],
  };
  const firewochChurchCotribution = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["ዜማ መድረስ", "ሥነጽሁፍ ድርሰት", "ከበሮ መምታት", "በክህነት", "የዝማሬ መሣሪያዎች"],
      },
    },
    series: [
      {
        name: "የቤተክርስቲያን አገልግሎት",
        data: [zema, dirst, kebero, kihinet, zemare],
      },
    ],
  };

  const firewochChEducation = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["ቀዳማይ", "ሳልሳይ", "ካልዓይ", "ራብዓይ"],
      },
    },
    series: [
      {
        name: "የተከታተሉት የመንፈሳዊ ት/ት ",
        data: [kedamayi, salsai, kaliay, rabiay],
      },
    ],
  };

  const firewochotherchurch = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["በአመራር", "በክህነት", "በአባልነት", "አገልግዬ አላውቅም"],
      },
    },
    series: [
      {
        name: "በሌላ ሰ/ት/ቤት ያገለገሉበት ዘርፍ",
        data: [amerar, bekihnet, abalenet, alawkm],
      },
    ],
  };
  const firewochEducation = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "ፒኤችዲ",
          "ማስተርስ",
          "ዲግሪ",
          "ዲፕሎማ",
          "2ኛ ደርጃ",
          "1ኛ ደርጃ",
        ],
      },
    },
    series: [
      {
        name: "የት/ት ደረጃ",
        data: [phd, masters, degree, diploma, secondary, primary],
      },
    ],
  };

  return (
    <>
      
      
      <Chart
        className="chart"
        options={state.options}
        series={state.series}
        type="bar"
      />
      <p>{state.series[0].name}</p>
        <h3 style={{marginTop:30 , marginBottom:10}}>
        የፍሬ አባላት ስታትስቲክስ 
      </h3>
      <div className="chartsone">
        <div>
          <Chart
            options={firewoch.options}
            series={firewoch.series}
            type="bar"
            width="450"
          />
          <br />
          <sapan>{firewoch.series[0].name}</sapan>
        </div>
        <div>
          <Chart
            options={firewochChurchCotribution.options}
            series={firewochChurchCotribution.series}
            type="bar"
            width="450"
          />
          <br />
          <span>{firewochChurchCotribution.series[0].name}</span>
        </div>
      </div>
      <div className="chartsone">
        <div>
          <Chart
            options={firewochChEducation.options}
            series={firewochChEducation.series}
            type="bar"
            width="450"
          />
          <p>{firewochChEducation.series[0].name}</p>
        </div>
        <div>
          <Chart
            options={firewochotherchurch.options}
            series={firewochotherchurch.series}
            type="bar"
            width="450"
          />
          <p>{firewochotherchurch.series[0].name}</p>
        </div>
      </div>
      <div className="chartstwo">
        <Chart
          options={firewochEducation.options}
          series={firewochEducation.series}
          type="bar"
          width="600"
        />
        <p>{firewochEducation.series[0].name}</p>
      </div>
    </>
  );
};

export default FirewochSt;

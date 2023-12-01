import React, { useState, useEffect } from "react";
import "./Statistics.css";
import Chart from "react-apexcharts";
import DBHandler from "../Storage/PouchDBComponent.jsx";

const MeakelawianSt = () => {
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
  const [alteketatelkum, setAlteketatelkum] = useState();

  const [amerar, setAmerar] = useState(0);
  const [bekihnet, setBekihnet] = useState(0);
  const [abalenet, setAbalenet] = useState(0);
  const [alawkm, setAlawkm] = useState(0);

  const [diploma, setDiploma] = useState(0);
  const [mesenado, setMesenado] = useState(0);
  const [secondary, setSecondary] = useState(0);
  const [primary, setPrimary] = useState(0);

  const [makelawianCount, setMakelawianCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const makelawian_db = new DBHandler("Makelawian");

        const makelawian = await makelawian_db.allData();
        console.log(makelawian);

        setMakelawianCount(makelawian.length);

        let maleCount = 0;
        let femaleCount = 0;

        makelawian.forEach((data) => {
          if (data.doc.sex === "ወንድ") {
            maleCount += 1;
          } else if (data.doc.sex === "ሴት") {
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

        makelawian.forEach((data) => {
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
        let alteketatelkum = 0;

        makelawian.forEach((data) => {
          if (data.doc.cheducation === "ቀዳማይ") {
            kedamayi += 1;
          } else if (data.doc.cheducation === "ሳልሳይ") {
            salsai += 1;
          } else if (data.doc.cheducation === "ካልዓይ") {
            kaliay += 1;
          } else if (data.doc.cheducation === "ራብዓይ") {
            rabiay += 1;
          } else if (data.doc.cheducation === "አልተከታተልኩም") {
            alteketatelkum += 1;
          }
        });

        setKedamayi(kedamayi);
        setSalsai(salsai);
        setKaliay(kaliay);
        setRabiay(rabiay);
        setAlteketatelkum(alteketatelkum);

        let amerar = 0;
        let bekihnet = 0;
        let abalenet = 0;
        let alawkm = 0;

        makelawian.forEach((data) => {
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
        let mesenado = 0;
        let secondary = 0;
        let primary = 0;

        makelawian.forEach((data) => {
          if (data.doc.schoolcondition === "ዲፕሎማ") {
            diploma += 1;
          } else if (data.doc.schoolcondition === "መሰናዶ") {
            mesenado += 1;
          } else if (data.doc.schoolcondition === "2ኛ ደርጃ") {
            secondary += 1;
          } else if (data.doc.schoolcondition === "1ኛ ደርጃ") {
            primary += 1;
          }
        });

        setDiploma(diploma);
        setMesenado(mesenado);
        setSecondary(secondary);
        setPrimary(primary);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const makelawian = {
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
        name: "የማዕከላውያን አባላት ጾታ",
        data: [maleCount, femaleCount],
      },
    ],
  };
  const makelawianChurchCotribution = {
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

  const makelawianChEducation = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "ቀዳማይ",
          "ሳልሳይ",
          "ካልዓይ",
          "ራብዓይ",
          "አልተከታተልኩም",
        ],
      },
    },
    series: [
      {
        name: "የተከታተሉት የመንፈሳዊ ት/ት",
        data: [kedamayi, salsai, kaliay, rabiay, alteketatelkum],
      },
    ],
  };

  const makelawianotherchurch = {
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

  const makelawianschoolcondition = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["ዲፕሎማ", "መሰናዶ", "2ኛ ደርጃ", "1ኛ ደርጃ"],
      },
    },
    series: [
      {
        name: "የት/ት ደረጃ",
        data: [diploma, mesenado, secondary, primary],
      },
    ],
  };

  return (
    <>
       <h3 style={{marginTop:30 , marginBottom:10}}>
        የማዕከላውያን አባላት ስታትስቲክስ 
      </h3>
      <div className="chartsone">
        <div>
          <Chart
            options={makelawian.options}
            series={makelawian.series}
            type="bar"
            width="450"
          />
          <br />
          <sapan>{makelawian.series[0].name}</sapan>
        </div>
        <div>
          <Chart
            options={makelawianChurchCotribution.options}
            series={makelawianChurchCotribution.series}
            type="bar"
            width="450"
          />
          <br />
          <span>{makelawianChurchCotribution.series[0].name}</span>
        </div>
      </div>
      <div className="chartsone">
        <div>
          <Chart
            options={makelawianChEducation.options}
            series={makelawianChEducation.series}
            type="bar"
            width="450"
          />
          <p>{makelawianChEducation.series[0].name}</p>
        </div>
        <div>
          <Chart
            options={makelawianotherchurch.options}
            series={makelawianotherchurch.series}
            type="bar"
            width="450"
          />
          <p>{makelawianotherchurch.series[0].name}</p>
        </div>
      </div>
      <div className="chartstwo">
        <Chart
          options={makelawianschoolcondition.options}
          series={makelawianschoolcondition.series}
          type="bar"
          width="600"
        />
        <div>{makelawianschoolcondition.series[0].name}</div>
      </div>
    </>
  );
};

export default MeakelawianSt;

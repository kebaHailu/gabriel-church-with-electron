import React, { useState } from "react";
import "./Home.css";

import logo from "../../Assets/Images/logo.png";
import firewoch from "../../Assets/Images/firewoch.jpg";
import wotatoch from "../../Assets/Images/wotat.jpeg";
import Meakelawian from "../../Assets/Images/meakel.jpg";
import dekikan from "../../Assets/Images/dekikan.jpg";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { TextField, Button, Grid } from "@mui/material";
import emailjs from "emailjs-com";
function Home() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    // Send the message via email
    emailjs
      .sendForm(
        "service_bb1993e",
        "template_2xpmqmj",
        e.target,
        "lr0D8GZvgrDtYZXYT"
      )
      .then((response) => {


        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  return (
    <>
      <div className="buttonList">
        <a href="#tarik">
          <button>የቤተክርስቲያኑ ታሪክ</button>
        </a>
        <a href="#atekakem">
          <button>የመተግበሪያው አጠቃቀም</button>
        </a>
        <a href="#asteyayet">
          <button>አስተያየት መስጫ</button>
        </a>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div id="tarik">
        <div className="firewoch">
          <div>
            <img src={firewoch} alt="" />
          </div>
          <div>
            <p >
              የቅዱስ ገብርኤል ታቦት ከጎንደር ክፍለ ሃገር መጥቶ እስከ ግንቦት 1/1945 ዓ.ም ድረስ በደባልነት
              በጌቴሴማኔ ማርያም ገዳም ይኖር ነበር። የከተማውም ህዝብ ስርዓተ አምልኮቱን ይፈፅም የነበረው በዚሁ ገዳም
              ነበር። በወቅቱ የነበሩት ታላላቅ የሀገር ሽማግሌዎች ተሰባስበው የገዳሙን አስተዳደር መምህር ገ/ሥላሴን
              በሰበታ ከተማ መሀል ላይ አንድ ቤተክርስቲያን ለመስራት ማሰባቸውንና ይህን ጥያቄ ለእቴጌ መነን
              እንዲያቀርቡላቸው ይጠይቃሉ። መምህሩም ለእቴጌ የቅዱስ ገብርኤል ፅላት ወጥቶ እንዲሰጣቸው ይጠይቋቸዋል።
              እቴጌም የቅ. ገብርኤል ፅላት ሓይለኛ ነው የማርያምን ቤት ለቆ ከወጣ ገዳሟን ያቀዘቅዝብኛል ቢሉም የህዝቡ
              ጥያቄ በመበርታቱ ሚያዝያ 26/1945 ዓ.ም የመጀመሪያ የስዕል ቤት እንዲሰራ ፈቀዱ። ነዋሪዎቹም
              ለአምልኮተ እግዚአብሔር ከነበራቸው ቀናኢነት ለስዕል ቤቱ መስሪያና ለቀብር ቦታ ማስፈፀሚያ ይሆን ዘንድ
              አቶ ተስፋዬ በቀለ እና አቶ ኃይሉ ዘርፉ ለቅ.ገብርኤል ቤ/ክ በፈቃደኝነት ይዞታቸውን  ጥር 1/1945
              ዓ.ም አስረክበዋል።
            </p>
          </div>
        </div>
        <div className="wotatoch">
          <div>
            <p>
              በግንቦት 1/1945 ዓ.ም ታቦተ ሕጉ በካህናት፣ በዲያቆናት፣ እንዲሁም በሕዝቡ ታጅቦ ከጌቴሴማኔ ቅድስት
              ማርያም አሁን ወዳለበት ስፍራ በተዘጋጀለት የማረፊያ ድንኳን ገብቷል። የመጀመሪያው መቃንንም በ12 ቀን
              በማጠናቀቅ ግንቦት 12/1945 ዓ.ም ወደ መቃኞ ቤቱ ገብቷል። ለ15 ዓመታት የቅዳሴ አገልግሎት በወር
              አንድ ጊዜ ይሰጥ ነበር። ከ1960 ዓ.ም በኋላ ግን በሳምንት አንድ ቀን በዕለተ ሰንበት እንዲቀደስ
              ተደርጓል። ህዳር 19/1969 ዓ.ም የጌቴሴማኔ ማርያምንና የቅዱስ ገብርኤልን በአንድነት የሚያስተዳድር
              13 ኮሚቴዎች የያዘ ሰበካ ወንጌል ተመሰረተ። በ1970 ዓ.ም ለሀብት ቁጥጥርና ለንብረት አስተዳደር
              እንዲያመች ሁለቱን ቤ/ክ በመለየት ከመምህር ገ/ሥላሴ ኃይሉ እጅ 738.35 ብር ወደ ቅ.ገብርኤል ቤ/ክ
              ገንዘብ ያዥ ገቢ አድርገዋል።
            </p>
          </div>
          <div>
            <img src={wotatoch} alt="" />
          </div>
        </div>
        <div className="firewoch c">
          <div>
            <img src={Meakelawian} alt="" />
          </div>
          <div>
            <p>
              አቶ ተክሌገ/ፃድቅ ፦የመጀመሪያው የደብሩ ሊቀመንበር ንዋያተ ቅዱሳት የሚቀመጡበት ግምጃ ቤት ስላልነበር
              ፈቃደኛ በሆኑ ግለሰቦች ቤት ይቀመጥ ነበር። የግምጃ ቤቱም ስራ ነሐሴ 7/1969 ዓ.ም በመጀመር ግንቦት
              1/1970 ዓ.ም አጠናቀዋል። ብፁዕ አቡነ መርሐ ክርስቶስ የኢ/ኦ/ተ/ቤ/ክ ዋና ፀሐፊ ቡራኬ ሰጥተዋል።
              አሁን ያለዉን ዘመናዊ ህንፃ ቤ/ክ እንዲሰሩ ሦስተኛው ሰበካ ጉባኤ በግንቦት 15/1979 8 ህንፃ አሰሪ
              ኮሚቴዎች አቋቋሙ። በህዳር 14/1975 ዓ.ም የኢትዮጵያው ፓትሪያርክ ብፁዕ ወቅዱስ አቡነ ተ/ሃይማኖት
              መሠረት ድንጋይ አስቀምጠዋል። ስራውንም ለማስጀመር ታላቅ አስተዋፅኦ አድርገዋል። ከሳቸው ባሻገርም ብፁዕ
              ወቅዱስ አቡነ መርቆርዮስ እና የሸዋ ሀገረ ስብከት ሊቀ ጳጳስ የነበሩት ብፁዕ አቡነ ጎርጎርዮስ ለህንፃው
              ግንባታ የቅርብ ክትትልና የገንዘብ ድጋፍ አድርገዋል። ህንፃ ቤተክርስቲያኑ ሙሉ በሙሉ የተሰራው በተጠረበ
              ድንጋይ ሲሆን በ525 ካሬ ሜትር ላይ አርፏል። ለዚህ ህንፃ ማሰሪያም በጠቅላላ ብር 744,897.65
              መውጣቱን ታሪክ መዝገብ ያስረዳል። በ1962 ዓ.ም ታቦተ ኪዳነ ምህረት በርዕሰ ደብር አባ ገ/ማርያም
              ፈለቀ ከጎንደር ክፍለ ሃገር የመጣች ሲሆን በየወሩ ማህሌት የሚቆም ቅዳሴ የሚቀደስ እንዲሁም በአመት 1
              ጊዜ የካቲት 16 ምትከብር ቢሆንም ከ46 ዓመት በኋላ ግን በዓመት 1 ጊዜ የመንገስ ጉዳይ ቀርቷል።
            </p>
          </div>
        </div>

        <div className=" dekikan">
          <div>
            <p>
              አዲሱ ህንፃ ቤተክርስቲያን ግንባታም በ1985 በወርሃ ግንቦት ተጠናቋል። ሆኖም ጊዜው የደርግ ወታደራዊ
              መንግስትና የኢሃዲግ ወታደር ተኩስ ልውውጥ የሚያደርግበት ነበር። የደርግ ሠራዊትም በሰበታ ከተማ ውስጥና
              ዙሪያውን ሰፍሮ ስለነበር በጦር መሳሪያ ተኩስ እንዳትጠፋ የቅ.ገብርኤል ቤተክርስቲያንም አደጋ
              እንዳይደርስበት ሕዝበ ክርስቲያኑ ጠዋትና ማታ ቅ.ገብርኤልን ይማፀን ነበር። በእግዚአብሔር ቸርነትም
              የአንዲት መሳሪያ ድምፅ ሳይሰማ ቀረ። ህዝቡም ለደህንነታቸው መታሰቢያ ይሆን ዘንድ ግንቦት 1 ሊያደርጉት
              የነበረውን ምርቃት ሥነ-ሥርዓት በግንቦት 19/1985 አድርገዋል። በዕለቱም ሊቃዉንቱ ወረብ እንዲሁም
              ከተቋቋመ 5 አመት በሆነው በፍሬሃይማኖት ሰንበት ተማሪዎች ዝማሬዎች ቀርበዋል። መላከ ኤዶም አለልኝ
              ይትባረክ፦ የአዲሱ ሕንፃ አስተዳዳሪ ከዛም ጊዜ ጀምሮ የዘወትር ኪዳን ፀሎት፣ የአበይት በዓላት ቅዳሴ
              እንዲጀመር ተደርጓል።
            </p>
          </div>
          <div>
            <img src={dekikan} alt="" />
          </div>
        </div>
      </div>
      <div id="atekakem">
        <div className="higigat">
          <h2>የመተግበርያው አጠቃቀም </h2>
          <h3>ህግጋት</h3>
          <p>
            <CheckCircleOutlineIcon />
            እባኮ ሁሉንም ባዶ ቦታዎች መሙላት እንዳየይረሱ፣ በ '*' የተቀመጡት ግዴታ መሞላት አለባቸው። እንዲሁም ፎቶ
            እና በመምረጥ የሚሞሉትን መሙላት እንዳይረሱ።
          </p>

          <p>
            <CheckCircleOutlineIcon />
            ከአንድ አባላት መሙያ ወደ ሌላ አባላት መሙያ ሲሄዱ ወይም ቦታ ሲቀይሩ፣ የመዘገቡትን SAVE ማድረግ
            እንዳይረሱ።
          </p>
          <p>
            <CheckCircleOutlineIcon /> የሚያስገቡት መረጃ ትክክል መሆኑን እና ያስገቡት ቦታ ትክክል
            መሆኑን ያረጋግጡ።
          </p>
          <p>
            <CheckCircleOutlineIcon />
            ከመግበርያው የሚመጡ መልክቶችን በአግባቡ ያስተናግዱ።
          </p>
          <p>
            <CheckCircleOutlineIcon />
            ኢንተርኔት በማይኖርበት ወቅት ዳታውን ማስተካከያ ውስጥ ገብተው ኤክስፓርት ማድርግ እንዳይረሱ።
          </p>
        </div>
        <div className="higigat">
          <h3>አጠቃቀም</h3>
          <p>
            <CheckCircleOutlineIcon />
            በጎን በኩል ያለውን ወደታች የተደረደረውን ምስል በመንካት የተለያዩ አማራጮች በመምረጥ መጠቀም ይችላሉ።
          </p>

          <p>
            <CheckCircleOutlineIcon />
            ስለመተግበርያው አጠቃቀም እና ስለበተክርስትያኑ ታሪክ መረጃ ለማኘት በተጨማሪም አስተያየት ለመስጠት የ ዋና
            ገጽ ( ማለትም ይህንን ገጽ ) ይጠቀሙ።
          </p>
          <p>
            <CheckCircleOutlineIcon /> ከፍሬዎች ጀምሮ እስከ ደቂቃን ድረስ ያለው አዲስ ተማሪ ለመመዝገብ
            የተሰናዱ ፎርሞች ሲሆኑ ከላይ ያለውን ህግጋት በመጠቀም አዲስ ተማሪ ይመዝግቡ።
          </p>
          <p>
            <CheckCircleOutlineIcon />
            መረጃ ክፍል በአጠቃላይ የተመዘገቡትን ተማሪዎች የያዘ ሲሆን፣ ዝርዝር የሚለውን በተን በመንካት ከሚመጡት
            አራት አማራጮች(ማስተባበርያ፣ መዝሙር ክፍል፣ ኪነ ጥበብ፣ምግባረ ሰናይ) ውስጥ ማስተባበርያ በውስጡ ሁሉንም
            ተማሪ የያዘ ሲሆን ሌላም አንደየ ፈርጁ የየራሱን መረጃ ይይዛል። ይህም ደግሞ እንደገና በራሱ 4 ቱንም
            ክፍላት በውስጡ ይይዛል።
          </p>
          <p>
            <CheckCircleOutlineIcon />
            ስታቲክስ እያንዳንዱን ክፍላት መረጃ ንጻሬ በስእል አስደግፎ ያስቀምጣል። ይህም የሰንበት ትምህርት ቤቱን
            አጠቃላይ መረጃ እንዲሁም ተማሪዎች ያሉበትን ደረጃ ለማወቅ ያስችላል።
          </p>
        </div>
      </div>
      <div className="asteyayet-boarder">
        <h2 id="asteyayet" style={{ paddingBottom: "20px" }}>አስተያየት መስጫ</h2>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={4.5} style={{ marginLeft: "9%" }}>
              <TextField
                name='user_name'
                label="ሙሉ ስም"
                placeholder="እባኮ ስምዎን ያስገቡ"
                fullWidth
                type="text"

                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={4.5}>
              <TextField
                name='user_email'
                label="ኢሜል"
                placeholder="እባኮ ኢሜልዎን ያስገቡ"
                fullWidth

                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={9} style={{ marginLeft: "9%" }}>
              <TextField
                name="message"
                label="መልእክት"
                placeholder="እባኮ መልእክትዎን ያስገቡ"

                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button variant="contained" color="primary" type="submit">
              ይላኩ
            </Button>
          </Grid>
        </form>
      </div>
    </>
  );
}

export default Home;

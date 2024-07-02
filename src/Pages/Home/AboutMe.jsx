import MySkills from "./MySkills";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function AboutMe() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      {/* <h2 className="" style={{ width: "fit-content", fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", margin: "auto", backgroundColor: "#0000", borderLeft: "5px solid #0c6cf4ac", borderRight: "5px solid #0c6cf4ac", padding: "10px", paddingLeft: "50px", paddingRight: "50px", borderRadius: "10px", boxShadow: " 0 0 16px 0 rgba(0, 0, 0, 0.1)", background: "linear-gradient(to right,#73a7f1ac,#0000,#0000,#0000,#73a7f1ac)" }}>About Me</h2> */}
      <h2 className="heading" style={{ padding: "10px", paddingLeft: "50px", paddingRight: "50px",borderRadius: "10px",margin:"auto", fontSize: "x-large",width:"fit-content" }}>Education<span class="game-icons--graduate-cap"></span></h2>
      <div id="AboutMe" className="about--section">
        {/* <div className="about--section--img">

          <i class="game-icons--graduate-cap"></i>
        </div> */}
        {/* <div className="" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="550"> */}
        <div className="hero--section--content" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="550">
          {/* <p className="section--title">About Me</p> */}
          {/* <h1 className="skills--section--heading">Education</h1> */}
          <div className="testimonial--section--card">
            {/* <div style={{ width: '2px', backgroundColor: '#000' }}></div> */}
            <div className="testimonial--section--car-header " style={{ display: "flex" }}>
              <div className="" style={{ flexDirection: "row" }}>
                {/* <i className="fa--university" /> */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSHp7AQMO9lYsiaIHdT3VtaHwftSFJt3Lhpoyx6uADkGfpdEpRS_RW42ieEinEP6g4kc&usqp=CAU" style={{ width: "3.5em" }}></img>
              </div>
              <div style={{ flexDirection: "row", textAlign: "" }}>
                <h3 className="header-about" style={{ flex: 0.9, textAlign: "" }}>KL University <span className="sp1">,Vijayawada </span><span>(2021-25)</span></h3>
                <p>B.Tech. in Computer Engineering , <i style={{ fontStyle: "normal", fontSize: "medium", }}>CGPA:9.5</i></p>
              </div>
            </div>
            <div className="testimonial--section--car-header " style={{ display: "flex" }}>
              <div className="" style={{ flexDirection: "row" }}>

                <img src="https://media.licdn.com/dms/image/C4E0BAQGCt-ugqJM7fQ/company-logo_200_200/0/1630622257402?e=2147483647&v=beta&t=e4BLdQiAAKBDYRZHV8Jk8Di_ozjIW6k4lPNMBE4BhGU" style={{ width: "4em" }}></img>
                {/* <i className="fa--university" /> */}
              </div>
              <div style={{ flexDirection: "row", textAlign: "" }}>
                <h3 className="header-about" style={{ flex: 0.9, textAlign: "" }}>Sasi Junior College<span className="sp1">,Palakollu</span><span>(2019-21)</span></h3>
                <p>12th Class, <i style={{ fontStyle: "normal", fontSize: "medium", }}>MARKS:971</i></p>
              </div>
            </div>
            <div className="testimonial--section--car-header " style={{ borderLeft: "5px solid #0c6cf4ac", display: "flex" }}>
              <div className="" style={{ flexDirection: "row" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGZBnugG3vnsdqzgo2dSY-qLmlxw3Kp2PwYKVor0HgVw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGZBnugG3vnsdqzgo2dSY-qLmlxw3Kp2PwYKVor0HgVw&s" style={{ width: "4em" }}></img>
                {/* <i className="fa--university" /> */}
              </div>
              <div style={{ flexDirection: "row", textAlign: "" }}>
                <h3 className="header-about" style={{ flex: 0.9, textAlign: "" }}>Narayana School<span className="sp1">,Razole</span><span>(2019)</span></h3>
                <p>10th class, <i style={{ fontStyle: "normal", fontSize: "medium", }}>CGPA:10</i></p>
              </div>
            </div>

          </div>
        </div>
        {/* </div> */}
        <div className="" data-aos="" data-aos-offset="300" data-aos-easing="ease-in-sine" style={{ margin: "auto" }}>
          <div className="hero--section--content hp1">
            <div className="testimonial--section--card">
              <p className="hero--section-description" id="hero--section-description-id">
                ⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CNS, etc.
              </p>
              <p className="hero--section-description">
                ⚡ Apart from this, I have done courses on Cloud Computing and Full Stack Development.Created Multiple Full Stack Projects by using various Frameworks like SpringBoot, Mern.
              </p>
            </div>
          </div>
        </div>
      </div>
      <MySkills />
    </>
  );
}

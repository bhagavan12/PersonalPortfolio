import data from "../../data/index.json";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function MyPortfolio() {
  useEffect(() => {
    AOS.init();
  }, []);
  const handleGit = (url) => {
    const newTab = window.open(url, '_blank');
    newTab.focus();
  }
  return (
    <section className="portfolio--section" id="MyPortfolio">
    <h2 className="heading" style={{ padding: "10px", paddingLeft: "50px", paddingRight: "50px",borderRadius: "10px",margin:"auto", fontSize: "x-large",width:"fit-content" ,margin:"-100px auto 0px auto "}}>Projects<span class="eos-icons--project-outlined"></span></h2>
        {/* <h2 className=""  style={{fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",margin:"-100px auto 0px auto ",backgroundColor:"#0000",borderLeft:"5px solid #0c6cf4ac",borderRight:"5px solid #0c6cf4ac",padding:"10px",paddingLeft:"50px",paddingRight:"50px",borderRadius:"10px",boxShadow:" 0 0 16px 0 rgba(0, 0, 0, 0.1)",background:"linear-gradient(to right,#73a7f1ac,#0000,#0000,#0000,#73a7f1ac)"}}>Projects</h2> */}
      <div className="portfolio--container-box">
        {/* <div className="portfolio--container">

          <h2 className="section--heading">My Portfolio</h2>
          style={{
              borderLeft: "5px solid #0c6cf4ac",
              borderRadius: "5px", padding: "7px", margin: "0px 0px 0px 0px",
              fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
              boxShadow: " 0 0 16px 0 rgba(0, 0, 0, 0.2)", background: "linear-gradient(to right,#73a7f1ac,#0000,#0000,#0000)"
            }}
          <h4 className="sideheading-box">My Portfolio</h4>
        </div> */}
        <div>
          <button className="btn btn-github" onClick={() => handleGit("https://github.com/bhagavan12")}>
            <i className="bi--github-small"></i>
            Visit My GitHub
          </button>
        </div>
      </div>
      <div className="portfolio--section--container" data-aos="fade-down"
          data-aos-duration="850">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card" data-aos="zoom-in">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content" style={{borderBottom:"1px solid black"}}>
              <div>
                <h3 className="portfolio--section--title">{item.title}
                  <i onClick={() => handleGit(item.linkd)} className={(item.linkd.length >= 1) ? "fluent--live-20-filled p1" : ""} style={{ cursor: "pointer" }}>

                  </i>
                </h3>
                {/* <ul> */}
                <p className="text-md">{item.description}</p>
                {/* </ul> */}
              </div>
              <button className="button-port">
                <p className="pp" onClick={() => handleGit(item.linkg)}>GitHub</p>
                <i className="uil--github" />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="4"
                >
                </svg>
              </button>

            </div>
            <div style={{display: "flex", flexWrap: "wrap",margin:"auto" }}>
              {item?.used?.map((a,i)=>(
                <div style={{width:'fit-content',boxShadow: "0 0 32px 0 rgba(0, 0, 0, 0.15)",padding:"3px",marginLeft:"5px",backgroundColor:"#b0dbb8",borderRadius:"10px",margin:"2px 4px"}}>{a}</div>
              ))
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// {
//   "id": "6",
//   "src": "./img/ezgif.com-animated-gif-maker_tms.gif",
//   "title": "E-TMS",
//   "description": "we did this project using enterprise framework,we users can select and bid on projects ",
//   "linkd": "",
//   "linkg": "https://github.com/bhagavan12/TMS",
//   "used":["Java","SpringBoot","Hibernate","MySql","ReactJS","MongoDB","netlify","render"]
// }   

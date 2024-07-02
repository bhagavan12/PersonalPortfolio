import data from "../../data/index.json";
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from "react-router-dom";
export default function MySkills() {
  const openLinkInNewTab = (url) => {
    const newTab = window.open(url, '_blank');
    newTab.focus();
  }
  return (
    <section className="skills--section" id="mySkills">
      {/* <h2 className=""  style={{fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",margin:"auto",backgroundColor:"#0000",borderLeft:"5px solid #0c6cf4ac",borderRight:"5px solid #0c6cf4ac",padding:"10px",paddingLeft:"50px",paddingRight:"50px",borderRadius:"10px",boxShadow:" 0 0 16px 0 rgba(0, 0, 0, 0.1)",background:"linear-gradient(to right,#73a7f1ac,#0000,#0000,#0000,#73a7f1ac)"}}>My Skills</h2> */}
      <h2 className="heading" style={{ padding: "10px", paddingLeft: "50px", paddingRight: "50px", borderRadius: "10px", margin: "auto", fontSize: "x-large" }}>My Skills<span class="carbon--skill-level-intermediate"></span></h2>
      <div className="cardd" style={{borderRadius: "15px"}}>
        <h4 className="" style={{textAlign:"center", padding: "7px", paddingBottom:"15px",fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}>My Coding Profiles</h4>
        <div className="skills--section--container" style={{ flexDirection: "row" }}>
          {data?.skillscoding?.map((item, index) => (
            <div key={index} data-aos="zoom-out">
              <div className="skills--section--img">
                <i className={item.src} onClick={() => openLinkInNewTab(item.link)}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <h4 className="" style={{ borderLeft: "5px solid #0c6cf4ac", borderRadius: "5px", boxShadow: " 0 0 16px 0 rgba(0, 0, 0, 0.2)", padding: "7px", fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", background: "linear-gradient(to right,#73a7f1ac,#0000,#0000,#0000)" }}>Technologies, Languages, FrameWorks Included in My Projects</h4> */}
      <div className="cardd" style={{borderRadius: "15px"}}>
        <h4 className="" style={{textAlign:"center", padding: "7px", paddingBottom:"15px",fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}>Technologies, Languages, FrameWorks Included in My Projects</h4>
      <div className="skills--section--container" style={{ flexDirection: "row" }}>
        {data?.skills?.map((item, index) => (
          <div key={index} data-aos="zoom-out">
            <div className="skills--section--img">
              <i className={item.src}></i>
            </div>
          </div>
        ))}
      </div>
      </div>
      {/* <h2 className="skills--section--heading">Cloud Serivces</h2> */}
      <div className="" style={{ flexDirection: "row" }}>
        {data?.skillscloud?.map((item, index) => (
          <div key={index} >
            <div className="skills--section--img">
              <i className={item.src}></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

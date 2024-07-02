import data from "../../data/index.json";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Testimonial() {
  useEffect(() => {
    AOS.init();
  }, []);
  const handleCertificate = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      {/* <Navbar /> */}
      {/* <h2 className="mainheading-box">Achievements</h2> */}
      <h2 className="heading" style={{ padding: "10px", paddingLeft: "50px", paddingRight: "50px", borderRadius: "10px", margin: "auto", fontSize: "x-large", width: "fit-content" }}>Certifications<span class="game-icons--achievement"></span></h2>
      <div className="testimonial--section" id="testimonial">
        {/* <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sideheading-box">Certifications</h2>
        </div>
      </div> */}
        <div className="achieve--section--container">
          {data?.achievement_certificates?.map((item, index) => (
            <div className="card-ach" onClick={() => handleCertificate(item.link)}>
              <div className="text-ach">
                <span>{item.title}</span>
                <img src={item.src} style={{ width: "10em" }} />
                <span>{item.date}</span>
                {/* <p className="subtitle-ach">Vivamus nisi purus</p> */}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sideheading-box">Publications</h2>
        </div>
      </div> */}
        <h2 className="heading" style={{ padding: "10px", paddingLeft: "50px", paddingRight: "50px", borderRadius: "10px", margin: "auto", fontSize: "x-large", width: "fit-content" }}>Publications<span class="marketeq--research "></span></h2>
        {/* <h5 className="">I have worked on and published a few research papers and publications of my own.</h5> */}
        <div className="skills--section--container" data-aos="zoom-in-up" data-aos-duration="1000" style={{overflowX:"auto"}}>
          {data?.publications?.map((item, index) => (
            <div className="" onClick={() => handleCertificate(item.link)} >
              <div className="text-ach">
                <h2 id="h2">{item.title}</h2>
                <h6 id="h6">{item.des}</h6>
                <h5 id="sp">{item.date}</h5>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

{/* <a className="btn-ach" href="#">
<svg className="svg-icon-ach" viewBox="0 0 20 20">
<path d="M4.317,16.411c-1.423-1.423-1.423-3.737,0-5.16l8.075-7.984c0.994-0.996,2.613-0.996,3.611,0.001C17,4.264,17,5.884,16.004,6.88l-8.075,7.984c-0.568,0.568-1.493,0.569-2.063-0.001c-0.569-0.569-0.569-1.495,0-2.064L9.93,8.828c0.145-0.141,0.376-0.139,0.517,0.005c0.141,0.144,0.139,0.375-0.006,0.516l-4.062,3.968c-0.282,0.282-0.282,0.745,0.003,1.03c0.285,0.284,0.747,0.284,1.032,0l8.074-7.985c0.711-0.71,0.711-1.868-0.002-2.579c-0.711-0.712-1.867-0.712-2.58,0l-8.074,7.984c-1.137,1.137-1.137,2.988,0.001,4.127c1.14,1.14,2.989,1.14,4.129,0l6.989-6.896c0.143-0.142,0.375-0.14,0.516,0.003c0.143,0.143,0.141,0.374-0.002,0.516l-6.988,6.895C8.054,17.836,5.743,17.836,4.317,16.411"></path>
</svg>
</a>
<a className="btn-ach" href="#">
<svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="svg-icon-ach">
<path stroke-width="8" stroke-linejoin="round" stroke-linecap="round" fill="none" d="M21.9,50h0M50,50h0m28.1,0h0M25.9,50a4,4,0,1,1-4-4A4,4,0,0,1,25.9,50ZM54,50a4,4,0,1,1-4-4A4,4,0,0,1,54,50Zm28.1,0a4,4,0,1,1-4-4A4,4,0,0,1,82.1,50Z">
</path>
</svg>
</a> */}
{/* <div className="icons-ach">
<a className="btn-ach" href="#" >
<svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="svg-icon-ach">
<path stroke-width="8" stroke-linejoin="round" stroke-linecap="round" fill="none" d="M31.8,64.5a14.5,14.5,0,0,1-3.2-28.7,17.5,17.5,0,0,1-.4-4,18.2,18.2,0,0,1,36-3.6h.3a18.2,18.2,0,0,1,3.7,36M39.1,75.4,50,86.3m0,0L60.9,75.4M50,86.3V42.7">
</path>
</svg>
</a>
</div> */}
// {/* <div key={index} className="testimonial--section--card">
//   {/* <p className="text-md">{item.description}</p> */}
//   <div className="testimonial--section--card--author--detail">
//     <img src={item.src}/>
//     <div>
//       {/* <p className="text-md testimonial--author--name">
//         {item.author_name}
//       </p> */}
//       {/* <p className="text-md testimonial--author--designation">
//         {item.author_designation}
//       </p> */}
//     </div>
//   </div>
// </div> */}
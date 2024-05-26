// // import AboutMe from "../AboutMe";
// // import ContactMe from "../ContactMe";
// import Footer from "../Footer";
// import HeroSection from "../HeroSection";
// // import MyPortfolio from "../MyPortfolio";
// import MySkills from "../MySkills";
// // import Testimonial from "../Testimonials";

// export default function Home() {
//   return (
//     <>
//       <HeroSection />
//        {/* <MySkills /> */}
//        {/*
//       <AboutMe />
//       <MyPortfolio />
//       <Testimonial />
//       <ContactMe />*/}
//       <Footer /> 
//     </>
//   );
// }
import React, { useState, useEffect } from 'react';
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import MySkills from "../MySkills";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2500); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []); // Run once on component mount

  return (
    <>
      {/* {!showContent ? (
        <div className="loader" style={{justifyContent:''}}>
          <span>&lt;</span>
          <span>LOADING</span>
          <span>/&gt;</span>
        </div>
      ) : ( */}
        <>
          <HeroSection />
          {/* <MySkills /> */}
          <Footer /> 
        </>
      {/* )} */}
    </>
  );
}

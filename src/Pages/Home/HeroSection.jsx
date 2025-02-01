import Testimonial from "./Testimonials";
import Button from "react-bootstrap/Button";
// import pdf from "./2100032454-J Sai Bhagavan _5.pdf";
import { NavLink, Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <section id="heroSection" className="">
      <div class="card-social">
        <Link class="socialContainer containerThree" target="_blank" to="https://www.linkedin.com/in/javvadi-sai-bhagavan-793960248/">
          <svg viewBox="0 0 448 512" class="socialSvg linkdinSvg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
        </Link>
        <Link class="socialContainer containerFour" target="_blank" to="https://github.com/bhagavan12">
          <svg class="socialSvg githubSvg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path fill="currentColor" d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30c2 0 2-1 2-2v-5c-7 2-10-2-11-5c0 0 0-1-2-3c-1-1-5-3-1-3c3 0 5 4 5 4c3 4 7 3 9 2c0-2 2-4 2-4c-8-1-14-4-14-15c0-4 1-7 3-9c0 0-2-4 0-9c0 0 5 0 9 4c3-2 13-2 16 0c4-4 9-4 9-4c2 7 0 9 0 9c2 2 3 5 3 9c0 11-7 14-14 15c1 1 2 3 2 6v8c0 1 0 2 2 2c3 0 22-9 22-30C64 14 50 0 32 0" /></svg>
        </Link>
        <Link className="socialContainer containerOne" target="_blank" to="mailto:2100032454cseh@gmail.com">
          {/* <svg class="socialSvg1" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48">
            <path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917" />
            <path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" />
            <path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" />
            <path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" />
          </svg> */}
          <svg class="socialSvg githubSvg" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><rect width="416" height="320" x="48" y="96" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="40" ry="40" /><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l144 112l144-112" /></svg>
        </Link>
        <Link class="socialContainer containerTwo" target="_blank" to="https://www.instagram.com/teja.javvadi/">
          <svg class="socialSvg instaSvg" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><path fill="white" d="M16 0c-4.349 0-4.891.021-6.593.093c-1.709.084-2.865.349-3.885.745a7.847 7.847 0 0 0-2.833 1.849A7.757 7.757 0 0 0 .84 5.52C.444 6.54.179 7.696.095 9.405c-.077 1.703-.093 2.244-.093 6.593s.021 4.891.093 6.593c.084 1.704.349 2.865.745 3.885a7.847 7.847 0 0 0 1.849 2.833a7.757 7.757 0 0 0 2.833 1.849c1.02.391 2.181.661 3.885.745c1.703.077 2.244.093 6.593.093s4.891-.021 6.593-.093c1.704-.084 2.865-.355 3.885-.745a7.847 7.847 0 0 0 2.833-1.849a7.716 7.716 0 0 0 1.849-2.833c.391-1.02.661-2.181.745-3.885c.077-1.703.093-2.244.093-6.593s-.021-4.891-.093-6.593c-.084-1.704-.355-2.871-.745-3.885a7.847 7.847 0 0 0-1.849-2.833A7.716 7.716 0 0 0 26.478.838c-1.02-.396-2.181-.661-3.885-.745C20.89.016 20.349 0 16 0m0 2.88c4.271 0 4.781.021 6.469.093c1.557.073 2.405.333 2.968.553a4.989 4.989 0 0 1 1.844 1.197a4.931 4.931 0 0 1 1.192 1.839c.22.563.48 1.411.553 2.968c.072 1.688.093 2.199.093 6.469s-.021 4.781-.099 6.469c-.084 1.557-.344 2.405-.563 2.968c-.303.751-.641 1.276-1.199 1.844a5.048 5.048 0 0 1-1.844 1.192c-.556.22-1.416.48-2.979.553c-1.697.072-2.197.093-6.479.093s-4.781-.021-6.48-.099c-1.557-.084-2.416-.344-2.979-.563c-.76-.303-1.281-.641-1.839-1.199c-.563-.563-.921-1.099-1.197-1.844c-.224-.556-.48-1.416-.563-2.979c-.057-1.677-.084-2.197-.084-6.459c0-4.26.027-4.781.084-6.479c.083-1.563.339-2.421.563-2.979c.276-.761.635-1.281 1.197-1.844c.557-.557 1.079-.917 1.839-1.199c.563-.219 1.401-.479 2.964-.557c1.697-.061 2.197-.083 6.473-.083zm0 4.907A8.21 8.21 0 0 0 7.787 16A8.21 8.21 0 0 0 16 24.213A8.21 8.21 0 0 0 24.213 16A8.21 8.21 0 0 0 16 7.787m0 13.546c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333S18.948 21.333 16 21.333M26.464 7.459a1.923 1.923 0 0 1-1.923 1.921a1.919 1.919 0 1 1 0-3.838c1.057 0 1.923.86 1.923 1.917" /></svg>
        </Link>
      </div>


      <div class="herocont">
        <div class="imgcont">
          <div class="datacont">
            <h1>Hi! I'm </h1>
            <h1>Sai Bhagavan</h1>
          </div>
          <p id="desc">I am a Student, and skilled in web development and cloud computing, I am a quick learner and passionate one looking to put my expertise to use in a fast-paced work environment.</p>

        </div>
      </div>
    </section>

  );
}

{/* <div className="hero--section--content--box">

<div class="">

  <div class="bh-overflow-hidden">
    <h1 class="drop-right">Hi! <span style={{ color: "#006aff" }}>I'm Sai Bhagavan</span></h1>
  </div>
  <div class="bh-overflow-hidden">
    <p class="bh-drop-in-2">
      I am a Student, and skilled in web development and cloud computing, I am a quick learner and passionate one looking to put my
      expertise to use in a fast-paced work environment.
    </p>
  </div>
  <div className="button__grp_hero">
    <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px", flexDirection: "row" }}>Resume<i className="fluent--open-48-regular "></i></Button>
  </div>
</div>
</div>
<div className="hero--section--img">
<img src="./img/mee_port.jpg" alt="Hero Section" />
</div> */}




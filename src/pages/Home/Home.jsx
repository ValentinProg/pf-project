import React from "react";
import "./Home.css";
import { LinkedIn } from "@material-ui/icons";
import { Email } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>
          Hi, my <br></br>
          name is Valentin
        </h2>
        <div className="prompt">
          <p> A software developer with a passion for learning and <br></br>creating.</p>  
          <Link to="/contact"><button>contact me</button></Link>
          <button>Download CV</button>
        </div>
        {/* <div className="promptt">
        <LinkedIn />
          <Email />
          <GitHub />
        </div> */}
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, Redux, HTML, CSS</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;

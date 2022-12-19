import React from "react";
import './Main.css'
import img1 from './background.jpg';
import img2 from './1234.png';
import img3 from './text.png';


function About()
{
    return(
        <div className="About">
            <h1 className="heading">
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
        </h1>
        
           <img className="img22" src={img2}/>
           <img src={img1}/>
        </div>
    );
}
export default About;
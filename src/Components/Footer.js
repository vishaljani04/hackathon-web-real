import React from "react";
import './Main.css'


function About()
{
    return(
        <div>
<section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>about us</h3>
            <p>This is A Fully Responsive Website Created By Vishal,Sujal,Dhruv,Darshan And This is The Owner Of Traworld Agency.</p>
          </div>
          <div className="box">
            <h3>branch locations</h3>
            <a href="https://goo.gl/maps/JdE5uez75qJoM44u5" target="_blank">india</a>
            <a href="https://goo.gl/maps/ysDyVSESUpC73FXaA" target="_blank">Mumbai</a>
            <a href="https://goo.gl/maps/k8fjkwzwubwHnKqr5" target="_blank">New Delhi</a>
            <a href="https://goo.gl/maps/rEEjwDHCkX71gyGX7" target="_blank">Deheradun</a>
          </div>
          <div className="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">book</a>
            <a href="#">packages</a>
            <a href="#">services</a>
            <a href="#">gallery</a>
            <a href="#">contact</a>
          </div>
          <div className="box">
            <h3>follow us</h3>
            <a href="https://www.facebook.com" target="_blank">facebook</a>
            <a href="https://www.instagram.com" target="_blank">instagram</a>
            <a href="https://www.twitter.com" target="_blank">twitter</a>
            <a href="https://in.linkedin.com/" target="_blank">linkedin</a>
          </div>
        </div>
        <h1 className="credit"> © Copyright 2022<span> Traworld Agency</span></h1>
      </section>
                 
      </div>
    );
}
export default About;
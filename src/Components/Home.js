import React from "react";
import './Main.css'

function Home()
{
    return(
        <div>
            <section className="home" id="home">
        <div className="content">
          <h3>Travel Brings power and Love Back into Your Life</h3>
          <p>Ready For Any Adeventure</p>
          <a href="#" className="btn">discover more</a>
        </div>
        <div className="controls">
          <span className="vid-btn active" data-src="Video\Dubai.mp4" />        
          <span className="vid-btn" data-src="Video\Pexels Videos 1660911.mp4" />
          <span className="vid-btn" data-src="Video\video (1).mp4" />
          <span className="vid-btn" data-src="Video\video.mp4" />
          <span className="vid-btn" data-src="Video\India.mp4" />
        </div>
        <div className="video-container">
          <video src="Video\Dubai.mp4" id="Dubai.mp4" loop autoPlay muted />
        </div>
      </section>
        </div>
    );
}
export default Home;
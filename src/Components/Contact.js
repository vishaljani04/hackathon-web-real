import React from "react";
import './Main.css'

function Contact()
{
    return(
        <div>
             <section className="contact" id="contact">
        <h1 className="heading">
          <span>c</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
        </h1>
        <div className="row">
          <div className="image">
            <img src="IMG/cont.png" alt="" />
          </div>
          <form method="post" action="/contact">
            <div className="inputBox">
              <input type="text" name="Name" placeholder="name" />
              <input type="email" name="Email" placeholder="email" />
            </div>
            <div className="inputBox">
              <input type="numberr" name="Number" placeholder="phone number" />
              <input type="text" name="Subject" placeholder="subject" />
            </div>
            <textarea placeholder="message" name="msg" id cols={30} rows={10} defaultValue={""} />
            <input type="submit" className="btn" defaultValue="send message" />
          </form>
        </div>
      </section>
        </div>
    );
}
export default Contact;
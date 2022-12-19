import React from "react";
import './Main.css'


function Services()
{
    return(
        <div>
           <section className="services" id="services">
        <h1 className="heading">
          <span>s</span>
          <span>e</span>
          <span>r</span>
          <span>v</span>
          <span>i</span>
          <span>c</span>
          <span>e</span>
          <span>s</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-hotel" />
            <h3>Cheapest hotels</h3>
            <p>We Will Provide Affordable Means cheapest Hotels And More facilities Are Also.No Booking Fees And Any Charge.Swimming Pool,Villa,Nature It is The Need For choice.</p>
          </div>
          <div className="box">
            <i className="fas fa-utensils" />
            <h3>foods</h3>
            <p>In The Hotels Provide Fresh food With Startus.And Fresh Fruites,Vegetables Are Use.If There Avilable </p>
          </div>
          <div className="box">
            <i className="fas fa-bullhorn" />
            <h3>Travel guide</h3>
            <p>Hotels Are Provide travel guide Beacuse Make copies of important documents,Keep your friends and family updated,Be wary of public Wi-Fi,As Your Choice It is Not Important.</p>
          </div>
          <div className="box">
            <i className="fa-solid fa-bus-simple" />
            <h3>Bus And Taxy</h3>
            <p>Hotels Are Provide Free Bus And Taxy visit The places And The Vehicle Will Provide According To Your family. </p>
          </div>
          <div className="box">
            <i className="fas fa-plane" />
            <h3>fastest travel</h3>
            <p>We Will Privide fastest Travel Service,safty And The supersonic Concorde aircraft used to be the quickest way to travel In The World And In Travel Foods and Drinks Are Provide </p>
          </div>
          <div className="box">
            <i className="fas fa-hiking" />
            <h3>Adventures</h3>
            <p>Hotels Are Provide In Mountain Area To Enjoy Adventures And Fun,Treking And climbing are Also Provide.</p>
          </div>
        </div>
      </section>
        </div>
    );
}
export default Services;
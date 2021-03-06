import React from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/au/images.png";

export const  Contact=()=> { 
    return (
      <div className="content-page-wrapper">
        <div
          className="left-column"
          style={{
            background: "url(" + contactPagePicture + ") no-repeat", 
            backgroundSize: "auto",
            backgroundPosition: "end",
            marginTop: "100px",
            marginLeft: "100px"
          }}/>
      <div className="Link">
        <a href="home">Come back!</a> 
        </div>
       
        <div className="right-column">
      <h1 style={{
            marginBottom: "15px"
          }}>Contact:</h1>
          <div className="contact-bullet-points">
            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="phone" />
              </div>
  
              <div className="text">555-555-5555</div>
            </div>
  
            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="envelope" />
              </div>
  
              <div className="text">daniela@example.com</div>
            </div>
  
            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="map-marked-alt" />
              </div>
  
              <div className="text">Lehi, UT</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default Contact;







 



 
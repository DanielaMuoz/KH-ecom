import React from "react"; 
import { Carousel } from 'react-carousel-minimal';  
import { withRouter } from "react-router";
  

import { footer } from 'devcamp-js-footer';

footer('Some Name');


//import moment from 'moment';


function App() { 
 const data = [
    {
      image: "https://www.florespedia.com/Imagenes/flores-bonitas-girasoles.jpg",
      caption: "Girasol"
    },
    {
      image: "https://cdn.pixabay.com/photo/2013/01/27/18/41/flowers-76358_640.jpg",
      caption: "Amapola"
    },
    {
      image: "https://www.semana.es/wp-content/uploads/2020/05/flores-1068x712.jpg",
      caption: "Lirio"
    },
    {
      image: "https://www.florespedia.com/Imagenes/tipos-de-flores-bonitas-rosas.jpg",
      caption: "Rosa"
    },
    {
      image: "https://www.florespedia.com/Imagenes/lista-de-flores-bonitas-hortensias.jpg",
      caption: "Hortensia"
    },
    {
      image: "https://www.florespedia.com/Imagenes/flores-hermosas-dalias.jpg",
      caption: "Dalias"
    },
    {
      image: "https://www.florespedia.com/Minis/jacintos-rosas.jpg",
      caption: "Jacinto"
    },
    {
      image: "https://www.florespedia.com/Imagenes/flores-hermosas-del-cerezo.jpg",
      caption: "Cerezo"
    },
    {
      image: "https://www.florespedia.com/Minis/nenufar.jpg",
      caption: "Nenufar"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App"> 
  
      <div style={{ textAlign: "center"}}>
        <h1>King of heavens</h1> 
        <a href="signin" style={{ textAlign: "center"}}>Go ahead</a> 
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          /> 
          <p style={{
              textAlign: "center", position: "fixed", marginTop: "100px", position: "fixed", fontSize: "22px", color: "black", fontWeight: "bold"}}>
 
             The Internet Florist team is committed to providing you with the highest
             quality flowers, plants and gifts, at the fairest price possible. 
             Each client is very important to us and we strive with the most professional attention to each request. 
             Our entire staff is dedicated to providing the highest level of customer service for your flower delivery.</p>
        </div>
      </div> 
</div>
  );
}
 
export default withRouter(App);
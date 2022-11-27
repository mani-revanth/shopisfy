import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';
//import Carousel from 'react-bootstrap/Carousel';

/*function CarouselFadeExample() {
  return (
    <div style={{width:'100%',}}>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFGi5WdmJydwtBBYWqzGIB0sJyvu5aVv0OUg&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>highest quality</h3>
          <p>we will provide you with the best quality brands available in the market</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKTzlLQeVPlztE0jAMaALpi-QqUxyHKUcXA&usqp=CAU"
          alt="Second slide" 
        />

        <Carousel.Caption>
          <h3>affordable prices</h3>
          <p>the prices here are very low compared to others</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/2489629.jpg"
          alt="Third slide" 
        />

        <Carousel.Caption>
          <h3>various options</h3>
          <p>you will always have a choice here , for any design you wished for</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}*/

function IndividualIntervalsExample({}) {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
      <div style={{backgroundColor:'#EEEEEE',width:'100%',height:'43rem',textAlign:'center',justifyContent:'center',alignItems:'center',padding:'5%',}}>
        <img
          style={{width:'60%',height:'100%',borderRadius:'10px',boxShadow:'1px 1px 10px black'}}
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/4620238.jpg"
          alt="First slide"
        /></div>
        <Carousel.Caption>
          <h2 style={{color:'#FEB139',textShadow:'3px 3px 3px black'}}>highest quality</h2>
          <p style={{color:'black',}}>we will provide you with the best quality brands available in the market</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <div style={{backgroundColor:'#EEEEEE',width:'100%',height:'43rem',textAlign:'center',justifyContent:'center',padding:'5%',}}>
        <img
         style={{width:'60%',height:'100%',borderRadius:'10px',boxShadow:'1px 1px 10px black'}}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHx8&w=1000&q=80"
          alt="Second slide"
        /></div>
        <Carousel.Caption>
          <h2 style={{color:'#3FA796',textShadow:'3px 3px 3px black'}}>affordable prices</h2>
          <p style={{color:'black',}}>the prices here are very low compared to others</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <div style={{backgroundColor:'#EEEEEE',width:'100%',height:'43rem',textAlign:'center',justifyContent:'center',padding:'5%'}}>
        <img
         style={{width:'50%',height:'100%',borderRadius:'10px',boxShadow:'1px 1px 10px black'}}
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/2489629.jpg"
          alt="Third slide"
        /></div>
        <Carousel.Caption>
          <h2 style={{color:'#5F9DF7',textShadow:'3px 3px 3px black'}}>various options</h2>
          <p style={{color:'black',}}>you will always have a choice here , for any design you wished for</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
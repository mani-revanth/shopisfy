import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import CarouselFadeExample from './components/carousel';
import IndividualIntervalsExample from './components/carousel';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TextField } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
//import {Link} from 'react-router-dom';


let i=0;
function Shopify()
{
  const name1="Shopify.";
  const [name,setName]=useState("");
  useEffect(()=>{
    setTimeout(()=>{
      setName(name1.substring(0,i));
      i=(i+1)%8;
    },400);
  },[name]);
  return(
    <h1 style={{color:'white'}}>{name}</h1>
  )
}
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{height:'10vh',backgroundColor:'#150050',fontSize:'1.5rem',boxShadow:'5px 5px 5px black'}}>
      <Container>
      <Navbar.Brand style={{height:'80%',width:'10%',marginRight:'3%',textDecoration:'none'}}>
      <Shopify/>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about_us_div" className='underline' style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>about us</Nav.Link>
            <Nav.Link href="#brands_land" className='underline' style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>brands</Nav.Link>
            <Nav.Link href="#contact_us" className='underline' style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>contact us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='/login' className='underline' style={{color:'white',}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>Sign-in/signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const boxVariant = {
  visible: { opacity: 1, y : 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y : 50 }
};
const Box = () => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      style={{height:'100%',width:'100%',display:'flex',color:'white'}}
    >
      <p>Curators of ethical fashion and Indian designed
       Shopify is a destination concept store and online haven for style-seekers.
      A fashion selection lovingly handpicked for you, sealed with personal touch. Open six days.</p>
    </motion.div>
  );
};

const boxVariant1 = {
  visible: { opacity: 1, y : 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y : 50 }
};

const boxVariant2 = {
  visible: { opacity: 1, y : 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y : 50 }
};


const boxVariant3 = {
  visible: { opacity: 1, scale : 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0.5 }
};

const Box1=()=>{
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant1}
      initial="hidden"
      animate={control}
      style={{height:'100%',width:'100%',display:'flex',color:'green',textAlign:'center',justifyContent:'center',alignItems:'center',color:'black',}}
    >
      <h5>Shopify is a online platform that connects people with the most quality fashion products available in the market . you can also visit our 
      shop directly . our shop is located in Jagadamba junction , beside MVR shopping mall . this webpage was completely designed and develpped by Mani sankar reevanth .
      Shopify will work 6days in a week , for better customer satisfaction . the timings of shopify are 10:00 AM to 9:00PM </h5>
    </motion.div>
  );
}


const Image_box=(props)=>{
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant3}
      initial="hidden"
      animate={control}
      style={{height:'100%',width:'100%',display:'flex',color:'green',textAlign:'center',justifyContent:'center',alignItems:'center',color:'#DC5F00',}}
    >
      <img style={{height:'100%',width:'100%',borderRadius:'10px',}} src={props.lin}></img>
    </motion.div>
  );
}




const Box2=()=>{
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant2}
      initial="hidden"
      animate={control}
      style={{height:'100%',width:'100%',display:'flex',color:'green',textAlign:'center',justifyContent:'center',alignItems:'center',}}
    >
      <img  src="https://res.cloudinary.com/purnesh/image/upload/f_auto/v1613553282/31613553281085.jpg" style={{height:'70%',width:'70%'}}>
      </img>
    </motion.div>
  );
}

export default function Landing_page()
{
    const [email,setEmail]=useState("");
    return(
      <div>
        <div style={{boxShadow:'1px 2px 9px darkblack'}}>
           {/*<div style={{backgroundColor:'#E9A6A6',height:'3vh',width:'100%',margin:'0',marginTop:'0',alignItems:'center',justifyContent:'center',fontSize:'2.1vh',textAlign:'center',color:'pink'}}>
            <p>courier fee will be charged according to the distance . only available in India</p>
           </div>*/}
           <CollapsibleExample/>
        </div>
        <div style={{height:'90vh',width:'100%',overflow:'scroll'}}>
           <IndividualIntervalsExample/>
           <div style={{height:'30%',backgroundColor:'#3F3B6C',width:'100%',justifyContent:'center',alignItems:'center',textAlign:'center',display:'felx',verticalAlign:'center',paddingTop:'3%'}}>
              <div style={{height:'70%',width:'60%',margin:'auto',marginTop:'auto',marginBottom:'auto',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'130%',color:'#3F3351'}}>
              <Box/>
              </div>
           </div>
           <div id="about_us_div" style={{height:'70%',width:'100%',backgroundColor:'#EEEEEE',justifyContent:'center',alignItems:'center',textAlign:'center',padding:'7%'}}>
           <Container>
            <Row>
            <Col ><Box1/></Col>
            <Col >
              <Box2/>
            </Col>
            </Row>
          </Container>
          </div>
          <div style={{width:'100%',height:'80%',backgroundColor:'#3E3B6C',justifyContent:'center',alignItems:'center',textAlign:'center',padding:'2%'}}>
            <img src="https://assets.vogue.com/photos/625dcd80cade8f348f22f79b/3:2/w_798,h_532,c_limit/00-promo.gif" style={{width:'95%',height:'95%',borderRadius:'10px',boxShadow:'1px 1px 20px #F7F7F7'}}>
            </img>
          </div>
          <div id="brands_land" style={{width:'100%',backgroundColor:'white',display:'flex',justifyContent:'space-between'}}>
           <Container>
               <Row style={{margin:'20px'}}> 
                 <Col><Image_box lin="https://i.pinimg.com/originals/cf/43/b1/cf43b15c7ba9e3517f41ef27b6c26e03.jpg"/></Col>
                 <Col><Image_box lin="https://media.designrush.com/inspirations/129794/conversions/_1531355094_573_990__1531333188_323_Lacoste-Cool-Logo-Design_57f5b3343ed5-preview.jpg"/></Col>
                 <Col><Image_box lin="https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg"/></Col>
                 <Col><Image_box lin="https://assets.turbologo.com/blog/en/2020/01/19084712/levis-primary-logo.png"/></Col>
               </Row>
               <Row style={{margin:'20px'}}>
               <Col><Image_box lin="https://cdn.shopify.com/s/files/1/0095/7349/8959/products/AllensollyLogo_300x300.jpg?v=1611306393"/></Col>
               <Col><Image_box lin="https://1000logos.net/wp-content/uploads/2016/10/Colors-Air-Jordan-Logo.jpg"/></Col>
               <Col><Image_box lin="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/5ed97c67c917b86429019e61_Versace%20(1).png"/></Col>
               <Col><Image_box lin="https://1000logos.net/wp-content/uploads/2017/05/PUMA-logo.jpg"/></Col>
               </Row>
           </Container>
        </div>
        <div id="contact_us" style={{height:'70%',width:'100%',justifyContent:'center',alignItems:'center',textAlign:'center',background:'#3F3B6C',padding:'5%',color:'white'}}>
          <p>feel free to contact us . we will let you know if there are any new products and designs available .</p><p> please let us know if you feel
          any deiscomfort . send any complaints or suggestions for us .</p>
          <TextField
                error={email.length === 0}
                helperText={!email.length ? 'email is required' : ''}
                value={email}
                label="Enter your mail"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <br/><br/>
          <a href={`mailto:ch.m.s.revanth@gmail.com?subject=${"just to get in touch"}&body=${email}`}><button onClick={()=>{setEmail("")}} style={{backgroundColor:'#00F5FF',height:'15%',width:'10%',fontSize:'100%',borderRadius:'10px'}}>send email</button></a>
          <br/>
          <br/>
          <div style={{width:'30%',alignSelf:'center',textAlign:'center',marginLeft:'35%'}}>
          <Row>
            <Col className='tootlips'><Tooltip title="will be receiving your delevery in 3 to 7 days" placement='top-start'><p>delivey time</p></Tooltip></Col>
            <Col className='tootlips'><Tooltip title="your data cannot be accessed by others" placement='top-start'><p>privacy</p></Tooltip></Col>
            <Col className='tootlips'><Tooltip title="you can contact us by leaving your email above" placement='top-start'><p>contact</p></Tooltip></Col>
            <Col className='tootlips'><Tooltip title="no products will be taken back without proof" placement='top-start'><p>return</p></Tooltip></Col>
          </Row>
          </div>
          <div style={{width:'20%',marginLeft:'40%',marginTop:'2%'}}>
          <Row>
            <Col className='tootlips'><Tooltip title="our top barnds are puma,adidas,ck,......" placement='top-start'><p>brands</p></Tooltip></Col>
            <Col className='tootlips'><Tooltip title="our store is loacted at vishakapatnam , jagadhamba centre , beside MVR mall" placement='top-start'><p>location</p></Tooltip></Col>
            <Col className='tootlips'><Tooltip title="once the product is placed it cannot be cancelled afetr 2 days" placement='top-start'><p>canclation</p></Tooltip></Col>
          </Row>
          </div>
        </div>
        </div>
      </div>
    )
}
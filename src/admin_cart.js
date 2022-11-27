import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import CarouselFadeExample from './components/carousel';
//import IndividualIntervalsExample from './components/carousel';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Switch, TextField } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
//import {Link} from 'react-router-dom';
import { UseUserAuth } from './context/UserAuthContext';
import { Navigate, Router } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import Marquee from 'react-fast-marquee';
import { map } from '@firebase/util';



let i=0;
function Shopify()
{
  const name1="Shopify.";
  const [name,setName]=useState("");
  //const [cart_length,set_cart_length]=useState("0")
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


let abcdefg="bayya";

function CollapsibleExample() {
    let {user,logout}=UseUserAuth();
    abcdefg=user.email;
    const navigation =useNavigate();
    const [cart_length,set_cart_length]=useState("");
    const handleSignout =()=>{
      try{
        logout();
        navigation("/");
      }catch(err){
        alert(err.message);
      }
    }
    const funny=()=>
  {
    //console.log(abcdefg);
    axios.post("http://localhost:5000/get_length_of_cart",{name:`${abcdefg}`}).then((res)=>{
      set_cart_length(res.data);
    })
  }
  useEffect(()=>{
    setInterval(()=>{
      if(abcdefg!="ch.m.s.revanth@gmail.com")
      funny();
    },100);
  },[]);
    return (
      <Navbar collapseOnSelect expand="lg" style={{height:'10vh',backgroundColor:'#150050',fontSize:'1.5rem',boxShadow:'5px 5px 5px black',width:'100%'}}>
        <Container>
        <Navbar.Brand style={{height:'80%',width:'16%',marginRight:'3%',textDecoration:'none'}}>
        <Shopify/>
        </Navbar.Brand>
          <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse style={{backgroundColor:'#150050'}} id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" className='underline' style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>home</Nav.Link>
              <Nav.Link href="/men" className='underline' style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>men</Nav.Link>
              <Nav.Link href="/women" className='underline' style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>women</Nav.Link>
              {user.email=="ch.m.s.revanth@gmail.com" ? null :
            <Nav.Link href="/cart" className='underline' style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>cart({cart_length})</Nav.Link>}
            {
              user.email!="ch.m.s.revanth@gmail.com" ?null:
              <Nav.Link href="/billing" className='underline' style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>bills</Nav.Link>
            }
            </Nav>
            <Nav>
              <Nav.Link  className='underline' style={{color:'white',}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>{user.email}</Nav.Link>
              <Nav.Link  onClick={(e)=>{e.preventDefault();handleSignout();}}  className='underline' style={{color:'white',}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }


  const totaol_cost_products=(abc)=>{
    var sum=0;
    for(var x of abc)
    {
      sum=sum+Number(x.product_cost);
    }
    return sum;
  }



const Billdiv=(props)=>{
  let card=props.bill;
  const [text,setText]=useState("");
  return(
    <div style={{height:'auto',width:'100%',backgroundColor:'#EEF1FF',marginTop:'5%',border:'5px solid #EEEEEE',borderRadius:'10px',boxShadow:'1px 1px 10px black'}}>
        <div style={{height:'5vh',width:'100%',display:'inline-flex',justifyContent:'space-between'}}>
            <h3>{card.user_name}</h3>
            <h3>{card.time}</h3>
        </div>
        <hr/>
        {
          card.cart_items.map((bill_item,k)=>{
          return(
            <div key={k} style={{height:'5vh',width:'100%',display:'inline-flex',justifyContent:'space-between'}}>
              <h3>{bill_item.product_title}</h3>
              <h3>{bill_item.product_cost}</h3>
            </div>
          )
        })
      }
      <hr/>
      <div style={{height:'5vh',width:'100%',display:'inline-flex',justifyContent:'space-around'}}>
              <h3>total</h3>
              <h3>{totaol_cost_products(card.cart_items)}</h3>
      </div>
      <hr/>           
      <div style={{height:'5vh',width:'100%',display:'inline-flex',justifyContent:'space-between'}}>
              <h3>status</h3>
              <input type="text" 
              style={{height:'90%',width:'30%',borderRadius:'5px',paddingLeft:'10%'}}
              placeholder={card.bill_status} onChange={(e)=>{
                e.preventDefault();
                setText(e.target.value);
              }}/>
              <button
              onClick={()=>{
                axios.post("http://localhost:5000/update_bill_status",{id:card._id,new_status:text}).then((res)=>{
                  if(res.data=="yes")
                  alert("this bill status was updated succesfully");
                })
              }}
              style={{backgroundColor:'green',height:'90%',width:'10%',borderRadius:'10px'}}>
              update
              </button>
      </div>
    </div>
  )
}
  


export default function Billing_screen(){
    const [all_bills,set_all_bills]=useState([]);
    const funny2=()=>{
      axios.post("http://localhost:5000/get_all_bills",{}).then((res)=>{
        set_all_bills(res.data);
      })
    }
    useEffect(()=>{
      setTimeout(()=>{
        funny2();
      },1000);
    })
    return(
        <div style={{height:'100%',width:'100%'}}>
           <CollapsibleExample/>
           <div style={{height:'90vh',backgroundImage:'linear-gradient(#F49D1A,#B6E2A1)',overflowY:'scroll',overflowX:'hidden',justifyContent:'start',paddingLeft:'10%',paddingRight:'10%'}}>
            {
              all_bills.map((temp,i)=>{
                return(
                  <Billdiv key={i} bill={temp}/>
                )
              })
            }
           </div>
        </div>
    )
}
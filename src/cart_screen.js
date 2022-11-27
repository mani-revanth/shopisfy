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
import { TextField } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
//import {Link} from 'react-router-dom';
import { UseUserAuth } from './context/UserAuthContext';
import { Navigate } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import Marquee from 'react-fast-marquee';
import { map } from '@firebase/util';
import {AiFillInstagram,AiFillLinkedin} from 'react-icons/ai';
import {BsFillTelephoneFill,BsTwitter,BsFacebook} from 'react-icons/bs';
import {ImLocation} from 'react-icons/im';
import {MdSmartphone} from 'react-icons/md';
import {GrMail} from 'react-icons/gr';



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

let abcdefg="bayya";

function CollapsibleExample() {
    let {user,logout}=UseUserAuth();
    abcdefg=user.email;
    const navigation =useNavigate();
    const [cart_length,set_cart_length]=useState("0");
    let total_cost=0;
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
      funny();
    },100);
  },[]);

    return (
      <Navbar collapseOnSelect expand="lg" style={{height:'10vh',backgroundColor:'#150050',fontSize:'1.5rem',boxShadow:'5px 5px 5px black',width:'100%'}}>
        <Container>
        <Navbar.Brand style={{height:'80%',width:'16%',marginRight:'3%',textDecoration:'none'}}>
        <Shopify/>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse style={{backgroundColor:'#150050'}} id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" className='underline' style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>home</Nav.Link>
              <Nav.Link href="/men" className='underline' style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>men</Nav.Link>
              <Nav.Link href="/women" className='underline' style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>women</Nav.Link>
              {user.email=="ch.m.s.revanth@gmail.com" ? null :
              <Nav.Link href="/cart" className='underline' style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>cart({cart_length})</Nav.Link>}
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
  


export default function Cart_screen(){
    let {user}=UseUserAuth();
    abcdefg=user.email;
    const [cart,set_cart]=useState([]);
    const [previous_carts,set_previous_crts]=useState([]);
    const [total_cost,set_total_cost]=useState(0);
    const funny1=()=>{
      axios.post("http://localhost:5000/get_cart_items",{name:`${abcdefg}`}).then((res)=>{
        set_cart(res.data);
        let t=0;
        for(var x of res.data)
        t=t+Number(x.product_cost);
        set_total_cost(t);
        return abcdefg;
      }).then((res)=>{
        axios.post("http://localhost:5000/get_previous_bills",{name:`${res}`}).then((res)=>{
          set_previous_crts(res.data);
        })
      })
    }

    useEffect(()=>{
      setInterval(()=>{
        funny1();
      },1000)
    },[])
    return(
        <div style={{height:'100%',width:'100%'}}>
          <CollapsibleExample/>
          <div style={{height:'90vh',width:'100%',overflowX:'hidden',overflowY:'scroll',backgroundColor:'white',justifyContent:'center',alignItems:'center',textAlign:'center',display:'flex-block'}}>
             <div style={{height:'auto',maxWidth:'40rem',minWidth:'30rem',backgroundColor:'#C060A1',margin:'20px',border:'5px solid black',borderRadius:'10px',boxShadow:'1px 1px 10px black',marginLeft:'27%'}}>
                {(cart.length)?
                <>
                {
                cart.map((card,i)=>{
                  return(
                    <div key={i}>
                      <div style={{height:'5vh',width:'100%',display:'inline-flex',justifyContent:'space-between',padding:'2%'}}>
                        <h1>{card.product_title}</h1>
                        <h1>{card.product_cost}</h1>
                        <button  style={{height:'3rem',width:'10%',borderRadius:'5px',backgroundColor:'red',color:'white',fontSize:'60%'}}
                        onClick={()=>{
                          axios.post("http://localhost:5000/remove_item_from_cart",{name:`${abcdefg}`,id:`${card._id}`}).then((res)=>{
                            if(res.data=="yes")
                            alert("item was removed from your cart");
                          })
                        }}>delete</button>
                      </div>
                      <hr/>
                    </div>
                  )
                })}
                <div style={{width:'100%',height:'5vh',justifyContent:'space-between',display:'inline-flex'}}>
                <h1>{total_cost}</h1>
                <button style={{height:'100%',width:'40%',borderRadius:'5px',backgroundColor:'#5F8D4E',border:'3px solid green',boxShadow:'1px 1px 3px green',marginRight:'1%',color:'white',}}
                onClick={async ()=>{
                  await axios.post("http://localhost:5000/generate_bill",{
                    user_name:`${abcdefg}`,
                    time:`${new Date().toLocaleDateString()}`+`  ${new Date().toLocaleTimeString()}`,
                    bill_status:"order placed",
                    cart_items:cart,
                  }).then((res)=>{
                    if(res.data=="yes")
                    {
                    //alert("your order was placed now");
                    return abcdefg;
                    }
                  }).then((res)=>{
                    axios.post("http://localhost:5000/empty_the_cart",{name:`${res}`}).then((res)=>{
                      if(res.data=="yes")
                      return abcdefg;
                    })
                  })
                }}
                ><h3>BUY</h3></button>
                </div>
                </>
                :
                <h1>oops the cart was empty , feel free to fill it</h1>
                }
             </div>
             <div style={{width:'100%',height:'10%',backgroundColor:'black',color:'white',}}><h1>previous orders</h1></div>
             {
              previous_carts.map((card,i)=>{
                return(
                  <div key={i} style={{height:'auto',maxWidth:'40rem',minWidth:'30rem',backgroundColor:'#EEF1FF',margin:'20px',border:'5px solid #EEEEEE',borderRadius:'10px',boxShadow:'1px 1px 10px black',marginLeft:'27%'}}>
                    <div style={{height:'5vh',width:'100%',display:'inline-flex',justifyContent:'end',padding:'2%'}}>
                      <h3>{card.time}</h3>
                    </div>
                    <hr/>
                    {
                      card.cart_items.map((bill_item,k)=>{
                        return(
                          <div key={k} style={{height:'5vh',width:'100%',display:'inline-flex',justifyContent:'space-between',padding:'2%'}}>
                           <h3>{bill_item.product_title}</h3>
                           <h3>{bill_item.product_cost}</h3>
                          </div>
                        )
                      })
                    }
                    <hr/>
                    <div style={{height:'5vh',width:'100%',display:'inline-flex',justifyContent:'space-between',padding:'2%'}}>
                           <h3>total</h3>
                           <h3>{totaol_cost_products(card.cart_items)}</h3>
                        </div>
                    <hr/>
                    
                    <div style={{height:'5vh',width:'100%',display:'inline-flex',justifyContent:'space-around',}}>
                      <h1>status : {card.bill_status}</h1>
                    </div>
                  </div>
                )
              })
             }
          </div>
        </div>
    )
}
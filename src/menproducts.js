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
import {AiFillInstagram,AiFillLinkedin} from 'react-icons/ai';
import {BsFillTelephoneFill,BsTwitter,BsFacebook} from 'react-icons/bs';
import {ImLocation} from 'react-icons/im';
import {MdSmartphone} from 'react-icons/md';
import {GrMail} from 'react-icons/gr';
import {
  Routes,
  Route,
} from 'react-router-dom';
import ProtectedRoute from './components/protected';
//import {useNavigate} from 'react-router-dom';


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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
  

const add_new_card_men=(link,name)=>{
  axios.post("http://localhost:5000/add_men_card",{
    card_name:`${name}`,
    card_image_src:`${link}`,
    products_array:[],
  }).then((res)=>{
    if(res.data=="yes")
    alert("new card added successfully");
  })
}



export function Men_products()
{
    let {user}=UseUserAuth();
    const [link,setLink]=useState("");
    const [name,setName]=useState("");
    const [men_cards_array,set_men_cards_arry]=useState([]);
    let navigate_to=useNavigate();
    useEffect(()=>{
      axios.post("http://localhost:5000/get_men_cards",{}).then((res)=>{
        set_men_cards_arry(res.data);
      })
    },[men_cards_array]);
    return(
        <div>
            <CollapsibleExample/>
            <div style={{height:'90vh',backgroundColor:'#C539B4',width:'100%',overflowY:'scroll',overflowX:'hidden',justifyContent:'center',alignItems:'center',display:'grid',gridTemplateColumns:'repeat(auto-fit,30rem)'}}>
                
                {
                  men_cards_array.map((card,i)=>{
                    return(
                      <div key={i} className="product_card" onClick={()=>{navigate_to(`/men/${card._id+card.card_name}`)}} style={{height:'20rem',boxShadow:'1px 10px 10px',border:'3px solid black',backgroundImage:`url(${card.card_image_src})`,backgroundSize:'cover',width:'20rem',margin:'2rem',borderRadius:'10px',backgroundColor:'white',justifyContent:'center',textAlign:'center',alignItems:'center',flex:1}}>
                         <h1>{card.card_name}</h1>
                      </div>
                    )
                  })
                }

                {user.email=="ch.m.s.revanth@gmail.com" ? <div style={{height:'20rem',width:'20rem',margin:'2rem',borderRadius:'10px',backgroundColor:'white',justifyContent:'space-around',textAlign:'center',alignItems:'center',}}>
                   <input type="text" style={{marginTop:'25%',fontSize:'1rem',height:'10%',width:'80%',borderRadius:'10px'}} id="a11" placeholder="image link" onChange={(e)=>{setLink(e.target.value)}}/>
                   <input type="text" style={{marginTop:'25%',fontSize:'1rem',height:'10%',width:'80%',borderRadius:'10px'}} id="b11" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
                   <button style={{backgroundColor:'blue',borderRadius:'10px',marginTop:'3%'}} onClick={(e)=>{e.preventDefault();add_new_card_men(link,name);
                   document.getElementById("a11").value="";
                   document.getElementById("b11").value="";
                   }}>add new card</button>
                </div> :null}   
            </div>
        </div>
    )
}

const push_card_into_array =(name,link,des,cost,id1)=>{
  axios.post("http://localhost:5000/push_cards_into_array",{
    id:`${id1}`,
    card_title:`${name}`,
    card_description:`${des}`,
    card_image_src:`${link}`,
    card_cost:`${cost}`,
    warning:" ",
  }).then((res)=>{
    if(res.data=="yes")
    alert("card added succesfully");
  })
}

const delete_card_from_array=(id1,id2)=>{
  axios.post("http://localhost:5000/remove_card_from_array",{main_id:id1,temp_id:id2}).then((res)=>{
    if(res.data=="yes")
    alert("card removed succesfully");
  })
}


function Cardproductscreen(props){
  const [name,setName]=useState("");
  const [link,setLink]=useState("");
  const [des,setDes]=useState("");
  const [cost,setCost]=useState("");
  const [sub_cards_array,set_sub_cards_array]=useState([]);
  let {user}=UseUserAuth();
  useEffect(()=>{
    axios.post("http://localhost:5000/get_sub_cards_men",{id:props.id}).then((res)=>{
      set_sub_cards_array(res.data);
      //console.log(res.data);
      //if(res.data=="yes")
      //alert("card were added succesfully");
    })
  },[sub_cards_array]);
  return(
    <div>
      <CollapsibleExample/>
      <div style={{height:'90vh',backgroundColor:'#C539B4',width:'100%',overflowY:'scroll',overflowX:'hidden',justifyContent:'center',alignItems:'center',display:'grid',gridTemplateColumns:'repeat(auto-fit,30rem)'}}>


    {
      sub_cards_array.map((card,i)=>{
        return(
          <div key={i} className="product_card" style={{height:'25rem',width:'20rem',backgroundColor:'white',borderRadius:'10px',boxShadow:'1px 1px 10px black',justifyContent:'center',textAlign:'center',border:'5px solid black'}}>
            <img src={card.card_image_src} style={{width:'100%',height:'50%',borderTopRightRadius:'10px',borderTopLeftRadius:'10px',borderBottom:'5px solid black'}}></img>
            <h1>{card.card_title}</h1>
            <p>{card.card_description}</p>
            <p>cost : {card.card_cost}</p>
            {
              user.email=="ch.m.s.revanth@gmail.com" ?
              <button style={{height:'10%',width:'60%',backgroundColor:'blue',borderRadius:'5px'}} onClick={(e)=>{
                e.preventDefault();
                delete_card_from_array(props.id,card._id);
              }}>delete card</button> :
              <button style={{height:'10%',width:'60%',backgroundColor:'blue',borderRadius:'5px'}}
              onClick={(e)=>{
              e.preventDefault();
              axios.post("http://localhost:5000/add_item_to_cart",{
                name:`${user.email}`,
                title:`${card.card_title}`,
                cost:`${card.card_cost}`,
              }).then((res)=>{
                if(res.data=="yes")
                alert("item was added to cart succesfully");
                
              })
            }}
              >add to cart</button>
            }
          </div>
        )
      })
    }


      {user.email=="ch.m.s.revanth@gmail.com" ? <div style={{padding:'10%',height:'25rem',width:'20rem',margin:'2rem',borderRadius:'10px',backgroundColor:'white',justifyContent:'space-evenly',textAlign:'center',alignItems:'center',}}>
                   <input type="text" id="a12" style={{margin:'6%'}}  placeholder="name" onChange={(e)=>{setName(e.target.value);}}/>
                   <input type="text" id="b12" style={{margin:'6%'}}  placeholder="image link" onChange={(e)=>{setLink(e.target.value)}}/>
                   <input type="text" id="c12" style={{margin:'6%'}}  placeholder="description" onChange={(e)=>{setDes(e.target.value);}}/>
                   <input type="text" id="d12" style={{margin:'6%'}}  placeholder="cost" onChange={(e)=>{setCost(e.target.value);}}/>
                   <button style={{backgroundColor:'blue',borderRadius:'10px',marginTop:'3%'}} onClick={(e)=>{e.preventDefault();
                   if(name.trim()!="" && link.trim()!="" && des.trim()!="" && cost.trim()!="")
                   {
                   push_card_into_array(name,link,des,cost,props.id);
                   setName("");
                   setCost("");
                   setDes("");
                   setLink("");
                   document.getElementById("a12").value="";  
                   document.getElementById("b12").value="";
                   document.getElementById("c12").value="";
                   document.getElementById("d12").value="";
                   }
                   else
                   alert("please fill all the fields");
                   }}>add new card</button>
                </div> :null}   
      </div>
    </div>
  )
}

export default function Routes_men_products(){
  const [temp_array,set_temp_array]=useState([]);
  useEffect(()=>{
    axios.post("http://localhost:5000/get_men_cards",{}).then((res)=>{
      set_temp_array(res.data);
    })
  })
  return(
    <Routes>
      <Route exact path="/" element={<ProtectedRoute><Men_products/></ProtectedRoute>}/>
      {
        temp_array.map((card,i)=>{
          return(
            <Route key={i} exact path={`/${card._id+card.card_name}`} element={<ProtectedRoute><Cardproductscreen id={`${card._id}`} /></ProtectedRoute>}/>
          )
        })
      }
    </Routes>
  )
}
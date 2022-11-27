import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Navigate } from 'react-router-dom';
import { UseUserAuth } from '../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';

export default function Billing_protected_route({children}){
    //let {user}= UseUserAuth();
    let navigation=useNavigate();
    let {user}=UseUserAuth();
    if(UseUserAuth())
    {
    if(user.email=="ch.m.s.revanth@gmail.com")
    return children;
    else
    navigation("/");
    }
    else
    navigation("/");
}
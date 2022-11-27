//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing_page from './landing_page';
import Login from './login';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Switch from "react-router-dom";
import {UserAuthContextProvider} from "./context/UserAuthContext";
import Home from './home';
import ProtectedRoute from './components/protected';
import { UseUserAuth } from './context/UserAuthContext';
//import Men_products from './menproducts';
//import Women_products from './womenproducts';
import Routes_men_products from "./menproducts";
import Routes_women_products from './womenproducts';
import Cart_screen from './cart_screen';
import Billing_protected_route from './components/billing_protected_route';
import Billing_screen from './admin_cart';
//import {Men_products} from './menproducts';





function App() {
  return (
    <Router>
      <UserAuthContextProvider>
      <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Landing_page/>}/>
            <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
            <Route path="/cart" element={<ProtectedRoute><Cart_screen/></ProtectedRoute>}/>
            <Route path="/billing" element={<Billing_protected_route><Billing_screen/></Billing_protected_route>}/>
            <Route exact path="/men/*" element={<Routes_men_products/>}/>
            <Route exact path="/women/*" element={<Routes_women_products/>}/>
      </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;

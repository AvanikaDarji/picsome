import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Link, Route, Switch } from 'react-router-dom';
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";



function App() {
    return ( <div className = "App" >
    
<Header/>
<Switch>
<Route path="/photos"><Photos/></Route>
<Route path="/cart"><Cart/></Route>
</Switch>

         </div>
        
    );
}

export default App;
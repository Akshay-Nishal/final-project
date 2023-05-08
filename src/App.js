import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import Account from './screens/account';
import Settings from './screens/settings';
import Dashboard from './screens/dashboard';
import Reports from './screens/reports';
import Products from './screens/products';
import { useEffect, useState, useContext } from 'react';
import { DataContext } from './contexts/maindata';
import { UserContext } from './contexts/currentuser';
import Footer from './components/footer';
function App(){

  const {accounts,setAccounts,dashboard,setDashboard,products,setProducts} = useContext(DataContext)
  useEffect(()=>{
    fetch("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
    .then(res=>res.json())
    .then((items) => {
      setAccounts(items.accountsPage)
      setDashboard(items.dashboardPage)
      setProducts(items.setpdoductsPage)
      console.log(items);
      console.log("Accouts ---- ",accounts);
      })
    },[])
  var Login;
  if(localStorage.getItem('login')){
    Login = localStorage.getItem('login')
  }
  else{
    Login = true
    localStorage.setItem('login','true')
  }
  const onlogin =()=>{
    var usr =document.getElementById('USR').value
    var pass =document.getElementById('PASS').value
    if (usr===pass){
      localStorage.setItem('login','true')
      Login=true
    }
    else{
      window.alert("Invalid Credentials");
    }
  }


  return (
    <div className="App">
      {(Login=='true')?
      <BrowserRouter>
      <Navbar/>
      {/* <h1>{currentUser.name}</h1> */}
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        {/* <Route path="/products" element={<ProductScreen products={products}/>}></Route> */}
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/reports" element={<Reports/>}></Route>
        <Route path="/account" element={<Account/>}></Route>
        <Route path="/settings" element={<Settings/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
      :
      <div className="form">
        {console.log("Dash -- ",dashboard)}
        <div className='login-head'>
          <center><h1>Please login to continue to website</h1>
          </center>
        </div>
      <form >
        <center>
        <p>Welcome to Dashboard, Login</p>
        </center>
        <label htmlFor="USR">Username</label>
        <input style={{color:'black'}} id='USR' type="text" />
        <label htmlFor="PASS">Password</label>
        <input style={{color:'black'}} id='PASS' type="password" />
        <button onClick={onlogin}>LOGIN</button>
        <button id='FP' >FORGOR YOUR PASSWORD?</button>
      </form>
      <Footer/>
      </div>
      }
      
    </div>
  );
}

export default App;

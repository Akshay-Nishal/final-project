import './App.css';
import Footer from './components/footer';
import Home from './screens/home';
import { DataContext } from './contexts/maindata';
import { useEffect, useState, useContext } from 'react';
function App(){

  const {accounts,setAccounts,dashboard,setDashboard,products,setProducts} = useContext(DataContext)
  useEffect(()=>{
    fetch("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
    .then(res=>res.json())
    .then((items) => {
      setAccounts(items.accountsPage)
      setDashboard(items.dasbhoardPage)
      setProducts(items.setpdoductsPage)
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
      <Home/>
      :
      <div className="form">
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

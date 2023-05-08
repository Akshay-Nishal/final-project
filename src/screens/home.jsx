import '../App.css';
import Navbar from '../components/navbar';
import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import Account from '../screens/account';
import Settings from '../screens/settings';
import Dashboard from '../screens/dashboard';
import Reports from '../screens/reports';
import Products from '../screens/products';
import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../contexts/maindata';
import Footer from '../components/footer';
function Home(){

//   const {accounts,setAccounts,dashboard,setDashboard,products,setProducts} = useContext(DataContext)
//   useEffect(()=>{
//     fetch("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
//     .then(res=>res.json())
//     .then((items) => {
//       setAccounts(items.accountsPage)
//       setDashboard(items.dasbhoardPage)
//       setProducts(items.setpdoductsPage)
//       })
//     },[])

  return (
    <div className="App">
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
    </div>
  )
}

export default Home;

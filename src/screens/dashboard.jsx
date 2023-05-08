import React, { useContext } from 'react'
import '../App.css';
import { DataContext } from '../contexts/maindata';


export default function Dashboard() {
  const {accounts,setAccounts,dashboard,setDashboard,products,setProducts} = useContext(DataContext)
  console.log('ACC--- ',accounts);
  return (
    <div className='dashboard'>
      <p>Welcome back, <span>Admin</span></p>
      {/* {dashboard.map((db)=>{
        return(<h2>hi</h2>)
      })} */}
    </div>
  )
}

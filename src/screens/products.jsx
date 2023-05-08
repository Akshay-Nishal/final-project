import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../contexts/maindata';

export default function Products() {
  const {accounts,setAccounts,dashboard,setDashboard,products,setProducts} = useContext(DataContext)
  console.log('products',accounts);
  console.log('products',dashboard);
  return (
    <div>P</div>
  )
}

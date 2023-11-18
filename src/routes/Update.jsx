import React from 'react'
import UpdateProduct from '../components/Products/UpdateProduct'
import {useState, useEffect} from "react";
import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
function Inserts() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000").then((res) => {
      let data = res.data;
      return setData(data);
    });
  }, [Data]);
  return (
    <>
    <Header></Header>
    <div className='grid grid-cols-2 m-10'>
      <UpdateProduct values={{Data}}></UpdateProduct>
    </div>
    <Footer></Footer>
    </>
    )
}

export default Inserts
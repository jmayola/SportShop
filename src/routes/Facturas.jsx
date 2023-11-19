import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import axios from 'axios';
import DeleteProducts from '../components/Products/DeleteProducts';
function Facturas() {
    const [Data, setData] = useState([]);
    useEffect(() => {
        (async()=>{axios.get("http://localhost:3000").then((res) => {
          let data = res.data;
          return setData(data);
        });})
      }, []);
  return (
    <>
    <Header></Header>
        <form action="" className='flex flex-col place-content-center place-items-center'>
            <label className='border-2 w-80 text-center border-slate-950' htmlFor="fecha">Fecha</label>
            <input className='border-2 w-80 text-center border-slate-950' type="date" name="fecha" id="" />
                <label className='border-2 w-80 text-center border-slate-950' htmlFor="cant">Cantidad</label>
                <input className='border-2 w-80 text-center border-slate-950' type="number" name='cant' />
                <label className='border-2 w-80 text-center border-slate-950' htmlFor="price">Precio</label>
                <input className='border-2 w-80 text-center border-slate-950' type="number" name='price' />
                <label className='border-2 w-80 text-center border-slate-950' htmlFor="price">Nro Factura</label>
                <input className='border-2 w-80 text-center border-slate-950' type="number" name='' />
        </form>
    <Footer></Footer>
    </>
    )
}

export default Facturas
import axios from "axios";
import React, { useEffect, useState } from "react";
export default function DeleteProducts(){
    const [Data, setData] = useState([])
    useEffect(() => {
      axios.get("http://localhost:3000/").then((res) => {
        let data = res.data;
        return setData(data);
      });
    }, []);
    console.log(Data)
    return(
        <>
            <select name="" id="">
                {Data.forEach((val,i)=>{
                return(<option value={i}>{i}</option>)
                })}
            </select>
                <h1>{Data[1].id_products}</h1>
        </>
    )
}
import {
} from "react-router-dom";
import data from "../../database/db"
import { useState } from "react";
function ProductsCard(children) {
  const [Data, setData] = useState(data)
  let id = children.values
  return (
    <>
      <div className="bg-slate-500 w-max">
        <h3>{data[id].nombre}</h3>
        <h3>{data[id].precio}</h3>
        <h3>{data[id].marca}</h3>
      </div>
    </>
  )
}

export default ProductsCard;

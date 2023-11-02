import React from "react"
function ProductsCard(children) {
  let prop = children.value
  let Data = prop.Data
  let index = prop.i
  
  return (
    <>
      <div className="bg-slate-500 w-max">
        <p>{Data[index].products_name}</p>
        <p>{Data[index].price}</p>
        <p>{Data[index].mark}</p>
      </div>
    </>
  )
}

export default ProductsCard;

import React from "react"
function ProductsCard(children) {
  let prop = children.value
  let Data = prop.Data
  let index = prop.i

  return (
    <>
      {/* <div className="bg-slate-500 w-max">
        <p>{Data[index].product_name}</p>
        <p>{Data[index].price}</p>
        <p>{Data[index].mark}</p>
      </div> */}


      {/* Sección de productos/cartas */}
      <div className="flex justify-center p-1 border border-gray-300 hover:shadow-2xl duration-500 ">
        <div className="gap-10">
          <img src="public/camiseta3.png" alt="" />
          <h2 className="p-2 font-inter font-bold">{Data[index].product_name}</h2>
          <span className="font-inter font-bold p-2">{Data[index].price}</span>
        </div>
      </div>
    </>
  )
}

export default ProductsCard;

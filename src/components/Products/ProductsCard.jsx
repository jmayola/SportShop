import React from "react"
function ProductsCard(children) {
  let prop = children.value
  let Data = prop.Data
  let index = prop.i

  return (
    <>
      <div className="flex justify-center p-1 border border-gray-300  hover:shadow-2xl duration-500 ">
        <div className="gap-10">
          <img src={"/" + Data[index].image_products} alt="" />
          <h2 className="p-2 font-inter font-bold">{Data[index].name_products}</h2>
          <span className="font-inter font-bold p-2">{Data[index].price_products}</span>
          <span className="font-inter font-bold p-2">{Data[index].desc_products}</span>
        </div>
      </div>
    </>
  )
}

export default ProductsCard;

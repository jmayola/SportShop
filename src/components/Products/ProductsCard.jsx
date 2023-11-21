import React from "react";
function ProductsCard(children) {
  let prop = children.value;
  let Data = prop.Data;
  let index = prop.i;
  let index2 = prop.id;
  if (index2) {
    return (
      <>
        <div className="grid place-content-center m-auto w-2/3 p-1 border border-gray-300  hover:shadow-2xl duration-500 ">
          <h1 className="m-auto text-xl">Producto Editandose:</h1>
          <div className="gap-10">
            <img src={"/" + Data[index2].image_products} alt="" />
            <h2 className="p-2 font-inter font-bold">
              {Data[index2].name_products}
            </h2>
            <span className="font-inter font-bold p-2">
              {Data[index2].price_products}
            </span>
            <span className="font-inter font-bold p-2">
              {Data[index2].desc_products}
            </span>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex justify-around flex-col border border-gray-300  hover:shadow-2xl duration-500 ">
          <div className="">
            <img src={"/" + Data[index].image_products} alt="" />
            <div className=" bg-orange-400 justify-end align-bottom">
            <h2 className="p-2 font-inter font-bold text-center  underline">
              {Data[index].name_products}
            </h2>
            <span className="font-inter font-bold p-2">
              {Data[index].price_products}
            </span>
            <span className="font-inter font-bold p-2">
              {Data[index].desc_products}
            </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductsCard;

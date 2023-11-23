import React from "react";
import { Link } from "react-router-dom";
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
        <Link to={"/products/" + (Data[index].id_products - 1)}>
          <div className="flex flex-row overflow-hidden border border-gray-300 h-full  hover:shadow-2xl duration-500 ">
            <div className="flex flex-col justify-center align-middle gap-5">
              <img
                src={"/" + Data[index].image_products}
                className="h-2/3 "
                alt=""
              />
              <div className="h-1/4">
                <span className="font-OpenSans text-stone-900 font-medium px-5 text-2xl">
                  ${Data[index].price_products}
                </span>
                <h2 className="px-5 font-inter text-left text-lg overflow-hidden ">
                  {Data[index].name_products}
                </h2>
                <span className="font-OpenSans text-sm px-5 overflow-hidden h-10">
                  {Data[index].desc_products}
                </span>
                <div className="grid place-content-around "></div>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  }
}

export default ProductsCard;

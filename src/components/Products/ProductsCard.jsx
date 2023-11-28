import React from "react";
import { Link } from "react-router-dom";
function ProductsCard(children) {
  let prop = children.value;
  let Data = prop.Data;
  let index = prop.i;
  return (
    <>
      <div className="flex flex-row overflow-hidden border border-gray-300 h-full  hover:shadow-2xl duration-500 ">
        <div className="flex flex-col justify-around align-middle">
          <img
            src={"/" + Data[index].image_products}
            className="h-2/3"
            alt=""
          />
          <div className="h-1/4">
            <h2 className="p-2 font-inter text-left text-lg overflow-hidden h-10">
              {Data[index].name_products}
            </h2>
            <span className="font-OpenSans text-sm p-2 overflow-hidden h-10">
              {Data[index].desc_products}
            </span>
            <div className="grid place-content-around p-5">
              <span className="font-OpenSans text-stone-900 px-5 text-2xl ">
                ${Data[index].price_products}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsCard;

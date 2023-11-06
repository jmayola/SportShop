import React from "react"
function ProductsCard(children) {
  let prop = children.value
  let Data = prop.Data
  let index = prop.i

  return (
    <>
      <div className="bg-slate-500 w-max">
        <p>{Data[index].product_name}</p>
        <p>{Data[index].price}</p>
        <p>{Data[index].mark}</p>
      </div>


      {/* Sección de productos/cartas */}
      <section>
        <div className="flex justify-center p-10 font-inter">
          <h1 className="font-semibold text-4xl">Productos</h1>
        </div>
        {/* Grid de productos*/}
        <section className=" grid grid-cols-5 gap-5  ">
          <div className="flex justify-center p-1 border border-gray-300  hover:shadow-2xl duration-500 ">

            <div>
              <img src="public/botin1.png" alt="" />
              <h2 className="p-2 font-inter font-bold">Nombre del producto</h2>
              <span className="font-inter font-bold p-2">$99.999</span>
            </div>

          </div>

          <div className="flex justify-center p-1 border border-gray-300  hover:shadow-2xl duration-500">
            <div>
              <img src="public/botin2.png" alt="" />
              <h2 className="p-2 font-inter font-bold">Nombre del producto</h2>
              <span className="font-inter font-bold p-2">$99.999</span>
            </div>
          </div>

          <div className="flex justify-center p-1 border border-gray-300  hover:shadow-2xl duration-500 ">
            <div>
              <img src="public/botin3.png" alt="" />
              <h2 className="p-2 font-inter font-bold">Nombre del producto</h2>
              <span className="font-inter font-bold p-2">$99.999</span>
            </div>
          </div>

          <div className="flex justify-center p-1 border border-gray-300  hover:shadow-2xl duration-500">
            <div>
              <img src="public/camiseta1.png" alt="" />
              <h2 className="p-2 font-inter font-bold">Nombre del producto</h2>
              <span className="font-inter font-bold p-2">$99.999</span>
            </div>
          </div>

          <div className="flex justify-center p-1 border border-gray-300  hover:shadow-2xl duration-500 ">
            <div>
              <img src="public/camiseta2.png" alt="" />
              <h2 className="p-2 font-inter font-bold">Nombre del producto</h2>
              <span className="font-inter font-bold p-2">$99.999</span>
            </div>
          </div>

          <div className="flex justify-center p-1 border border-gray-300  hover:shadow-2xl duration-500">
            <div>
              <img src="public/botin2.png" alt="" />
              <h2 className="p-2 font-inter font-bold">Nombre del producto</h2>
              <span className="font-inter font-bold p-2">$99.999</span>
            </div>
          </div>

          <div className="flex justify-center p-1 border border-gray-300  hover:shadow-2xl duration-500">
            <div>
              <img src="public/botin2.png" alt="" />
              <h2 className="p-2 font-inter font-bold">Nombre del producto</h2>
              <span className="font-inter font-bold p-2">$99.999</span>
            </div>
          </div>

          <div className="flex justify-center p-1 border border-gray-300  hover:shadow-2xl duration-500">
            <div>
              <img src="public/botin2.png" alt="" />
              <h2 className="p-2 font-inter font-bold">Nombre del producto</h2>
              <span className="font-inter font-bold p-2">$99.999</span>
            </div>
          </div>

          <div className="flex justify-center p-1 border border-gray-300  hover:shadow-2xl duration-500">
            <div>
              <img src="public/botin2.png" alt="" />
              <h2 className="p-2 font-inter font-bold">Nombre del producto</h2>
              <span className="font-inter font-bold p-2">$99.999</span>
            </div>
          </div>

          <div className="flex justify-center p-1 border border-gray-300  hover:shadow-2xl duration-500">
            <div>
              <img src="public/botin2.png" alt="" />
              <h2 className="p-2 font-inter font-bold">Nombre del producto</h2>
              <span className="font-inter font-bold p-2">$99.999</span>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default ProductsCard;

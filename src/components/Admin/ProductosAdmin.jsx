import Header from "../Header";
import Footer from "../Footer";
import SubHeader from "../SubHeader";

function ProductosAdmin() {
  return (
    <>
      <Header></Header>
      <SubHeader></SubHeader>

      <section className="flex justify-center max-[800px]:">
        <div className="flex flex-col w-2/3 border border-gray-300 shadow-lg  p-10">
          <div className="flex justify-center">
            <input
              type="search"
              className="block w-1/2 rounded-lg text-center border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              placeholder="Buscar producto"
            />
          </div>
          <div className="flex justify-between w-full  px-10">
            <div className="   w-full  ">
              <img src="./public/logo-empresa.png" alt="" className="w-auto" />
            </div>
            <div method="post" action="" className="w-full py-10">
              <div className="flex place-content-center place-items-center flex-col ">
                <div className="w-full">
                  <h2 className="flex justify-start px-2 ">
                    Precio por unidad
                  </h2>
                  <input
                    name="usuario"
                    type="text"
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  />
                </div>
                <div className="w-full">
                  <h2 className="flex justify-start px-2">Cantidad en stock</h2>
                  <input
                    name="usuario"
                    type="text"
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  />
                </div>
                <div className="w-full">
                  <h2 className="flex justify-start px-2">Proveedor</h2>
                  <input
                    name="usuario"
                    type="text"
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  />
                </div>
                <div className="w-full">
                  <h2 className="flex justify-start px-2">Marca</h2>
                  <input
                    name="usuario"
                    type="text"
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default ProductosAdmin;

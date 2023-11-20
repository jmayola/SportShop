import Header from "../Header";
import Footer from "../Footer";
import SubHeader from "../SubHeader";

function Usuarios() {
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
              placeholder="Buscar usuario"
            />
          </div>
          <div className="flex justify-center   ">
            <img src="./public/logo-empresa.png" alt="" className="w-auto" />
          </div>

          <div className="flex justify-between px-10">
            <div className="">
              <h2 className="flex justify-start px-2 ">Nombre de usuario</h2>
              <input
                type="text"
                className="block rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              />
            </div>
            <div className="">
              <h2 className="flex justify-start px-2">Numero de teléfono</h2>
              <input
                type="text"
                className="block  rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              />
            </div>
          </div>
          <div className="flex justify-between px-10">
            <div className="">
              <h2 className="flex justify-start px-2">E-mail</h2>
              <input
                type="text"
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              />
            </div>
            <div className="">
              <h2 className="flex justify-start px-2">Dirección </h2>
              <input
                type="text"
                className="block rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Usuarios;

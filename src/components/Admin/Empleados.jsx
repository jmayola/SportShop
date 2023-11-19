import Header from "../Header";
import Footer from "../Footer";

function Empleados() {
  return (
    <>
      <Header></Header>

      <section className="flex justify-center max-[800px]:">
        <div className="flex justify-between w-2/3 border border-gray-300 shadow-lg  py-10">
          <div className="  mx-10 my-auto ">
            <img src="./public/logo-empresa.png" alt="" />
          </div>
          <div className="flex flex-col mx-10 p-5  ">
            <input
              name="usuario"
              type="text"
              className="block w-full rounded-lg border border-gray-300 px- py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              placeholder="Usuario"
            />
            <input
              name="usuario"
              type="text"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              placeholder="Usuario"
            />
            <input
              name="usuario"
              type="text"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              placeholder="Usuario"
            />
            <input
              name="usuario"
              type="text"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              placeholder="Usuario"
            />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Empleados;

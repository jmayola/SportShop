import Header from "../components/Header";
import Footer from "./Footer";
function Ingresar() {
  return (
    <>
      <Header />
      <section className="contenedor ">
        <div className="mx-auto flex flex-col items-start justify-start pb-28 pt-10 sm:max-w-[400px] sm:items-center sm:justify-center sm:pt-20 ">
          <h1 className="mb-2 text-3xl font-semibold sm:mb-5 sm:text-5xl">
            Ingresar
          </h1>
          <form className="w-full">
            <div className="flex place-content-center place-items-center flex-col">
              <input
                name="usuario"
                type="text"
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                placeholder="Usuario"
              />
              <input
                type="password"
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 my-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1 "
                placeholder="Contraseña"
              />
            </div>
            <p className="mb-3 mt-2 text-sm text-gray-500">
              <a
                href="/forgot-password"
                className="text-blue-800 hover:text-blue-600"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </p>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
            >
              Continuar
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-slate-600">
            ¿No tienes una cuenta?
            <a
              href="/Registrar"
              className="font-medium text-blue-700 hover:text-blue-600"
            >
              Registrate
            </a>{" "}
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default Ingresar;

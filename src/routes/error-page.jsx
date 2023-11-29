import { Link, redirect, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
setInterval(()=>{
  redirect("/")
},1000)
  return (
    <div className="grid place-content-center text-center m-auto min-h-screen w-full" id="error-page">
      <h1 className="text-center text-7xl font-black ">Oops!</h1>
      <p className="text-center text-2xl font-bold">Error en la Carga de Datos</p>
      <p>
        <i className="text-center border-b-2 text-red-600 border-red-700">{error.statusText || error.message}</i>
      </p>
      <Link to={"/"} className="border-b-2 w-fit flex hover:font-semibold text-center m-auto gap-10">Volver</Link>
    </div>
  );
}
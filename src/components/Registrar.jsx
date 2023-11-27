import { Form, Link,redirect } from "react-router-dom";
import Header from "../components/Header";
import Footer from "./Footer";
import axios from "axios";
export default function Registrar() {
  return (
    <>
      <Header />
      <section className="contenedor ">
        <div className="mx-auto flex flex-col items-start justify-start pb-28 pt-10 sm:max-w-[400px] sm:items-center sm:justify-center sm:pt-20 ">
          <h1 className="mb-2 text-3xl font-semibold sm:mb-5 sm:text-5xl">
            Registrar
          </h1>
          <Form method="POST" action="/Registrar" className="w-full">
            <div className="flex place-content-center place-items-center flex-col">
              <input
                name="user"
                type="text"
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 my-1 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                placeholder="Nombre de Usuario"
              />
              <input
                name="fullname"
                type="text"
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 my-1 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                placeholder="Nombre Completo"
              />

              <input
                name="email"
                type="email"
                autoComplete="email"
                required=""
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 my-1 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                placeholder="Email"
              />

              <input
                type="password"
                name="password"
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 my-1 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1 "
                placeholder="Contraseña"
              />
            </div>
            <input type="submit" value="Registrarse" className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400" />
          </Form>
          <div className="mt-6 text-center text-sm text-slate-600">
            ¿Ya tienes una cuenta?
            <Link
              to="/Ingresar"
              className="font-medium text-blue-700 hover:text-blue-600"
            >
               Ingresar
            </Link>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
export const registerUserAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    user: data.get("user"),
    fullname: data.get("fullname"),
    email: data.get("email"),
    password: data.get("password")
  };
  axios.post("http://localhost:3000/users/register", submission)
  .catch((res)=>{
    if(res.response.status == 505){
      alert("Algunos campos poseen caracteres invalidos y/o superan los limites indicados")
    }
  }).then((res)=>{
    console.log(res)
  })
  return redirect("/");
};

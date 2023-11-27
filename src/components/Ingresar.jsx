// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import Footer from "./Footer";
import { Form, redirect } from "react-router-dom";
import axios from "axios";
export default function Ingresar() {
  return (
    <>
      <Header />
      <section className="contenedor ">
        <div className="mx-auto flex flex-col items-start justify-start pb-28 pt-10 sm:max-w-[400px] sm:items-center sm:justify-center sm:pt-20 ">
          <h1 className="mb-2 text-3xl font-semibold sm:mb-5 sm:text-5xl">
            Ingresar
          </h1>
          <Form method="post" action="/Ingresar" className="w-full">
            <div className="flex place-content-center place-items-center flex-col">
              <input
                name="username"
                type="text"
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                placeholder="Usuario"
              />
              <input
                type="password"
                name="password"
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
            <button className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400">
              Ingresar
            </button>
          </Form>
          <div className="mt-6 text-center text-sm text-slate-600">
            ¿No tienes una cuenta?
            <a
              href="/Registrar"
              className="font-medium text-blue-700 hover:text-blue-600"
            >
              Registrate
            </a>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export const loginUserAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    username: data.get("username"),
    password: data.get("password"),
  };
  axios
    .post("http://localhost:3000/users", submission)

    .then((res) => {
      if (res.status == 200) {
        localStorage.setItem("usuario", submission.username);
      }
    })
    .catch((err) => {
      if (err.response.status == 505)
        alert("Usuario Invalido, vuelve a ingresar");
    });
  return redirect("/");
};

// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import Footer from "./Footer";
import { Form, redirect } from "react-router-dom";
function ContactUs() {
  return (
    <>
      <Header />
      <section className="contenedor ">
        <div className="mx-auto flex flex-col items-start justify-start pb-28 pt-10 sm:max-w-[400px] sm:items-center sm:justify-center sm:pt-20 ">
          <h1 className="mb-2 text-3xl font-semibold sm:mb-5 sm:text-5xl">
            Contactanos
          </h1>
          <form
            method="post"
            action="/Ingresar"
            className="flex flex-col w-full"
          >
            <div className="flex place-content-center place-items-center flex-col">
              <input
                name="name"
                type="text"
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                placeholder="Nombre completo"
              />
              <input
                type="email"
                name="email"
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 my-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1 "
                placeholder="Email"
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Mensaje"
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 my-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1 "
              ></textarea>
            </div>

            <button className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400">
              Enviar
            </button>
          </form>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default ContactUs;

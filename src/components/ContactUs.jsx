// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import Footer from "./Footer";
function ContactUs() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center">
        <div className=" py-8">
          <h1 className="mb-4 text-5xl font-semibold">Contáctanos</h1>
          <form
            method="post"
            action="/Ingresar"
            className="flex flex-col w-full"
          >
            <div className="flex flex-col gap-y-3">
              <input
                name="name"
                type="text"
                className="rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black"
                placeholder="Nombre completo"
              />
              <input
                type="email"
                name="email"
                className="rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black"
                placeholder="Email"
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Mensaje"
                className="rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black"
              ></textarea>
              <button className="flex justify-center rounded-lg bg-black py-3 text-sm font-semibold text-white outline-none focus:ring-1 focus:ring-black">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default ContactUs;

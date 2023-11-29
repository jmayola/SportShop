function AboutUs() {
  return (
    <section id="aboutus" className="p-10">
      <div className="flex justify-center p-10 font-inter">
        <h1 className="font-semibold text-4xl relative cursor-pointer py-2 no-underline mx-3 after:absolute after:left-0 after:bottom-1.5 after:w-full after:h-1 after:bg-[#cd3320] after:rounded-md after:scale-x-0 after:transition-transform hover:py-2 hover:after:scale-x-100">
          Sobre nosotros
        </h1>
      </div>

      <section className="md:grid md:grid-cols-2 flex flex-col">
        <img src="public/about1.jpg" alt="" className="w-full rounded-lg" />
        <p className=" text-justify bg-gray-50 p-5 rounded-md w-auto mx-5 my-3">
          Desde su fundación en 2010, nuestra empresa ha experimentado un
          crecimiento significativo y una evolución en la gama de productos que
          ofrecemos. Iniciamos nuestras operaciones con la venta de remeras,
          pantalones y calzado deportivo, pero rápidamente ampliamos nuestro
          alcance hacia el mercado de accesorios y productos especializados en
          deportes como hockey, fútbol y natación. Esta expansión estratégica
          nos ha permitido diversificar nuestra oferta y atender las crecientes
          demandas de nuestros clientes.
        </p>
      </section>
      <section className="md:grid md:grid-cols-2 flex flex-col">
        <p className="text-justify bg-gray-50 p-5 rounded-md w-auto mx-5 my-3">
          A lo largo de estos años, hemos pasado de contar con tres empleados
          iniciales a formar un sólido equipo de 30 personas que colaboran de
          manera coordinada para el éxito de la empresa. Esta fuerza laboral
          comprometida y diversa es un activo fundamental que impulsa nuestra
          capacidad para ofrecer productos de calidad y servicios excepcionales
          a nuestros clientes.
        </p>
        <img src="public/about2.png" alt="" className="w-auto rounded-lg" />
      </section>
      <section>
        <p className="-justify bg-gray-50 p-5 rounded-md">
          Aunque no contamos con un local físico para la venta directa, nuestra
          oficina central de coordinación ubicada en Av. Corrientes 1115, C1010
          CABA, sirve como el epicentro desde el cual gestionamos todas nuestras
          operaciones. Esta ubicación estratégica nos brinda una base operativa
          eficiente y facilita la coordinación de nuestras actividades en la
          dinámica ciudad de Buenos Aires. Con un enfoque en la calidad, la
          innovación y el compromiso con nuestros clientes, seguimos avanzando
          hacia el futuro con la determinación de seguir siendo líderes en el
          mercado deportivo.
        </p>
      </section>
    </section>
  );
}

export default AboutUs;

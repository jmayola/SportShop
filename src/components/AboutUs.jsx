function AboutUs() {
  return (
    <section id="aboutus" className="flex flex-col gap-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex-row sm:gap-x-5">
        <img
          src="public/about1.jpg"
          alt=""
          className="hidden md:flex sm:rounded-md "
        />
        <p className="bg-gray-50 p-5 rounded-md">
          Desde su fundación en 2010, nuestra empresa ha experimentado un
          crecimiento significativo y una evolución en la gama de productos que
          ofrecemos. Iniciamos nuestras operaciones con la venta de remeras,
          pantalones y calzado deportivo, pero rápidamente ampliamos nuestro
          alcance hacia el mercado de accesorios y productos especializados en
          deportes como hockey, fútbol y natación. Esta expansión estratégica
          nos ha permitido diversificar nuestra oferta y atender las crecientes
          demandas de nuestros clientes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex-row sm:gap-x-5 ">
        <p className="bg-gray-50 p-5 rounded-md">
          A lo largo de estos años, hemos pasado de contar con tres empleados
          iniciales a formar un sólido equipo de 30 personas que colaboran de
          manera coordinada para el éxito de la empresa. Esta fuerza laboral
          comprometida y diversa es un activo fundamental que impulsa nuestra
          capacidad para ofrecer productos de calidad y servicios excepcionales
          a nuestros clientes.
        </p>
        <img
          src="public/about2.png"
          alt=""
          className="hidden md:flex sm:rounded-md lg:w-full"
        />
      </div>
      <div className="flex flex-col">
        <p className=" bg-gray-50 p-5 rounded-md">
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
      </div>
    </section>
  );
}

export default AboutUs;

function AboutUs() {
    return (
        <section id="aboutus" className="p-10" >
            <div  className="flex justify-center p-10 font-inter">
                <h1 className="font-semibold text-4xl relative cursor-pointer py-2 no-underline mx-3 after:absolute after:left-0 after:bottom-1.5 after:w-full after:h-1 after:bg-orange-500 after:rounded-md after:scale-x-0 after:transition-transform hover:py-2 hover:after:scale-x-100">Sobre nosotros</h1>
            </div>

            <section className="flex justify-between">
                <img src="public/company.jpg" alt="" className="w-1/2 rounded-lg" />
                <p className="w-1/2 mx-5 my-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab mollitia praes
                    entium repudiandae possimus dolorem officiis magnam laudantium eum animi laboriosam nam obcaecati, iusto eligendi minus cumque illum.
                    Accusantium, neque ex!
                </p>
            </section>
            <section className="flex justify-between my-20">

                <p className="w-1/2 mx-5 my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab mollitia praes
                    entium repudiandae possimus dolorem officiis magnam laudantium eum animi laboriosam nam obcaecati, iusto eligendi minus cumque illum.
                    Accusantium, neque ex!
                </p>
                <img src="public/company.jpg" alt="imagen empresa" className="w-1/2 rounded-lg" />
            </section>
        </section>
    )
}

export default AboutUs;
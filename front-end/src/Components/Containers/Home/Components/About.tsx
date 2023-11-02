import React from "react";

// import { siteMetadata } from "@/data/siteMetadata";

const ContainerAbout: FC = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                  <img
                    // src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                    loading="lazy"
                    alt="Laptop"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="md:pt-8">
                  <h1 className="text-2xl text-yellow-500 sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">
                    About Me
                  </h1>
                  <p className="sm:text-lg mb-6 md:mb-8 text-justify"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContainerAbout;

import { FC } from "react";

const ContainerProjects: FC = () => {
  return (
    <>
      <h1 className="text-2xl text-yellow-500 sm:text-3xl font-bold text-center mr-10 mt-10  mb-4 md:mb-6 ">
        My Projects
      </h1>

      <div className="py-2 sm:py-4 lg:py-6">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* <!-- product - start --> */}
            <div className="">
              <a
                href="#"
                className="group relative block h-96 overflow-hidden border-2"
              >
                <img
                  src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex items-start justify-between gap-2 bg-emerald-700 border-2 border-black p-4">
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
                  >
                    Fancy Outfit
                  </a>
                  <span className="text-sm text-gray-500 lg:text-base">
                    by Fancy Brand
                  </span>
                </div>

                <div className="flex flex-col items-end">
                  <span className="font-bold text-gray-600 lg:text-lg">
                    $19.99
                  </span>
                  <span className="text-sm text-red-500 line-through">
                    $39.99
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- product - end --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerProjects;

import { FC } from "react";
import Link from "next/link";

const TopSection: FC = () => {
  return (
    <section className="py-10 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-wrap-reverse">
            <div className="w-full px-4 lg:w-1/2">
              <p className="font-mono text-lg xl:text-xl text-yellow-500 mb-4 md:mb-6">
                Hi there I am 
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 font-bold mb-2 md:mb-6">
                Moh.Dany Asmoro
              </h1>

              <p className="font-extrabold lg:w-4/5 text-rose-400 xl:text-lg text-justify leading-relaxed mb-8 md:mb-12">
                Junior <span className="text-emerald-700"> Web Developer</span>
              </p>

              <p className="lg:w-4/5 text-gray-500 xl:text-lg text-justify leading-relaxed mb-8 md:mb-12">
                Creative Front-End web developer that currently studying in SMK
                Telkom Malang. Major in Software engineering, skilled in web
                developing and have enthusiast in UI/UX.
              </p>

              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <a
                  href="mailto:dny.asmoro@gmail.com"
                  className="inline-block bg-rose-400 hover:bg-rose-500 focus-visible:ring ring-primary text-emerald-700 active:text-yellow-700 text-sm md:text-base font-semibold text-center outline outline-2 outline-black transition duration-100 px-5 py-3"
                >
                  Contact Me
                </a>

                <Link
                  href="https://drive.google.com/file/d/1w72IHnguyE1E2ELAaMHb477PlMg4PCs6/view"
                  legacyBehavior
                >
                  <a className="inline-block bg-emerald-700 hover:bg-emerald-500 focus-visible:ring ring-primary text-rose-400 active:text-yellow-700 text-sm md:text-base font-semibold text-center outline outline-2 outline-black transition duration-100 px-5 py-3">
                    Download Resume
                  </a>
                </Link>
              </div>
            </div>

            <div className="mb-10 lg:mb-0 w-full px-4 lg:w-1/2">
              <img
                // src="/assets/photo.JPG"
                loading="lazy"
                alt="Hero Illustration"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;

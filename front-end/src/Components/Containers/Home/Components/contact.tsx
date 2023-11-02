import { FC } from "react";

const Containercontact: FC = () => {
  return (
    <>
      <section className="container mt-10 ">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h1 className="mb-4 text-2xl tracking-tight font-bold text-center text-yellow-500 ">
            Contact Me
          </h1>
          <p className="mb-5 lg:mb-10 font-light text-center text-rose-400 dark:text-rose-400 sm:text-xl">
            Got a advice for me? Want to send feedback about a this website?
            Need some details? Let me know.
          </p>
          <div className="conatiner bg-yellow-500 py-5 px-10 border-2 border-black ">
            <form action="#" className="space-y-6 ">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-white border-2 border-black text-gray-500 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-500 bg-white  border-2 border-black shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Let me know how i can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white  shadow-sm  border-2 border-black focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-rose-400 bg-emerald-700 border-2 border-black sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Containercontact;

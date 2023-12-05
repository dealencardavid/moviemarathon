import logo from "../assets/logos/moviemarathon.png";

function LoginPage() {
  return (
    <div className="h-screen bg-stone-900 flex flex-col">
      <div className="px-4 py-2.5 md:px-8 md:py-3.5 lg:px-28 lg:py-6 flex border-b border-stone-200">
        <a href="/" className="flex gap-1 items-end">
          <img alt="MovieMarathon logo" src={logo} className=" h-8" />
          <span className="font-display text-base text-stone-50">
            MovieMarathon
          </span>
        </a>
      </div>
      <div className="grid place-items-center grow bg-stone-900">
        <div className="bg-stone-800 flex flex-col gap-8 p-5 rounded-xl font-body shadow-md max-w-sm md:max-w-lg ">
          <div className="flex flex-col gap-2">
            <h2 className="text-white font-semibold text-4xl text-center">
              MovieMarathon is still{" "}
              <span className="underline"> under development</span>
            </h2>
            <p className="text-stone-50 text-center text-base md:text-lg">
              But we will be up and running as soon as we can.
            </p>
          </div>
          <form className="flex flex-col gap-5">
            <label htmlFor="email" className="block">
              <span className="text-stone-50 font-medium text-sm block mb-1">
                Email address
              </span>
              <input
                disabled
                required
                type="email"
                id="email"
                name="email"
                placeholder="e.g john.doe@example.com"
                className="w-full py-2 px-2 bg-stone-50 rounded placeholder-stone-500 text-stone-800 text-sm focus:outline-none focus:ring ring-main-500 transition-all duration-200 disabled:bg-stone-400 disabled:cursor-not-allowed"
              />
            </label>
            <label htmlFor="password" className="block">
              <span className="text-stone-50 font-medium text-sm block mb-1">
                Password
              </span>
              <input
                disabled
                required
                type="password"
                id="password"
                name="password"
                placeholder="Your password"
                className="w-full py-2 px-2 bg-stone-50 rounded placeholder-stone-500 text-stone-800 text-sm focus:outline-none focus:ring ring-main-500 transition-all duration-200 disabled:bg-stone-400 disabled:cursor-not-allowed"
              />
            </label>
            <button
              disabled
              onClick={() => console.log("test")}
              className="bg-main-500 text-sm font-medium text-white py-3 rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
            >
              Login
            </button>
            <button
              disabled
              onClick={() => console.log("test")}
              className="bg-transparent text-sm font-medium text-main-500 py-3 rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
            >
              Can&apos;t login?
            </button>
          </form>
        </div>
      </div>
      <div className="px-4 py-2.5 md:px-8 md:py-3.5 lg:px-28 lg:py-6 flex justify-center">
        <p className="text-stone-200 text-sm font-normal">
          © 2023 MovieMarathon. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

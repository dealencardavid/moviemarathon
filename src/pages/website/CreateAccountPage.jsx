import logo from "../../assets/logos/moviemarathon.png";
import SignUpForm from "../../features/authentication/SignUpForm";

function CreateAccountPage() {
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
      <div className="flex flex-col items-center justify-center grow gap-6 bg-stone-900">
        <p className="text-white font-semibold text-4xl text-center">
          Create your new account
        </p>
        <div className="bg-stone-800 flex flex-col gap-8 p-5 rounded-xl font-body shadow-md max-w-sm md:max-w-lg w-full ">
          <SignUpForm />
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

export default CreateAccountPage;

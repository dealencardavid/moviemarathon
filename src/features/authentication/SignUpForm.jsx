import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import { Toaster } from "react-hot-toast";

function SignUpForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="fullName" className="block">
        <span className="text-stone-50 font-medium text-sm block mb-1">
          Full name
          {errors?.fullName?.message && (
            <ErrorMessage>{errors?.fullName?.message}</ErrorMessage>
          )}
        </span>
        <input
          type="text"
          id="fullName"
          autoComplete="name"
          placeholder="your name"
          {...register("fullName", { required: "This field is required" })}
          disabled={isLoading}
          className="w-full py-2 px-2 bg-stone-50 rounded placeholder-stone-500 text-stone-800 text-sm focus:outline-none focus:ring ring-main-500 transition-all duration-200 disabled:bg-stone-400 disabled:cursor-not-allowed"
        />
      </label>
      <label htmlFor="email" className="block">
        <span className="text-stone-50 font-medium text-sm block mb-1">
          Email address
          {errors?.email?.message && (
            <ErrorMessage>{errors?.email?.message}</ErrorMessage>
          )}
        </span>
        <input
          type="email"
          id="email"
          autoComplete="username"
          placeholder="your best email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          disabled={isLoading}
          className="w-full py-2 px-2 bg-stone-50 rounded placeholder-stone-500 text-stone-800 text-sm focus:outline-none focus:ring ring-main-500 transition-all duration-200 disabled:bg-stone-400 disabled:cursor-not-allowed"
        />
      </label>
      <label htmlFor="password" className="block">
        <span className="text-stone-50 font-medium text-sm block mb-1">
          Password (min. 8 characters)
          {errors?.password?.message && (
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          )}
        </span>
        <input
          type="password"
          id="password"
          autoComplete="password"
          placeholder="your password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs at least 8 characters",
            },
          })}
          disabled={isLoading}
          className="w-full py-2 px-2 bg-stone-50 rounded placeholder-stone-500 text-stone-800 text-sm focus:outline-none focus:ring ring-main-500 transition-all duration-200 disabled:bg-stone-400 disabled:cursor-not-allowed"
        />
      </label>
      <label htmlFor="passwordConfirm" className="block">
        <span className="text-stone-50 font-medium text-sm block mb-1">
          Confirm your password
          {errors?.passwordConfirm?.message && (
            <ErrorMessage>{errors?.passwordConfirm?.message}</ErrorMessage>
          )}
        </span>

        <input
          type="password"
          id="passwordConfirm"
          autoComplete="password"
          placeholder="repeat your password"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
          disabled={isLoading}
          className="w-full py-2 px-2 bg-stone-50 rounded placeholder-stone-500 text-stone-800 text-sm focus:outline-none focus:ring ring-main-500 transition-all duration-200 disabled:bg-stone-400 disabled:cursor-not-allowed"
        />
      </label>
      <button
        className="bg-main-500 text-sm font-medium text-white py-3 rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
        disabled={isLoading}
      >
        Create new account
      </button>
      <Toaster
        toastOptions={{
          success: {
            duration: 6000,
          },
        }}
      />
    </form>
  );
}

export default SignUpForm;

function ErrorMessage({ children }) {
  return <span className="text-xs text-red-500 italic">{children}</span>;
}

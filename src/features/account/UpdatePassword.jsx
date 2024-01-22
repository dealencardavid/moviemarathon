import { useForm } from "react-hook-form";
import { useUpdatePassword } from "./useUpdatePassword";

function UpdatePassword() {
  const { isLoading, updatePassword } = useUpdatePassword();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ newPassword }) {
    updatePassword(newPassword, {
      onSettled: () => {
        reset();
      },
    });
  }
  return (
    <fieldset className=" border-[0.5px] border-stone-700 p-3 rounded-md shadow-lg flex flex-col gap-3">
      <h3 className="text-stone-200 text-base font-medium">
        Update your password
      </h3>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="newPassword" className="block">
          <span className="text-stone-200 font-medium text-sm block mb-2">
            New password (min. 8 characters)
            {errors?.password?.message && (
              <ErrorMessage>{errors?.password?.message}</ErrorMessage>
            )}
          </span>
          <input
            type="password"
            id="newPassword"
            autoComplete="password"
            placeholder="your new password"
            {...register("newPassword", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs at least 8 characters",
              },
            })}
            disabled={isLoading}
            className="w-full py-1 px-2 bg-stone-50 rounded placeholder-stone-500 text-stone-800 text-sm focus:outline-none focus:ring ring-main-500 transition-all duration-200 disabled:bg-stone-400 disabled:cursor-not-allowed"
          />
        </label>
        <label htmlFor="passwordConfirm" className="block">
          <span className="text-stone-200 font-medium text-sm block mb-2">
            Confirm your new password
            {errors?.passwordConfirm?.message && (
              <ErrorMessage>{errors?.passwordConfirm?.message}</ErrorMessage>
            )}
          </span>

          <input
            type="password"
            id="passwordConfirm"
            autoComplete="password"
            placeholder="repeat your new password"
            {...register("newPasswordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().newPassword || "Passwords need to match",
            })}
            disabled={isLoading}
            className="w-full py-1 px-2 bg-stone-50 rounded placeholder-stone-500 text-stone-800 text-sm focus:outline-none focus:ring ring-main-500 transition-all duration-200 disabled:bg-stone-400 disabled:cursor-not-allowed"
          />
        </label>
        <button className="bg-main-500 text-stone-50 text-xs px-2 w-fit self-end py-2 rounded-lg transition-all duration-200 hover:bg-main-600 active:scale-95">
          Update password
        </button>
      </form>
    </fieldset>
  );
}

export default UpdatePassword;

function ErrorMessage({ children }) {
  return <span className="text-xs text-red-500 italic">{children}</span>;
}

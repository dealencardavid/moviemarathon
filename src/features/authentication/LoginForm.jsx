import { useState } from "react";
import { useLogin } from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <label htmlFor="email" className="block">
        <span className="text-stone-50 font-medium text-sm block mb-1">
          Email address
        </span>
        <input
          required
          type="email"
          id="email"
          name="email"
          autoComplete="username"
          placeholder="e.g john.doe@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="w-full py-2 px-2 bg-stone-50 rounded placeholder-stone-500 text-stone-800 text-sm focus:outline-none focus:ring ring-main-500 transition-all duration-200 disabled:bg-stone-400 disabled:cursor-not-allowed"
        />
      </label>
      <label htmlFor="password" className="block">
        <span className="text-stone-50 font-medium text-sm block mb-1">
          Password
        </span>
        <input
          required
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          className="w-full py-2 px-2 bg-stone-50 rounded placeholder-stone-500 text-stone-800 text-sm focus:outline-none focus:ring ring-main-500 transition-all duration-200 disabled:bg-stone-400 disabled:cursor-not-allowed"
        />
      </label>
      <button className="bg-main-500 text-sm font-medium text-white py-3 rounded-lg transition-all duration-200 disabled:cursor-not-allowed">
        {!isLoading ? "Log in" : "Loading..."}
      </button>
    </form>
  );
}

export default LoginForm;

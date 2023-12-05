import { Link } from "react-router-dom";

function Button({ children, type = "primary", to, onClick, href }) {
  const base =
    " cursor-pointer text-center rounded-lg disabled:cursor-not-allowed transition-all duration-300";

  const cta =
    " py-2.5 px-4 text-sm focus:ring focus:ring-main-400 hover:scale-105 active:scale-95";

  const styles = {
    nav: base + "font-medium text-stone-200 group relative hover:text-main-400",
    primary: base + cta + " bg-main-500 text-stone-50 ",
    outline:
      base +
      cta +
      " border border-stone-200 text-stone-200 hover:text-main-400 hover:border-main-400",
  };

  if (to && type === "nav")
    return (
      <Link to={to} className={styles[type]}>
        <span>{children}</span>
        <span className="bg-main-400 absolute -bottom-1 left-0 h-[1px] w-0 transition-all duration-200 ease-in-out group-hover:w-full" />
      </Link>
    );

  if (to && (type === "primary" || type === "outline"))
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <a
      href={href}
      target="blank"
      className=" text-2xl text-stone-200 hover:text-main-400 transition-all duration-300"
    >
      {children}
    </a>
  );
}

export default Button;

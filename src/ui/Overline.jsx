function Overline({ children, size = "default" }) {
  const base =
    "font-body font-semibold text-xs text-center text-main-500 uppercase";
  const styles = {
    default: base + " md:text-sm",
    small: base + "",
  };

  return <p className={styles[size]}>{children}</p>;
}

export default Overline;

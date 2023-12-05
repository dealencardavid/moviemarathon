function Section({ children, bg = "default", light = false }) {
  const orangeLight = light
    ? " before:h-72 before:w-72 before:rounded-full  before:pointer-events-none before:absolute before:z-0 before:bg-main-500 before:opacity-40 before:blur-[200px] before:left-1/2 before:-translate-x-1/2 before:-top-36"
    : " ";
  const base =
    "flex flex-col items-center gap-8 lg:gap-20 px-4 md:px-8 lg:px-28 py-16 font-body my-16 container mx-auto" +
    orangeLight;

  const backgroundColor = {
    default: base + " bg-stone-900",
    light: base + " bg-main-50",
  };

  return <section className={backgroundColor[bg]}>{children}</section>;
}

export default Section;

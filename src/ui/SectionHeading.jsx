import Overline from "./Overline";

function SectionHeading({ children, overline, style = "center" }) {
  const styles = {
    center: "items-center text-center",
    start: "items-start text-start",
    end: "items-end",
  };

  return (
    <div className={`flex flex-col max-w-[592px] gap-2 ${styles[style]}`}>
      <Overline>{overline}</Overline>
      <h2
        className={`text-white text-3xl lg:text-4xl font-semibold ${styles[style]}`}
      >
        {children}
      </h2>
    </div>
  );
}

export default SectionHeading;

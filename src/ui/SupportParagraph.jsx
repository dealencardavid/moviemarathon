function SupportParagraph({ children, alignment = "center" }) {
  const styles = {
    center: "text-center",
    left: "text-start",
    right: "text-end",
  };

  return (
    <p
      className={`text-stone-50 font-body text-base lg:text-lg max-w-[476px] ${styles[alignment]}`}
    >
      {children}
    </p>
  );
}

export default SupportParagraph;

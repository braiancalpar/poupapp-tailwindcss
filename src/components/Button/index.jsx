export const Button = ({ children, ...props }) => {
  return (
    <button
      className="border border-solid border-neutral-text bg-transparent text-neutral-text flex justify-center items-center cursor-pointer px-6 py-3 rounded-3xl gap-2 text-base leading-[120%] hover:opacity-8"
      {...props}
    >
      {children}
    </button>
  );
};

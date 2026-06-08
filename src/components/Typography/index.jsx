const TAGS = {
  body: "p",
  h1: "h1",
  h2: "h2",
};

const VARIANT_CLASS = {
  body: "m-0 text-neutral-text text-base leading-[120%] pt-2",
  h1: "m-0 text-neutral-text text-[31px] leading-[120%] font-bold",
  h2: "m-0 text-neutral-text",
};

export const Typography = ({ variant, children }) => {
  const Component = TAGS[variant] || TAGS.body;
  const ClassName = VARIANT_CLASS[variant] || VARIANT_CLASS.body;

  return <Component className={ClassName}>{children}</Component>;
};

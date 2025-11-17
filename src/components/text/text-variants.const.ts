import { cva } from "class-variance-authority";

export const textVariants = cva("font-sans", {
  variants: {
    size: {
      lg: "text-[32px] leading-6",
      md: "text-base leading-6",
      sm: "text-sm leading-5",
    },
    title: {
      false: "",
      true: "font-bold",
    },
  },
  defaultVariants: { title: false, size: "md" },
});

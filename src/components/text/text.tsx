import React from "react"
import { type VariantProps } from "class-variance-authority"
import { textVariants } from "./text-variants.const"

interface TextProps
  extends VariantProps<typeof textVariants>,
    Omit<React.ComponentProps<"label">, "title"> {
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  children?: React.ReactNode
}

export const Text = ({
  as = "span",
  title,
  size,
  className,
  children,
  ...props
}: TextProps) => {
  return React.createElement(
    as,
    {
      className: textVariants({ title, size, className }),
      ...props,
    },
    children
  )
}

import { cva, cx, type VariantProps } from "class-variance-authority"
import { textVariants } from "../text/text-variants.const"
import React from "react"
import type { Icon } from "@phosphor-icons/react"

const textInputVariants = cva(
  "flex rounded-lg border-none outline gap-2 w-full",
  {
    variants: {
      variant: {
        primary:
          "outline-gray-500! focus:outline-yellow-dark! text-gray-200 placeholder:text-gray-400",
      },
      size: {
        md: "p-3",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
      variant: "primary",
    },
  }
)

const iconVariants = cva("absolute z-10 left-3 w-5 h-5", {
  variants: {
    variant: {
      primary: "text-yellow",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

interface TextInputProps
  extends VariantProps<typeof textInputVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  Icon?: Icon
}

export const TextInput = ({
  size,
  disabled,
  variant,
  Icon,
  className,
  ...props
}: TextInputProps) => {
  return (
    <div className={cx("flex items-center relative", className)}>
      {Icon && <Icon className={iconVariants({ variant })} />}
      <input
        className={cx(
          textInputVariants({ size, disabled, variant }),
          textVariants(),
          Icon && "pl-11"
        )}
        {...props}
      />
    </div>
  )
}

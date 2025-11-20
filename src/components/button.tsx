import { cva, cx, type VariantProps } from "class-variance-authority"
import { Text } from "./text/text"
import type React from "react"

const buttonVariants = cva(
  "flex items-center justify-center cursor-pointer rounded-lg gap-2 select-none",
  {
    variants: {
      variant: {
        primary: "bg-yellow hover:outline-yellow-light",
      },
      size: {
        md: "h-14 p-4 hover:outline-2",
      },
      disabled: {
        true: "opacity-30 pointer-events-none",
      },
      uppercase: {
        true: "uppercase",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      uppercase: true,
    },
  }
)

const buttonTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-900",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  textProps?: React.ComponentProps<typeof Text>
}

export const Button = ({
  variant,
  size,
  uppercase,
  disabled,
  className,
  textProps,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cx(
        buttonVariants({
          variant,
          size,
          disabled,
          uppercase,
        }),
        className
      )}
      {...props}
    >
      <Text
        title
        size="sm"
        className={buttonTextVariants({ variant })}
        {...textProps}
      >
        {children}
      </Text>
    </button>
  )
}

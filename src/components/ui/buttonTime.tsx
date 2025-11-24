import { cva, cx, type VariantProps } from "class-variance-authority"
import React from "react"
import { Text } from "../text/text"

const buttonTimeVariants = cva(
  "flex items-center justify-center cursor-pointer rounded-lg gap-2 select-none border-none",
  {
    variants: {
      variant: {
        primary:
          "bg-gray-600 hover:bg-gray-500 focus:outline-yellow outline-gray-500 text-gray-200",
      },
      size: {
        md: "h-10 py-2 px-5 outline min-w-20",
      },
      disabled: {
        true: "pointer-events-none bg-transparent outline-gray-600 text-gray-500",
      },
      selected: {
        true: "outline-yellow text-yellow",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
      selected: false,
      variant: "primary",
    },
  }
)

interface ButtonTimeProps
  extends VariantProps<typeof buttonTimeVariants>,
    Omit<React.ComponentProps<"button">, "size" | "disabled"> {
  time: string
}

export const ButtonTime = ({
  size,
  disabled,
  variant,
  selected,
  time,
  className,
  ...props
}: ButtonTimeProps) => {
  return (
    <button
      className={cx(
        buttonTimeVariants({
          variant,
          size,
          selected,
          disabled,
        }),
        className
      )}
      tabIndex={disabled ? -1 : undefined}
      {...props}
    >
      <Text size="sm">{time}</Text>
    </button>
  )
}

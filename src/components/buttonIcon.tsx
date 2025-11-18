import { cva, cx, type VariantProps } from "class-variance-authority"
import type React from "react"
import type { Icon } from "@phosphor-icons/react"

const buttonVariants = cva(
  "flex items-center justify-center cursor-pointer rounded-lg gap-2 select-none",
  {
    variants: {
      disabled: {
        true: "opacity-30 pointer-events-none",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
)

const iconVariants = cva("", {
  variants: {
    variant: {
      primary: "text-yellow hover:text-yellow-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants>,
    VariantProps<typeof iconVariants> {
  Icon: Icon
  size?: number | string
}

export const ButtonIcon = ({
  variant,
  size = 32,
  disabled,
  className,
  Icon,
  ...props
}: ButtonProps) => {
  return (
    <button className={cx(buttonVariants({ disabled }), className)} {...props}>
      <Icon
        className={iconVariants({
          variant,
        })}
        size={size}
      />
    </button>
  )
}

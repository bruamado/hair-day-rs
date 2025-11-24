import { cva, cx, type VariantProps } from "class-variance-authority"
import { textVariants } from "../text/text-variants.const"
import React, { useRef, useState, type ReactElement } from "react"
import { CalendarBlankIcon, CaretDownIcon } from "@phosphor-icons/react"

const iconBaseClass = "absolute z-10 cursor-pointer"

const dateInputVariants = cva(
  "flex rounded-lg border-none outline gap-2 w-full pl-11 pr-8 [&::-webkit-calendar-picker-indicator]:hidden",
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

const calendarIconVariants = cva(cx(iconBaseClass, "left-3"), {
  variants: {
    variant: {
      primary: "text-yellow",
    },
    size: {
      md: "w-5 h5",
    },
    disabled: {
      true: "pointer-default",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
})

const arrowDownIconVariants = cva(cx(iconBaseClass, "right-3"), {
  variants: {
    variant: {
      primary: "text-white",
    },
    size: {
      md: "w-5 h5",
    },
    disabled: {
      true: "pointer-default",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
})

interface DateInputProps
  extends VariantProps<typeof dateInputVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  startWithTodayDate?: boolean
}

export const DateInput = ({
  startWithTodayDate = true,
  size,
  disabled,
  variant,
  className,
  ...props
}: DateInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [today] = useState(new Date().toISOString().split("T")[0])

  const handleOpenCalendar = () => {
    if (!inputRef) return
    inputRef.current?.showPicker?.()
  }

  return (
    <div className={cx("flex items-center relative", className)}>
      <CalendarBlankIcon
        onClick={handleOpenCalendar}
        className={calendarIconVariants({ variant, size })}
      />
      <input
        type="date"
        defaultValue={startWithTodayDate ? today : undefined}
        ref={inputRef}
        className={cx(
          dateInputVariants({ size, disabled, variant }),
          textVariants({ size }),
          "text-gray-200"
        )}
        {...props}
      />
      <CaretDownIcon
        onClick={handleOpenCalendar}
        className={arrowDownIconVariants({ variant, size })}
      />
    </div>
  )
}

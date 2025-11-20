import { cx } from "class-variance-authority"
import { Text } from "./text/text"
import { ScissorsIcon } from "@phosphor-icons/react"

interface Props {
  className?: string
}
export const Logo = ({ className }: Props) => {
  return (
    <div
      className={cx(
        "px-5 py-3 bg-gray-600 rounded-br-xl text-yellow flex",
        className
      )}
    >
      <Text as="span" className="text-xl">
        HairDay
      </Text>
      <ScissorsIcon size={20} className="rotate-145 -translate-y-2" />
    </div>
  )
}

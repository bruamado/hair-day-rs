import { cx } from "class-variance-authority"
import { Text } from "../text/text"
import { DateInput } from "../ui/date-input"
import { DayTasks } from "./DayTasks"
import { useState, type ChangeEvent } from "react"

type ScheduleViewerProps = React.ComponentProps<"article">

export const ScheduleViewer = ({
  className,
  ...props
}: ScheduleViewerProps) => {
  const today = new Date().toISOString().split("T")[0]
  const [selectedDate, setSelectedDate] = useState(today)

  const handleChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    const dateValue = event?.target?.value
    if (!dateValue) {
      setSelectedDate("")
      return
    }
    setSelectedDate(dateValue)
  }

  return (
    <article className={cx("px-28 py-20 w-full", className)} {...props}>
      <div className="flex justify-between items-center mb-8 gap-3">
        <div className="flex flex-col gap-2">
          <Text as="h1" title size="lg" className="text-gray-100">
            Sua agenda
          </Text>
          <Text as="p" size="sm" className="text-gray-300">
            Consulte os seus cortes de cabelo agendados por dia
          </Text>
        </div>
        <DateInput
          className="w-44"
          onChange={handleChangeDate}
          defaultValue={selectedDate}
        />
      </div>

      <DayTasks date={selectedDate} />
    </article>
  )
}

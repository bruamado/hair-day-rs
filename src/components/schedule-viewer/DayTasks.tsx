import { useSchedule } from "../../contexts/ScheduleContext"
import { Period } from "../../enums/period.enum"
import { Text } from "../text/text"
import { PeriodTasks } from "./PeriodTasks"

interface DayTasks {
  date: string
}

export const DayTasks = ({ date }: DayTasks) => {
  const { getDateSchedule } = useSchedule()

  const hasAnyTask = !!getDateSchedule(date).length
  return (
    <>
      {hasAnyTask ? (
        <div className="flex flex-col gap-3">
          <PeriodTasks date={date} period={Period.MORNING} />
          <PeriodTasks date={date} period={Period.AFTERNOON} />
          <PeriodTasks date={date} period={Period.EVENING} />
        </div>
      ) : (
        <Text as="h2" title className="text-gray-200 w-fit block m-auto mt-12">
          Nada aqui por enquanto ...
        </Text>
      )}
    </>
  )
}

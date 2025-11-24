import { Period } from "../../enums/period.enum"
import {
  SunHorizonIcon,
  CloudSunIcon,
  MoonStarsIcon,
  TrashIcon,
} from "@phosphor-icons/react"
import { Text } from "../text/text"
import { ButtonIcon } from "../ui/buttonIcon"
import { useSchedule } from "../../contexts/ScheduleContext"
import type { TimeSlot } from "../../hooks/useSchedule"

interface DayTask {
  date: string
  period: Period
}

export const PeriodTasks = ({ date, period }: DayTask) => {
  const { getDateSchedule, deleteSchedule } = useSchedule()
  const daySchedules = getDateSchedule(date)

  const tasks = daySchedules.filter((task) => task.period === period)

  const PeriodMapper = {
    [Period.MORNING]: {
      Icon: SunHorizonIcon,
      label: "Manhã",
      time: "09h-12h",
    },
    [Period.AFTERNOON]: {
      Icon: CloudSunIcon,
      label: "Tarde",
      time: "13h-18h",
    },
    [Period.EVENING]: {
      Icon: MoonStarsIcon,
      label: "Noite",
      time: "19h-21h",
    },
  }

  const periodData = PeriodMapper[period]

  const handleDeleteTask = (task: TimeSlot) => {
    deleteSchedule(date, task.time)
  }

  return (
    <>
      {!!tasks.length && (
        <section className="flex flex-col gap-3">
          <article>
            <div className="flex justify-between items-center px-5 py-3 border border-gray-600 rounded-t-lg">
              <div className="flex gap-3 justify-center items-center">
                <periodData.Icon size={20} className="text-yellow-dark" />
                <Text as="h2" size="sm" className="text-gray-300">
                  {periodData.label}
                </Text>
              </div>
              <Text size="sm" className="text-gray-400">
                {periodData.time}
              </Text>
            </div>
            {tasks.map((task) => (
              <div
                className="p-5 flex justify-center items-center gap-5 border rounded-b-lg border-gray-600"
                key={task.time}
              >
                <Text title className="text-gray-200">
                  <time>{task.time}</time>
                </Text>
                <div className="flex justify-between items-center w-full gap-5">
                  <Text as="p" className="text-gray-200">
                    {task.customer}
                  </Text>
                  <ButtonIcon
                    Icon={TrashIcon}
                    size={16}
                    className="text-yellow"
                    onClick={() => handleDeleteTask(task)}
                  />
                </div>
              </div>
            ))}
          </article>
        </section>
      )}
    </>
  )
}

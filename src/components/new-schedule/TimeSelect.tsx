import { useSchedule } from "../../contexts/ScheduleContext"
import { Period } from "../../enums/period.enum"
import { Text } from "../text/text"
import { ButtonTime } from "../ui/buttonTime"

interface TimeSelectProps {
  date: string
  selectedTime: string
  onSelectTime: (period: Period | null, time: string) => void
}

export const TimeSelect = ({
  date,
  selectedTime,
  onSelectTime,
}: TimeSelectProps) => {
  const scheduleTimes = [
    {
      period: Period.MORNING,
      label: "Manhã",
      times: ["09:00", "10:00", "11:00", "12:00"],
    },
    {
      period: Period.AFTERNOON,
      label: "Tarde",
      times: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
    },
    {
      period: Period.EVENING,
      label: "Noite",
      times: ["19:00", "20:00", "21:00"],
    },
  ]

  const { isTimeTakenOnDate } = useSchedule()

  const isSelected = (time: string) => time === selectedTime
  const handleSelectTime = (period: Period, time: string) => {
    if (selectedTime === time) {
      onSelectTime(null, "")
    } else {
      onSelectTime(period, time)
    }
  }

  return (
    <div className="w-full flex flex-col gap-2">
      <Text as="span" title className="text-gray-200">
        Horários
      </Text>
      {scheduleTimes.map((scheduleItem) => (
        <div className="mb-1" key={scheduleItem.period}>
          <Text as="span" size="sm" className="text-gray-200">
            {scheduleItem.label}
          </Text>
          <div className="flex flex-wrap gap-2 mt-2">
            {scheduleItem.times?.map((time) => (
              <ButtonTime
                time={time}
                disabled={isTimeTakenOnDate(date, time)}
                selected={isSelected(time)}
                onClick={() => handleSelectTime(scheduleItem.period, time)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

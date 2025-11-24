import { useState } from "react"
import { Period } from "../enums/period.enum"

export type TimeSlot = {
  period: Period
  time: string
  customer: string
}

export type DaySchedule = TimeSlot[]

export type Schedule = Record<string, DaySchedule>

export const useScheduleState = () => {
  const [schedule, setSchedule] = useState<Schedule>({})

  const addSchedule = (
    date: string,
    period: Period,
    time: string,
    customer: string
  ) => {
    setSchedule((prev) => {
      const currentDay = prev[date] ?? []

      const withoutTime = currentDay.filter((slot) => slot.time !== time)

      const updatedDay: DaySchedule = [
        ...withoutTime,
        { period, time, customer },
      ]

      return {
        ...prev,
        [date]: updatedDay,
      }
    })
  }

  const deleteSchedule = (date: string, time: string) => {
    setSchedule((prev) => {
      const currentDay = prev[date]
      if (!currentDay) return prev

      const updatedDay = currentDay.filter((slot) => slot.time !== time)

      if (updatedDay.length === 0) {
        const { [date]: _, ...rest } = prev
        return rest
      }

      return {
        ...prev,
        [date]: updatedDay,
      }
    })
  }

  const getDateSchedule = (date: string): DaySchedule => {
    return schedule[date] ?? []
  }

  const isTimeTakenOnDate = (date: string, time: string): boolean => {
    return (schedule[date] ?? []).some((slot) => slot.time === time)
  }

  return {
    schedule,
    addSchedule,
    deleteSchedule,
    getDateSchedule,
    isTimeTakenOnDate,
  }
}

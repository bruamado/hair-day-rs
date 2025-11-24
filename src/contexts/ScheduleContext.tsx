import type { ReactNode } from "react"
import type { Schedule, DaySchedule } from "../hooks/useSchedule"
import { createContext, useContext } from "react"
import { useScheduleState } from "../hooks/useSchedule"
import type { Period } from "../enums/period.enum"

type ScheduleContextValue = {
  schedule: Schedule
  addSchedule: (
    date: string,
    period: Period,
    time: string,
    customer: string
  ) => void
  deleteSchedule: (date: string, time: string) => void
  getDateSchedule: (date: string) => DaySchedule
  isTimeTakenOnDate: (date: string, time: string) => boolean
}

const ScheduleContext = createContext<ScheduleContextValue | null>(null)

type ScheduleProviderProps = {
  children: ReactNode
}

export const ScheduleProvider = ({ children }: ScheduleProviderProps) => {
  const scheduleState = useScheduleState()

  return (
    <ScheduleContext.Provider value={scheduleState}>
      {children}
    </ScheduleContext.Provider>
  )
}

export const useSchedule = () => {
  const context = useContext(ScheduleContext)
  if (!context) {
    throw new Error("useSchedule deve ser usado dentro de um ScheduleProvider")
  }
  return context
}

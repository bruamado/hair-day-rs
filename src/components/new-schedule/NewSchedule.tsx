import { Button } from "../ui/button"
import { Logo } from "../Logo"
import { TextInput } from "../ui/text-input"
import { Text } from "../text/text"
import { UserSquareIcon } from "@phosphor-icons/react"
import { DateInput } from "../ui/date-input"
import { cx } from "class-variance-authority"
import { TimeSelect } from "./TimeSelect"
import { useState, type ChangeEvent } from "react"
import { useSchedule } from "../../contexts/ScheduleContext"
import type { Period } from "../../enums/period.enum"

type NewSceduleProps = React.ComponentProps<"aside">

export const NewSchedule = ({ className, ...props }: NewSceduleProps) => {
  const today = new Date().toISOString().split("T")[0]
  const [selectedDate, setSelectedDate] = useState(today)
  const [selectedPeriod, setSelectedPeriod] = useState<Period | null>(null)
  const [selectedTime, setSelectedTime] = useState("")
  const [customer, setCustomer] = useState("")

  const { addSchedule } = useSchedule()

  const handleChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    const dateValue = event?.target?.value
    if (!dateValue) {
      setSelectedDate("")
      return
    }
    setSelectedDate(dateValue)
  }

  const handleChangeTime = (period: Period | null, time: string) => {
    setSelectedPeriod(period)
    setSelectedTime(time)
  }

  const handleCustomerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const customerValue = event?.target?.value
    setCustomer(customerValue)
  }

  const handleSubmit = () => {
    if (!selectedPeriod) return

    addSchedule(selectedDate, selectedPeriod, selectedTime, customer)
    setSelectedTime("")
    setCustomer("")
  }

  const disableSubmitBtn =
    !selectedDate || !selectedPeriod || !selectedTime || !customer

  return (
    <aside
      className={cx(
        "w-full lg:max-w-lg min-h-full p-20 flex flex-col gap-6 items-center justify-center bg-gray-700 rounded-xl relative",
        className
      )}
      {...props}
    >
      <Logo className="absolute top-0 left-0 -translate-x-3 -translate-y-3" />
      <div className="flex flex-col gap-3">
        <Text as="h1" title size="lg" className="text-gray-100">
          Agende um atendimento
        </Text>
        <Text as="p" size="sm" className="text-gray-300">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </Text>
      </div>
      <div className="w-full flex flex-col gap-2">
        <Text
          as="label"
          title
          htmlFor="date-dropdown"
          className="text-gray-200"
        >
          Data
        </Text>
        <DateInput
          id="date-dropdown"
          defaultValue={selectedDate}
          onChange={handleChangeDate}
        />
      </div>

      <TimeSelect
        date={selectedDate}
        selectedTime={selectedTime}
        onSelectTime={handleChangeTime}
      />

      <div className="w-full flex flex-col gap-2">
        <Text
          as="label"
          title
          htmlFor="customer-input"
          className="text-gray-200"
        >
          Cliente
        </Text>
        <TextInput
          id="customer-input"
          Icon={UserSquareIcon}
          placeholder="Helena Souza"
          value={customer}
          onChange={handleCustomerChange}
        />
      </div>
      <Button
        className="w-full"
        disabled={disableSubmitBtn}
        onClick={handleSubmit}
      >
        Agendar
      </Button>
    </aside>
  )
}

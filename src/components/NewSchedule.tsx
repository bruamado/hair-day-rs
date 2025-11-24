import { Button } from "./ui/button"
import { ButtonTime } from "./ui/buttonTime"
import { Logo } from "./Logo"
import { TextInput } from "./ui/text-input"
import { Text } from "./text/text"
import { CalendarBlankIcon, UserSquareIcon } from "@phosphor-icons/react"
import { DateInput } from "./ui/date-input"

export const NewSchedule = () => {
  return (
    <aside className="max-w-lg min-h-full p-20 flex flex-col gap-6 items-center justify-center bg-gray-700 rounded-xl relative">
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
        <DateInput id="date-dropdown" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Text as="span" title className="text-gray-200">
          Horários
        </Text>
        <div className="mb-1">
          <Text as="span" size="sm" className="text-gray-200">
            Manhã
          </Text>
          <div className="flex flex-wrap gap-2 mt-2">
            <ButtonTime time="09:00" />
            <ButtonTime time="10:00" />
            <ButtonTime time="11:00" disabled />
            <ButtonTime time="12:00" />
          </div>
        </div>
        <div className="mb-1">
          <Text as="span" size="sm" className="text-gray-200">
            Tarde
          </Text>
          <div className="flex flex-wrap gap-2 mt-2">
            <ButtonTime time="13:00" />
            <ButtonTime time="14:00" />
            <ButtonTime time="15:00" disabled />
            <ButtonTime time="16:00" />
            <ButtonTime time="17:00" />
            <ButtonTime time="18:00" />
          </div>
        </div>
        <div className="mb-1">
          <Text as="span" size="sm" className="text-gray-200">
            Noite
          </Text>
          <div className="flex flex-wrap gap-2 mt-2">
            <ButtonTime time="19:00" />
            <ButtonTime time="20:00" />
            <ButtonTime time="21:00" />
          </div>
        </div>
      </div>
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
        />
      </div>
      <Button className="w-full">Agendar</Button>
    </aside>
  )
}

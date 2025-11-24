import { Text } from "./text/text"
import { DateInput } from "./ui/date-input"

export const ScheduleViewer = () => {
  return (
    <article className="px-28 py-20 w-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <Text as="h1" title size="lg" className="text-gray-100">
            Sua agenda
          </Text>
          <Text as="p" size="sm" className="text-gray-300">
            Consulte os seus cortes de cabelo agendados por dia
          </Text>
        </div>
        <DateInput className="w-44" />
      </div>
    </article>
  )
}

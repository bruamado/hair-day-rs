import { NewSchedule } from "./components/new-schedule/NewSchedule"
import { ScheduleViewer } from "./components/schedule-viewer/ScheduleViewer"
import { ScheduleProvider } from "./contexts/ScheduleContext"

function App() {
  return (
    <div className="w-full bg-gray-800">
      <main className="flex flex-col m-auto min-h-dvh p-5 max-w-[1440px] lg:flex-row">
        <ScheduleProvider>
          <NewSchedule className="lg:min-w-lg" />
          <ScheduleViewer />
        </ScheduleProvider>
      </main>
    </div>
  )
}

export default App

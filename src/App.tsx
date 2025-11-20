import { NewSchedule } from "./components/NewSchedule"
import { ScheduleViewer } from "./components/ScheduleViewer"

function App() {
  return (
    <main className="bg-gray-900 min-h-dvh w-full flex p-5">
      <NewSchedule />
      <ScheduleViewer />
    </main>
  )
}

export default App

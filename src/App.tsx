import { UserSquareIcon, TrashIcon } from "@phosphor-icons/react"
import { Text } from "./components/text/text"
import { Button } from "./components/button"
import { TextInput } from "./components/text-input"
import { ButtonIcon } from "./components/buttonIcon"

function App() {
  return (
    <div className="bg-gray-900 h-dvh">
      <div className="flex flex-col justify-center items-center p-40 gap-10">
        <Button onClick={() => alert("clicou!")} className="w-80">
          Testando botão!
        </Button>
        <Text as="p" title size="lg" className="text-gray-200">
          Hair Day
        </Text>
        <TextInput placeholder="Nome do cliente" Icon={UserSquareIcon} />
        <ButtonIcon Icon={TrashIcon} />
      </div>
    </div>
  )
}

export default App

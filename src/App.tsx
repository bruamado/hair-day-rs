import { UserSquareIcon } from "@phosphor-icons/react";
import { Text } from "./components/text/text";
import { Button } from "./components/button";
import { TextInput } from "./components/text-input";

function App() {
  return (
    <div className="bg-gray-900 h-dvh">
      <Button onClick={() => alert("clicou!")} className="w-80">
        Testando botão!
      </Button>
      <Text as="p" title size="lg" className="text-gray-200">
        Hair Day
      </Text>
      <TextInput placeholder="Nome do cliente" Icon={UserSquareIcon} />
    </div>
  );
}

export default App;

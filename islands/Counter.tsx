import { useState } from "preact/hooks";
import { Button, ChakraProvider } from "@chakra-ui/react";
interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div>
      <p>{count}</p>
      <ChakraProvider>
        <Button onClick={() => setCount(count - 1)}>-1</Button>
        <Button onClick={() => setCount(count + 1)}>+1</Button>
      </ChakraProvider>
    </div>
  );
}

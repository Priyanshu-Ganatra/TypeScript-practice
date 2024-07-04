import Counter from "./Counter.tsx"

function App() {

  return (
    <>
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </>
  )
}

export default App

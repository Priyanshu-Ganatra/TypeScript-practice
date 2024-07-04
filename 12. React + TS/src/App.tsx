import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"
import { useState } from "react"


function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <Heading title="Hello"></Heading>
      <Section title="Different title">
        This is a section
      </Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List render={(item: string)=><span className="gold">{item}</span>} items={['coffee', 'tea', 'biscuit']}></List>
      {/* also valid (item: number) as items can be of any type, but the items prop should be an array of same type i.e. number */}
      {/* <List render={(item: number)=><span className="gold">{item}</span>} items={[1,2,3]}></List> */}
    </>
  )
}

export default App
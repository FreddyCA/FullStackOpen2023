import { useState } from "react";
import Button from "./components/Button/Button"
import Header from "./components/Header/Header"
import Statistics from "./components/Statistics/Statistics"

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const name = {good: 'good', neutral: 'neutral', bad: 'bad'}

  return (
    <div>
      <Header  />
      <Button variable={good} setVariable={setGood} name={name.good} />
      <Button variable={neutral} setVariable={setNeutral} name={name.neutral} />
      <Button variable={bad} setVariable={setBad} name={name.bad} />
      <Statistics good={good} neutral={neutral} bad={bad} name={name}/>
    </div>
  )
}

export default App

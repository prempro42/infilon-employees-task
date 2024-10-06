import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Users from "./components/users/Users"
import CounterTwo from "./components/counter-two/Counter-two"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Users />
      <CounterTwo />
    </>
  )
}

export default App

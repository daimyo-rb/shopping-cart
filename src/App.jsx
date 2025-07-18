import { useState } from 'react'
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>home</h1>
      <Link to="shop">Shop</Link>
    </>
  )
}

export default App

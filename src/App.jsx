import { useState } from 'react'

function App() {
  const [text, setText] = useState("Hello World")

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText("Hello MERN 🚀")}>
        Click Me
      </button>
      
    </div>
  )
}

export default App
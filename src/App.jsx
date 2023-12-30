import React, { useState } from 'react'

export default function App() {
  const [Name, SetName] = useState("Kamrul")
  const ChangeName = () => {
    SetName("Hasan")
  }
  return (
    <div>
      <h1> Hello {Name}</h1>
      <button onClick={ChangeName}>Click Me</button>
    </div>
  )
}

import { useState } from 'react'
import './App.css'
import Card from './Card.jsx' 

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <header>Logo</header>
    <main>
      <Card firstName="Vova" lastName = "Someone" message="I'm the first comment"/>
      <Card firstName="Vova2" lastName = "Someone2" message="I'm the second comment"/>
      <Card firstName="Vova3" lastName = "Someone3" message="I'm the third comment"/>
      <Card firstName="Vova4" lastName = "Someone4" message="I'm the 4th comment"/>
      <Card firstName="Vova5" lastName = "Someone5" message="I'm the 5th comment"/>
    </main>
    <footer>Footer</footer>
  </>)
}

export default App
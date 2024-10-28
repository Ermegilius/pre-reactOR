import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'


function App() {
  const [person, setPerson] = useState({
    firstName:"Emilia",
    title:"Developer",
    age:52
  });

  return (
  <>
    <header>Logo</header>
    <main>
      <Card firstName={person.firstName} age = {person.age} />
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
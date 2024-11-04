import './App.css'
import Card from './Card.jsx'
import personsData from './data/persons.js' //you can rename it anyway here
import { useState } from 'react'


function App() {

  const [isLoggedIn, setLogIn] = useState(false);

  //toggler for logged or not
  const handleLogin = () => {
    setLogIn(!isLoggedIn);
  }

  return (
    <>
      <header>
        <p>Logo</p>
        <button onClick={handleLogin}>
          {isLoggedIn ? 'Click to log out' : 'Click to log in'}
        </button>
        </header>
        <main>
          {isLoggedIn ? (
            personsData.map((person)=>(
              <Card 
                key={person.id}
                firstName={person.firstName}
                lastName = {person.lastName}
                message={person.message}
              />))
            ):(
              <p>Log-in to see the cards</p>
            )
          }
        </main>
        <footer>Footer</footer>
    </>
  )
}

export default App
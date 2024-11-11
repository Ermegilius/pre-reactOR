import './App.css'
import Card from './components/Card.jsx'
import personsData from './data/persons.js' //you can rename it anyway here
import { useState } from 'react'
import Button from './components/Button.jsx'
 

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //toggler for logged or not
  const toggleLogIn = () => {
    setIsLoggedIn((prevState) => !prevState);
  }

  const handleClick = (id) => {
    console.log('I was clicked', id);//here we use id of the clicked element (from line 38)
  }

  return (
    <>
      <header>
        <p>Logo</p>
        <Button
          text={isLoggedIn ? "Log out" : "Log in"}
          click={toggleLogIn}
        />
        </header>
        <main>
          {isLoggedIn ? (
            personsData.map((person)=>(
              <Card 
                key={person.id}
                firstName={person.firstName}
                lastName = {person.lastName}
                message={person.message}
                click={()=>handleClick(person.id)} //here we register (and send further) id of the clicked element, we will use it later
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
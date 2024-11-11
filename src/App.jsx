import { useState } from 'react'
import personsData from './data/persons.js' //you can rename it anyway here
import Card from './components/Card.jsx'
import Button from './components/Button.jsx'
import './App.css'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //toggler for logged or not
  const toggleLogIn = () => {
    setIsLoggedIn((prevState) => !prevState);
  }

  const handleClick = (id) => {
    console.log(`I'm card No ${id}. I was clicked`);//here we use id of the clicked element
  }

  return (
    <>
      <header>
        <h1>My demo app</h1>
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
              click={()=>handleClick(person.id)} //here we register (and send further(higher)) id of the clicked element, we will use it later
            />))
          ):(
            <p>Log-in to see the cards</p>
          )
        }
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
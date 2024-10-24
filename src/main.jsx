import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.jsx'
import './index.css'
import './App.css'

const myName = "Vova";
const firstPage = 2023;
let yearOrYears = "";

if ((new Date().getFullYear()-firstPage)===1) {
  yearOrYears = "year";
} else {
  yearOrYears = "years";
}

const Reactor = () => {
  return (
    <div>
      <h1>Hello to the World from {myName} (component)!</h1>
      <p>I have {new Date().getFullYear()-firstPage} {yearOrYears} of building webpages experience</p>
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

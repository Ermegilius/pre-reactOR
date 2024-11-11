import Button from './Button.jsx'

const Card = ({message,firstName,lastName, click}) => {
    return (
      <div className="card">
        <p>message: {message}</p>
        <p>first name: {firstName}</p>
        <p>last name: {lastName}</p>
        <Button text="Edit" click={click}/>
      </div>
    )
  }

  export default Card;
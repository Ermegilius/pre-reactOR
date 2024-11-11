const Card = ({message,firstName,lastName}) => {
    return (
      <div className="card">
        <p>message: {message}</p>
        <p>first name: {firstName}</p>
        <p>last name: {lastName}</p>
      </div>
    )
  }

  export default Card;
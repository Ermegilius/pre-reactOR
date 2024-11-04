function Card(props) {
    return (
      <div className="card">
        <p>message: {props.message}</p>
        <p>first name: {props.firstName}</p>
        <p>last name: {props.lastName}</p>
      </div>
    )
  }

  export default Card;
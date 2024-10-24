function Card(props) {
    return (
      <div className="card">
        <p >Hello, {props.message}</p>
        <p>{props.firstName}</p>
        <p>{props.lastName}</p>
      </div>
    )
  }

  export default Card;
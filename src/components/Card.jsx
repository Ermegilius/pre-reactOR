import { useState } from "react";
import Button from './Button.jsx'

const Card = ({firstName, lastName, message}) => {
  const [messageValue, setMessageValue] = useState(message);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((prevState)=>!prevState);
  const handleChange = (e) => setMessageValue(e.target.value);

  return (
    <div className="card">
      <p>first name: {firstName}</p>
      <p>last name: {lastName}</p>
      {isEditing ? (
        <input type='text' value={messageValue} onChange={handleChange} />
      ) : (
        <p>message: {messageValue}</p>
      )}
      <Button 
        text={isEditing ? "Save" : "Edit"}
        click={toggleEdit}
      />
    </div>
  );
}

export default Card;
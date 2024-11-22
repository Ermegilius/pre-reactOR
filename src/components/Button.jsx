const Button = ({click, text, type = 'button'}) => {
    return (
    <button
        type={type} onClick={click}>{text}
    </button>
)} //we define default type of the component. So, later we can change it to type='submit'

export default Button;
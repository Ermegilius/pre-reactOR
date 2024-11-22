import { NavLink } from "react-router-dom";
//import Button from "../Button/Button";
import "./Header.css";

const Header = (props) => {
    //const buttonText = props.loginStatus ? "Log out" : "Log in";

    return (
        <div>
            <h1>React pre-reactor app</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>List</NavLink>
                    </li>
                    <li>
                        <NavLink to='about'>About</NavLink>
                    </li>
                </ul>

            </nav>
            {/*<Button onClick={props.onClick} text={buttonText} /> */}
        </div>
    );
};

export default Header;
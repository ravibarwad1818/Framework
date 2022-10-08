import '../App.css';
import { FaOpencart } from "react-icons/fa";

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >Shopping Cart App</div>
            <div onClick={() => props.handleShow(true)}> <FaOpencart/>
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;
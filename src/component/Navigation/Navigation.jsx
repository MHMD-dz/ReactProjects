import {  AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai"
import { FiHeart } from "react-icons/fi"
import "./Nav.css"

export const Navigation = () => {
  return (
    <nav>
        <div className="Navigation" >
            <input 
                type="text" 
                placeholder="Enter the product name" 
                className="SearchInp"
            />
        </div>
        <div className="profileContain">
            <a href="#">
                <FiHeart className="ico" />
            </a>
            <a href="#">
                <AiOutlineShoppingCart className="ico"/>
            </a>
            <a href="#">
                <AiOutlineUserAdd  className="ico" />
            </a>
        </div>
    </nav>
  )
}

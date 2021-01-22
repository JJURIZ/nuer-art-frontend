import React, { Component } from "react"
import { ShoppingOutlined, ShoppingFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './Header.scss'

class Header extends Component { 

    render(props) {
        const cartFunc = () => {
            if(this.props.cart.items.length > 0){
                return <Link to="/checkout"><ShoppingFilled className="ShoppingFilled"/></Link>
            } else {
                return <ShoppingOutlined />
            }
        }
        console.log(this.props.cart.items)
        return (
        <div className="Header">
            <div className="Header-Header-text">
                <span>Nuer Art</span>
            </div>
            <div className="Header-Shopping-Cart">
                {cartFunc()}
            </div> 

        </div>
        )
    }
}
    
export default Header;




import React, { Component } from "react"
import { ShoppingOutlined, ShoppingFilled } from '@ant-design/icons'
import './Header.scss'

class Header extends Component { 
    render(props) {
        console.log(this.props.inCart)
        let cartStatus = this.props.inCart
        
        return(
        <div className="Header">
            <div className="Header-Header-text">
                Nuer Art
            </div>
            <div className="Header-Shopping-Cart">
            {cartStatus ? <ShoppingFilled /> : <ShoppingOutlined />}
            </div> 
        </div>
        )
    }
}
    
export default Header;




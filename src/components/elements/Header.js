import React, { Component } from "react"
import { ShoppingOutlined, ShoppingFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './Header.scss'

class Header extends Component { 
    render(props) {
        const currentItems = this.props.items
        return(
        <div className="Header">
            <div className="Header-Header-text">
                <span>Nuer Art</span>
            </div>
            <div className="Header-Shopping-Cart">
            {currentItems.length > 0 ? <Link to="/checkout"><ShoppingFilled className="ShoppingFilled"/></Link> : <ShoppingOutlined />}
            </div> 
        </div>
        )
    }
}
    
export default Header;




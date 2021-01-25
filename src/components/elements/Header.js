import React, { Component } from "react"
import { ShoppingOutlined, ShoppingFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './Header.scss'
import { Tooltip } from 'antd'

class Header extends Component { 
    
    render(props) {
        return (
        <div className="Header">
            <div className="Header-Header-text">
                <Link to="/"><span>Nuer Art</span></Link>
            </div>
            {
                this.props.isAuthenticated 
                ? 
                <div>
                    <Link to="/profile">Profile</Link> 
                    <Link to="/"><span onClick={this.props.handleLogout}>Logout</span></Link> 
                </div> 
                : 
                <div>
                    <Link to="/signup">Signup</Link> 
                    <Link to="/login">Login</Link>
                </div>
            }
            <div className="Header-Shopping-Cart">
                {this.props.cart.items.length > 0 ? <Link to="/checkout"><ShoppingFilled className="ShoppingFilled"/></Link> : <ShoppingOutlined className="ShoppingEmpty"/> }
            </div> 

        </div>
        )
    }
}
    
export default Header;




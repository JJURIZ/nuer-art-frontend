import React, { Component } from "react"
import { ShoppingOutlined, ShoppingFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './Header.scss'
import { Tooltip } from 'antd'

class Header extends Component { 
    
    render(props) {
        return (
        <div className="Header">
                <Link to="/" className="Header-title"><p>Nuer Art</p></Link>
            {this.props.isAuthenticated ? <Link to="/profile"><p>Profile</p></Link> : <Link to="/signup" ><p>Signup</p></Link>}
            {this.props.isAuthenticated ? <Link to="/"><p onClick={this.props.handleLogout}>Logout</p></Link> : <Link to="/login" ><p>Login</p></Link>}
            {this.props.cart.items.length > 0 ? <Link to="/checkout"><ShoppingFilled className="ShoppingFilled"/></Link> : <span><ShoppingOutlined className="ShoppingEmpty"/></span> }
        </div>
        )
    }
}
    
export default Header;




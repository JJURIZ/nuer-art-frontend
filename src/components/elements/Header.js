import React, { Component } from "react"
import { ShoppingOutlined, ShoppingFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './Header.scss'
// import { Tooltip } from 'antd'

class Header extends Component { 
    
    render(props) {     
        if(this.props.isAuthenticated){
            return(
                <div className="Header">
                <Link to="/" className="Header-title"><span>Nuer Art</span></Link>
                <Link to="/profile" className="Header-profile"><span>Profile</span></Link> 
                <Link to="/" className="Header-logout"><span onClick={this.props.handleLogout}>Logout</span></Link>
                {this.props.cart.items.length > 0 ? <Link to="/checkout" className="Header-shopping-filled"><ShoppingFilled /></Link> : <span className="Header-shopping-empty"><ShoppingOutlined /></span>}

                </div>
            )
        } else {
            return(
                <div className="Header">
                <Link to="/" className="Header-title"><p>Nuer Art</p></Link>
                </div>
            )
        }
    }
}
    
export default Header;




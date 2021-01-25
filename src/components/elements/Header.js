import React, { Component } from "react"
import { ShoppingOutlined, ShoppingFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './Header.scss'
import { Tooltip } from 'antd'

class Header extends Component { 
    
    render(props) {
        if(this.props.isAuthenticated){
            return(
                <div className="Header">
                <Link to="/" className="Header-title"><span>Nuer Art</span></Link>
                <Link to="/profile"><p>Profile</p></Link> 
                <Link to="/"><p onClick={this.props.handleLogout}>Logout</p></Link>
                {this.props.cart.items.length > 0 ? <Link to="/checkout"><ShoppingFilled className="ShoppingFilled"/></Link> : <span><ShoppingOutlined className="ShoppingEmpty"/></span> }

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




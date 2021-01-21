import React, { Component } from 'react'
import { ShoppingOutlined, ShoppingFilled } from '@ant-design/icons'
import './Header.scss'
import { itemsInCart } from './ImageContainer'

class Header extends Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
        <div className="Header">
            <div className="Header-Header-text">
                Nuer Art
            </div>
            <div className="Header-Shopping-Cart">
            <ShoppingOutlined />
            <ShoppingFilled />
            </div> 
        </div>
        )
    }
}
    
export default Header;




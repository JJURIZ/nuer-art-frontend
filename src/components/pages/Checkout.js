import React, { Component } from "react"
import Header from '../elements/Header'

class Checkout extends Component {

    render(){
        console.log(this.props)
        // console.log(this.props.cart)
        return(
            <div>
                <h1>This is the Checkout Screen</h1>
            </div>
        )
    }
}

export default Checkout;
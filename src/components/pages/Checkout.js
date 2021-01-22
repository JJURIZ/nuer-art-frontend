import React, { Component } from "react"
import Header from '../elements/Header'

class Checkout extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <Header />
                <h1>This is the Checkout Screen</h1>
            </div>
        )
    }
}

export default Checkout;
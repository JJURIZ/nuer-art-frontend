import React, { Component } from 'react'

import './Artwork.scss'

class Artwork extends Component {
    render() {
        return (
            <div>This is where the art will go
                <div className="ImgContainer">
                    <img className="ImgContainer img" src="https://res.cloudinary.com/jjuriz/image/upload/v1611177637/nuerart/penny/Disco_ouunkh.jpg" alt="Just another day at the office"/>
                    <img className="ImgContainer img" src="https://res.cloudinary.com/jjuriz/image/upload/v1611178535/nuerart/penny/penny-1_pshghd.jpg" alt="Just another day at the office"/>
                </div>
            </div>
        )
    }
}

export default Artwork;
import React, { Component } from 'react'
import lodding from "./lodding.gif"

export default class Lodding extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={lodding} alt="lodding" style={{width: "5rem"}}/>
            </div>
        )
    }
}

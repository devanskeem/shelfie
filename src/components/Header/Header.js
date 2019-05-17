import React, {Component} from 'react'
import logo from './logo.png'
export default class Header extends Component{
    render(){
        return(
            <header className="header">
                <img className="logo" src={logo} alt=""/>
                <h1>SHELFIE</h1>
            </header>
        )
    }
}
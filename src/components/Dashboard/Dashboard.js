import React, {Component} from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard">
                <Product inventory={this.props.inventory}/>
            </div>
        )
    }
}
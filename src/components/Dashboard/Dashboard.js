import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios';

export default class Dashboard extends Component{
    deleteProduct = (id) => {
        axios.delete(`http://localhost:4000/api/inventory/${id}`).then(() => {
            this.props.getInventory()
        })
        .catch(()=> console.log('could not delete product'))
        
    }
    render(){
        return(
            <div className="dashboard">
                <Product updateCurrentId={this.props.updateCurrentId} deleteProduct={this.deleteProduct} inventory={this.props.inventory}/>
            </div>
        )
    }
}
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Product extends Component {
    render() {
        let { inventory, deleteProduct, updateCurrentId } = this.props
        let productList = inventory.map((product, index) => {
            return (
                <div key={index} className='product-container'>
                    <div className="product-image">
                        <img src={product.img} alt="" />
                    </div>
                    <div className="data">
                        <div className="info">
                            <p>Name: {product.name}</p>
                            <p>Price: {product.price}</p>
                        </div>
                        <div className="product-btns">
                            <button className='delete' onClick={() => {
                                deleteProduct(product.product_id)
                            }}>Delete</button>
                            
                            <Link to='/edit/:id'><button className='edit' onClick={() => {
                                updateCurrentId(product.product_id)
                            }}>Edit</button></Link>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {productList}
            </div>

        )
    }
}
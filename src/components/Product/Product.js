import React, {Component} from 'react'

export default class Product extends Component{
    render(){
        const {inventory} = this.props
        let productList = inventory.map((product, index) =>{
            return(
                <div className='product-container'>
                <div className="product-image">
                    <img src={product.image} alt=""/>
                </div>
                <div className="data">
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </div>
            </div>
            )
        })
        return(
            <div>
                {productList}
            </div>
            
        )
    }
}
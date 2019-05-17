import React, {Component} from 'react'
import axios from 'axios';
import { thisTypeAnnotation } from '@babel/types';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgUrl: '',
            name: '',
            price: null,
            currentId: null,
        }
    }

    componentDidUpdate(prevProps){
        let {inventory, currentId} = this.props
        if (prevProps.currentId !== this.props.currentId){
            var product = {imgUrl: '', name: '', price: null}
            for (let i = 0; i < inventory.length; i++){
                if (inventory[i].product_id === currentId){
                    product = {
                        imgUrl: inventory[i].img,
                        name: inventory[i].name,
                        price: parseInt(inventory[i].price)
                    }
                    console.log(product.name)
                }
            }
            this.setState({
                currentId: this.props.currentId,
                price: product.price,
                name: product.name,
                imgUrl: product.imgUrl
            })
        }
    }
    


    addProduct = () => {
        let {imgUrl, name, price} = this.state
        axios.post('http://localhost:4000/api/inventory', {"name": name, "price": price, "image": imgUrl})
            .then(() => this.props.getInventory())
            .catch(() => console.log('could not add product'))

        console.log('added')
    }

    updateProduct = () => {
        let {imgUrl, name, price, currentId} = this.state
        axios.put(`http://localhost:4000/api/inventory/${currentId}`, {"name": name, "price": price, "image": imgUrl})
            .then(() => this.props.getInventory())
            .catch(() => console.log('could not add product'))
    }

    imgUrlHandler = (imgUrl) => {
        this.setState({
            imgUrl
        })
        console.log(this.state.name)
    }
    nameHandler = (name) => {
        this.setState({
            name
        })
        console.log(this.state)

    }
    priceHandler = (price) => {
        this.setState({
            price
        })
        console.log(this.state)

    }
    cancelHandler = () => {
        this.setState({
            imgUrl: '',
            name: '',
            price: null
        })

    }



    render(){
        return(
            <div className='form-container'>
                <div className="form-image">
                    <img src={this.state.imgUrl} />
                </div>
                <form action="" className="form">
                    <p>Image URL:</p>
                    <input type="text" value={this.state.imgUrl} onChange={(e) => this.imgUrlHandler(e.target.value)}/>
                    <p>Product Name:</p>
                    <input type="text" value={this.state.name} onChange={(e) => this.nameHandler(e.target.value)}/>
                    <p>Price:</p>
                    <input type="number" value={this.state.price} onChange={(e) => this.priceHandler(e.target.value)}/>
                    <div className="form-btns">
                        <button onClick={() => this.cancelHandler()}>Cancel</button>
                        
                        {
                            this.state.currentId ? <button onClick={() => this.updateProduct()}>Save Changes</button>
                            : <button onClick={() => this.addProduct()}>Add to Inventory</button>
                        }
                    </div>
                </form>
            </div>
        )
    }
}
import React, {Component} from 'react'

export default class Form extends Component{
    constructor(){
        super();
        this.state = {
            imgUrl: '',
            name: '',
            price: null
        }
    }
    imgUrlHandler = (imgUrl) => {
        this.setState({
            imgUrl
        })
        console.log(this.state)
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
        console.log(this.state)
    }

    render(){
        return(
            <div className='form-container'>
                <div className="form-image">
                    <img src="https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png" alt="IMAGE"/>
                </div>
                <form action="" className="form">
                    <p>Image URL:</p>
                    <input type="text" onChange={(e) => this.imgUrlHandler(e.target.value)}/>
                    <p>Product Name:</p>
                    <input type="text" onChange={(e) => this.nameHandler(e.target.value)}/>
                    <p>Price:</p>
                    <input type="number" onChange={(e) => this.priceHandler(e.target.value)}/>
                    <div className="form-btns">
                        <button onClick={() => this.cancelHandler}>Cancel</button>
                        <button>Add to Inventory</button>
                    </div>
                </form>
            </div>
        )
    }
}
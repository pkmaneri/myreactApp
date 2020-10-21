import React, { Component } from "react"

export default class Product extends Component {
    render() {
        return (
            <>
                <div className="cantainer">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Name</label>
                        <input type="Text" className="form-control" id="exampleFormControlInput1" placeholder="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Category</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Category</option>
                            <option>Food</option>
                            <option>Fruit</option>
                            <option>Electronic</option>
                            <option>General-item</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Price</label>
                        <input type="Number" className="form-control" id="exampleFormControlInput1" placeholder="price" />
                    </div>
                </div>
            </>
        )
    }
}
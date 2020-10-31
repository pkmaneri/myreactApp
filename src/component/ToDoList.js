import React, { Component } from "react"

export default class ToDoList extends Component {
    state = {
        lists: [],
        newItem: "",
    }
    handleInput(e) {
        const newItem = (e.target.value)
        this.setState(prevState => {
            return {
                newItem: newItem,
                lists: prevState.lists
            }
        })
    }
    addItem() {
        this.setState((prevState) => {
            return {
                lists: [...prevState.lists, prevState.newItem]
            }
        })
    }
    handleRemoveitem(e,index) {
        let array = e.target.value
        array.splice(index, 1)
        this.setState({
            lists: array
        })
    }

    render() {

        return (
            <div className="ToDoList">
                <div>
                    Add Item
                    <input type="text" placeholder="type of item" value={this.state.newItem} onChange={this.handleInput.bind(this)}></input>
                    <button onClick={this.addItem.bind(this)}>Add</button>
                    {this.state.lists.map((itemval, i) => {
                        return (
                            <li key={i}>{itemval}
                                <button onClick={this.handleRemoveitem.bind(this)}>X</button>
                            </li>
                        )
                    })}
                </div>
            </div>
        )
    }
}
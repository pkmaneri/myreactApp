import React from "react"
export default class Calculator extends React.Component {
    state = {
        text: "",
        display: []

    }

    handleName(e) {
        const name = (e.target.value);

        this.setState(prevState => {
            console.log(prevState)
            return {
                    name: name,
                   
                
            }
        })
    }
    calculate(event) {
        this.setState((prevState) => ({
            text: ((this.state.text) || "") + "",
            result: [...prevState.result, this.state.text + "   "],
            prevResult: [...prevState.prevResult, + ((this.state.text) || "") + "  "]
        })
        )

    }
    back(event) {
        const { type } = event.target
        type === "abc" ? this.setState({ text: this.state.text.slice(0, -1) }) : this.setState({ text: "" })
    }


    render() {
        return (
            <div>

                <div className="resultbar">
                    <input style={{ height: "30px", width: "200px", font: "20px" }}
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="Calculator">
                    <button name="text" onClick={this.back} >clear</button>
                    <button name="text" onClick={this.handleCalculate} value={this.state}>=</button>
                    <button name="text" onClick={this.handleChange} value={this.state + "+"}>+</button>

                </div>
                <div>
                    <button name="text" onClick={this.handleChange} value={this.state + "9"}>9</button>
                    <button name="text" onClick={this.handleChange} value={this.state + "8"}>8</button>
                    <button name="text" onClick={this.handleChange} value={this.state + "7"}>7</button>
                    <button name="text" onClick={this.handleChange} value={this.state + "-"}>-</button>
                </div>
                <div>
                    <button name="text" onClick={this.handleChange} value={this.state + "6"}>6</button>
                    <button name="text" onClick={this.handleChange} value={this.state + "5"}>5</button>
                    <button name="text" onClick={this.handleChange} value={this.state + "4"}>4</button>
                    <button name="text" onClick={this.handleChange} value={this.state + "*"}>*</button>
                </div>
                <div>
                    <button name="text" onClick={this.handleChange} value={this.state + "3"}>3</button>
                    <button name="text" onClick={this.handleChange} value={this.state + "2"}>2</button>
                    <button name="text" onClick={this.handleChange} value={this.state + "1"}>1</button>
                    <button name="text" onClick={this.handleChange} value={this.state + "/"}>/</button>
                </div>
            </div>

        )
    }
}



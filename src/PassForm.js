import React, { Component } from 'react'

class PassForm extends Component {
    state = {
        length: '',
        special: '',
        exclude: ''
    }

    handleLengthChange = (e) => {
        this.setState({
            length: e.target.value,
            special: this.state.special,
            exclude: this.state.exclude
        })
    }

    handleSpecialChange = (e) => {
        this.setState({
            length: this.state.length,
            special: e.target.value,
            exclude: this.state.exclude
        })
    }
    handleExcludeChange = (e) => {
        this.setState({
            length: this.state.length,
            special: this.state.special,
            exclude: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.passGen(this.state.length, this.state.special, this.state.exclude);
    }
    render() {
        return (
            <div>  
                <form onSubmit={this.handleSubmit}>
                    <input type="number" min="10" max="1000" placeholder="16" onChange={this.handleLengthChange} value={this.state.length}/> 
                    <label>Password length (10-1000):</label>

                    <input type="text" pattern="[\W_]*" placeholder="!@#$%^*_|" onChange={this.handleSpecialChange} value={this.state.special}/> 
                    <label>Special characters to include. Special characters can be any characters that are not digits or letters; enter as string sequence, for example, #!@:</label>

                    <input type="text" onChange={this.handleExcludeChange} value={this.state.exclude}/> 
                    <label>Characters to exclude; enter as string sequence, for example, Aa%:</label>

                    <br></br><br></br>
                    <button className="btn orange darken-3" type="submit" value="Submit">
                        Generate <i className="material-icons right">send</i>
                    </button>
                </form>  
            </div>
        );
    }
}

export default PassForm
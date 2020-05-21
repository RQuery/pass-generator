import React, { Component } from 'react'

class PassForm extends Component {
    state = {
        length: '',
        special: ''
    }

    handleLengthChange = (e) => {
        this.setState({
            length: e.target.value,
            special: this.state.special
        })
    }

    handleSpecialChange = (e) => {
        this.setState({
            length: this.state.length,
            special: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.passGen(this.state.length, this.state.special);
    }
    render() {
        return (
            <div>  
                <form onSubmit={this.handleSubmit}>
                    <input type="number" min="10" max="1000" onChange={this.handleLengthChange} value={this.state.length}/> 
                    <label>Password length (10-1000):</label>

                    <input type="text" pattern="[!@#$%^*_|]*" onChange={this.handleSpecialChange} value={this.state.special}/> 
                    <label>Special characters (! @ # $ % ^ * _ |) to include; enter as string sequence, for example, #!@:</label>
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
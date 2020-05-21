import React, {Component} from 'react';
import PassForm from './PassForm';

class App extends Component {
  state = {
    password: '',
    error: ''
  }

  shuffle = (str) => {
    var a = str.split(""),
        n = a.length;
  
    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
  }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    // If you prefer to not show the the whole text area selected.
    //e.target.focus();
  };
  
  renderPass = (pass) => {
      return pass? 
        <textarea className="materialize-textarea" readOnly ref={(textArea) => this.textArea = textArea} value= {pass} /> : null
  }
  renderError = (error) => {
    return error? <p>{error}</p>: null
  }

  // Generate a random integer r with equal chance in  min <= r < max.
  randrange(min, max) {
    var range = max - min;

    var requestBytes = Math.ceil(Math.log2(range) / 8);
    if (!requestBytes) { // No randomness required
        return min;
    }
    var maxNum = Math.pow(256, requestBytes);
    var ar = new Uint8Array(requestBytes);

    while (true) {
        window.crypto.getRandomValues(ar);

        var val = 0;
        for (var i = 0;i < requestBytes;i++) {
            val = (val << 8) + ar[i];
        }

        if (val < maxNum - maxNum % range) {
            return min + (val % range);
        }
    }
  }

  passGen = (length, special, exclude) => {
    /* special characters could include !@#$%^&*()_+ */
    let pass = ""
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower = "abcdefghijklmnopqrstuvwxyz"
    let digits = "1234567890"

    length = parseInt(length)
    if(isNaN(length)){
      length = 16
    }
    if(!special){
      special = "!@#$%^*_|"
    }

    for(let c of exclude){
      values = values.split(c).join('')
      upper = upper.split(c).join('')
      lower = lower.split(c).join('')
      digits = digits.split(c).join('')
      special = special.split(c).join('')
    }

    pass += special 
    /* secure at least one uppercase, one lowercase, and one digit in the string */
    if(upper){
      pass += upper.charAt(this.randrange(0, upper.length))
    }
    if(lower){
      pass += lower.charAt(this.randrange(0, lower.length))
    }
    if(digits){
      pass += digits.charAt(this.randrange(0, digits.length))
    }

    let numOtherChars = length - pass.length;
    // console.log(pass)
    // console.log(length);
    // console.log(special);
    // console.log(numOtherChars);
    if(numOtherChars >= 0){
      for(let i = 0; i < numOtherChars; i++){
        let index = this.randrange(0, values.length);
        pass = pass + values.charAt(index);
      }
      /* shuffle the string */
      let shuffled = this.shuffle(pass)

      this.setState({
        password: shuffled,
        error: ''
      })
    }
    else {
      this.setState({
        password: '',
        error: "Length is too short for the requirements. Along with the special characters, the generated password will contain at least one uppercase character, one lowercase character, and one digit."
      })      
    }
  }

  render(){
    return (
      <div className="container">
        <h3 className="center blue-text">Password Generator</h3>
        <PassForm passGen={this.passGen}/>
        <br></br>
        {this.renderPass(this.state.password)}
        {
         /* Logical shortcut for only displaying the 
            button if the copy command exists */
         document.queryCommandSupported('copy') &&
         this.state.password &&
          <div>
            <button className="btn ripple orange darken-3" onClick={this.copyToClipboard}>
              Copy <i className="material-icons right">content_copy</i>
            </button> 
          </div>
        }

        {this.renderError(this.state.error)}
      </div>
    );
  }
}

export default App;

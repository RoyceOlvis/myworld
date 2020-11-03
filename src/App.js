import React , {Component}from "react";


class App extends Component{

  constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.factorial = this.factorial.bind(this);

        this.state = {
           title: 'The Factorial is'

        }

    }

    factorial(n) {
    if (n === 0) return 1;
    let f = 1;
    for (let i = 1; i < n; i++) {
        f = f * (i + 1);
    }
    return f;
  }
    handleChange(e){


  }
  handleSubmit(event) {
    if(this.state.message > 1){
      this.setState({
        title: this.factorial(this.state.message)
      })
    }

    event.preventDefault();
  }
  updateNumber = (e) => {
    const val = e.target.value;
    // If the current value passes the validity test then apply that to state
    if (e.target.validity.valid) {
      this.setState({message: e.target.value});
    }
    // If the current val is just the negation sign, or it's been provided an empty string,
    // then apply that value to state - we still have to validate this input before processing
    // it to some other component or data structure, but it frees up our input the way a user
    // would expect to interact with this component
    else if (val === '' || val === '-') this.setState({message: val});
  }

    render (){
  return (
   <div>

    <form className="container" onSubmit={this.handleSubmit}>


    <input
            type='tel'
            value={this.state.message}
            onChange={this.updateNumber}
            pattern="^-?[0-9]\d*\.?\d*$"
            placeholder="Type a Number"
          />
          <input
                  value={this.state.title}
                  onChange={this.handleSubmit}
                  pattern="^-?[0-9]\d*\.?\d*$"
                  placeholder={this.state.title}
                />
     <button onClick="submit">Enter</button>


    </form>
    </div>

  );
}
}

export default App;

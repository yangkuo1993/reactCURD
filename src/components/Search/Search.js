import React, {Component} from 'react'
class Search extends Component{
  constructor(){
    super();
    this.state = {
      searchValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({searchValue: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.searchValue)
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder={this.props.placeholder} value={this.state.searchValue} onChange={this.handleChange}/>
        <button>{this.props.buttonName}</button>
      </form>
    )
  }
}
export default Search
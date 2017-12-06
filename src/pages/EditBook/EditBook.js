import React, {Component} from 'react'
class EditBook extends Component{
  constructor(){
    super();
    this.submitHandle = this.submitHandle.bind(this);
  }
  submitHandle (event) {
    event.preventDefault();
  }
  render(){
    let bookName = this.props.match.params.id;
    console.log(bookName)
    return(
      <form onSubmit={this.submitHandle}>
        <div>
          <span>书名:</span>
          <input type="text"/>
        </div>
        <div>
          <span>ISBN:</span>
          <input type="text"/>
        </div>
        <div>
          <span>价格:</span>
          <input type="text"/>
        </div>
        <div>
          <button>修改</button>
        </div>
      </form>
    )
  }
}
export default EditBook
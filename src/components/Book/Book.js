import React, {Component} from 'react'
import './Book.css'
class Book extends Component{
  constructor(){
    super();
    this.deleteHandle = this.deleteHandle.bind(this);
  }
  deleteHandle (event) {
    event.preventDefault();
    this.props.deleteHandle(this.props.ISBN)
  }
  render(){
    return (
      <div className='book'>
        <img src={this.props.img} alt={this.props.alt}/>
        <p>书名：{this.props.name}</p>
        <p>ISBN：{this.props.ISBN}</p>
        <p>价格：${this.props.price}</p>
        <div>
          <a href="" onClick={this.deleteHandle}>删除</a>&nbsp;
          <a href="">编辑</a>
        </div>
      </div>
    )
  }
}
export default Book;
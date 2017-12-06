import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Book.css'
class Book extends Component{
  constructor(){
    super();
    this.deleteHandle = this.deleteHandle.bind(this);
  }
  deleteHandle (event) {
    event.preventDefault();
    this.props.deleteHandle(this.props.bookInfo.ISBN)
  }
  render(){
    return (
      <div className='book'>
        <img src={this.props.bookInfo.src} alt={this.props.bookInfo.alt}/>
        <p>书名：{this.props.bookInfo.name}</p>
        <p>ISBN：{this.props.bookInfo.ISBN}</p>
        <p>价格：${this.props.bookInfo.price}</p>
        <div>
          <a href="" onClick={this.deleteHandle}>删除</a>&nbsp;
          <Link to={`/EditBook/${this.props.bookInfo.ISBN}`}>编辑</Link>
        </div>
      </div>
    )
  }
}
export default Book;
import React, {Component} from 'react'
import './Book.css'
class Book extends Component{
  render(){
    return (
      <div className='book'>
        <img src={this.props.img} alt={this.props.alt}/>
        <p>书名：{this.props.name}</p>
        <p>ISBN：{this.props.ISBN}</p>
        <p>价格：${this.props.price}</p>
      </div>
    )
  }
}
export default Book;
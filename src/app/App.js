import React, { Component } from 'react';
import './App.css';
import Book from '../components/Book/Book'
import HeaderInput from '../containers/HeaderInput/HeaderInput'
class App extends Component {
  constructor(){
    super();
    this.state = {
      list: [
        {
          name: 'oneBook',
          src: require('../assets/img/1.jpg'),
          price: 11,
          ISBN: 1111
        },
        {
          name: 'twoBook',
          src: require('../assets/img/2.jpg'),
          price: 22,
          ISBN: 2222
        },
        {
          name: 'threeBook',
          src: require('../assets/img/3.jpg'),
          price: 33,
          ISBN: 3333
        },
        {
          name: 'fourBook',
          src: require('../assets/img/4.jpg'),
          price: 44,
          ISBN: 4444
        },
        {
          name: 'fiveBook',
          src: require('../assets/img/5.jpg'),
          price: 55,
          ISBN: 5555
        },
        {
          name: 'sixBook',
          src: require('../assets/img/6.jpg'),
          price: 66,
          ISBN: 6666
        },
        {
          name: 'sevenBook',
          src: require('../assets/img/7.jpg'),
          price: 77,
          ISBN: 7777
        },
        {
          name: 'eightBook',
          src: require('../assets/img/8.jpg'),
          price: 88,
          ISBN: 8888
        }
      ]
    }
    this.searchHandle = this.searchHandle.bind(this);
    this.bookDeleteHandle = this.bookDeleteHandle.bind(this);
  }
  searchHandle (value) {
    console.log(value)
    this.state.list.filter((data, index) => {
      let values = Object.values(data);
      values.forEach((innerData) => {
        console.log(innerData === value)
        if (String(innerData) === value) {
          return this.setState({
            list: [data]
          })
        }
      })
      return this.state.list
    })
  }
  bookDeleteHandle (ISBN) {
    this.state.list.forEach((data, index) => {
      if (data.ISBN === ISBN) {
        this.state.list.splice(index, 1);
        let newArray = this.state.list;
        this.setState({
          list: newArray
        })
      }
    })
  }
  render() {
    const items = this.state.list.map((item) =>
      <Book img={item.src} name={item.name} ISBN={item.ISBN} price={item.price} key={item.ISBN} deleteHandle={this.bookDeleteHandle}></Book>
    )
    return (
      <div className="App">
        <HeaderInput searchHandle={this.searchHandle}></HeaderInput>
        {items}
      </div>
    );
  }
}

export default App;

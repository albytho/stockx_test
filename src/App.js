import React, { Component } from 'react';
import './App.css';
import ImageGrid from './Components/ImageGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-4">StockX</h1>
            <h3>Coding Challenge</h3>
          </div>
        </div>
      
        <ImageGrid/>

      </div>
    );
  }
}

export default App;

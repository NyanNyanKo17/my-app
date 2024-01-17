import React, { Component } from 'react';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import Input from './components/Input/Input';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Title text="Заголовок" size="2em" color="blue" />
        <Input type="text" placeholder="Введите текст" value="" />
        {}
        <Footer />
      </div>
    );
  }
}

export default App;

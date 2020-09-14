import React from 'react';
import './App.scss';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Section from './componentes/Section/Section';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;

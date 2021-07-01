import React from 'react';
import '../src/App.css';
import Header from './components/Header';
import SearchBar from './components/Search';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <Header />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;

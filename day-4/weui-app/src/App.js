import React from 'react';
import './App.css';
import './component/Header/hea.css';
import 'weui'
import Header from './component/Header/header'
import Search from './component/Search/search'
import Panel from './component/Panel/panel'

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Panel />
    </div>
  );
}

export default App;

import React, {Fragment} from 'react';
import './App.css';
import Head from './components/Head/Head';
import Main from '../src/components/Main/Main';

function App() {
  return (
    <div class="bg-secondary-lightgrayishviolet">
      <div class="fixed z-10 rounded-br-full w-6/12 h-3/5 bg-gradient-to-t from-gradient-lightviolet"></div>
        <div class="container w-screen h-screen flex flex-col justify-evenly items-center">
          <Main/>
          <Head/>
        </div>
    </div>
  );
}

export default App;

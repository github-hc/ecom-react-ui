import React, { useEffect } from 'react';
import { useAction } from './app-hooks/useAction';
import { useTypedSelector } from './app-hooks/useTypedSelector';
import './App.css';

function App() {
  const categoryState = useTypedSelector((state)=>  state.categoryReducer);
  const {GetCategories} = useAction();
  useEffect(()=>{
    async function init() {
      await GetCategories();
    }

    init();
  },[]);

  useEffect(()=>{
    console.log(categoryState);
  },[categoryState])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

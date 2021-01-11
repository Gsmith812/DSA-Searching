import { useState } from 'react';
import searchBstFuncs from './bstfuncs';
import './App.css';

function App() {
  const [state, setState] = useState({
    value: null,
    response: {
      found: false,
      count: 0
    }
  });

  const handleValueChange = value => {
    setState({
      value: parseInt(value),
      response: {
        found: false,
        count: 0
      }
    });
  };

  const handleLinearSearch = (e, value) => {
    e.preventDefault();
    let res = searchBstFuncs.linearSearch(value);
    setState({
      ...state,
      response: res
    });
  };

  const handleBinarySearch = (e, value) => {
    e.preventDefault();
    let res = searchBstFuncs.binarySearch(value);
    setState({
      ...state,
      response: res
    })
  }

  return (
    <div className="App">
      <h1>DSA Searching Algorithms</h1>
      <section className='searchBox'>
        <p>Given an array:</p>
        <code>[89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]</code>
        <form className='bst-search'>
          <label htmlFor='searchNum'>
            Enter Number:
          </label>
          <input
            id='searchNum'
            type='number'
            onChange={(e) => handleValueChange(e.target.value)}
          />
          <button type='button' onClick={(e) => handleLinearSearch(e, state.value)}>
            Linear Search
          </button>
          <button type='button' onClick={(e) => handleBinarySearch(e, state.value)}>
            Binary Search
          </button>
        </form>
      </section>
      <section className='resultsBox'>
        <p>Search Value: {`${state.value}`}</p>
        <p>Number of Searches: {`${state.response.count}`}</p>
        <p>Results Found: {`${state.response.found}`}</p>
      </section>
    </div>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/store'
import { increment, decrement, increAsync } from './store/appSlice';

function App() {

  const app = useSelector((state: RootState) => state.app)
  const dispatch = useDispatch()

  const setCountAdd = function () { 
    dispatch(increment(5));
  }
  const setCountAddAsync = function () { 
    dispatch(increAsync(11));
  }
  const decrementSet = function () { 
    dispatch(decrement());
  }

  return (
    <div className="App">
      <div className="index">
        <div>计数器</div>
        <div>{app.count}</div>
        <button onClick={setCountAdd}>点击试试</button>
        <button onClick={setCountAddAsync}>点击试试async</button>
        <button onClick={decrementSet}>点击减法</button>
        {app.loading && <div>loading....</div>}
      </div>
      <Link to="/Page1">Page1</Link>
      <br/>
      <Link to="/Page2">Page2</Link>
      <br/>
    </div>
  );
}

export default App;

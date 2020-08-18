import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from './store/store'
import { increment, decrement, increAsync } from './store/appSlice';

import { UserLogin, Agreement } from './api'

function App() {

  // 获取state
  const app = useSelector((state: RootState) => state.app)
  const dispatch = useDispatch()

  // dispatch increment
  const setCountAdd = function () { 
    dispatch(increment(5));
  }

  // dispatch async increAsync
  const setCountAddAsync = function () { 
    dispatch(increAsync(4));
  }

  // dispatch decrement
  const decrementSet = function () { 
    dispatch(decrement());
  }

  const login = async () => {
    let msg = await UserLogin('zhangsan')
    if (msg.errno === 0) {
      alert('登录成功')
    }
  }

  const agreement = async () => {
    let result = await Agreement()
    console.log(result.data)
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

      <br/>
      <div className="login">
        <button onClick={login}>登录</button>
        <button onClick={agreement}>协议</button>
      </div>

      <br/>
    </div>
  );
}

export default App;

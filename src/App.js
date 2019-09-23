import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
function Index() {
  useEffect(() => {
    console.log('useEffect=>老弟，你来了！Index页面')
    return () => {
      console.log('老弟，你走了!Index页面')
    }
  }
  )
  return (
    <h2>MECN</h2>
  )
}
function List() {
  useEffect(() => {
    console.log('useEffect=>小老弟，你来了')
  })
  return (
    <h2>List</h2>
  )
}
function App() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(5)
  useEffect(() => {
    console.log(`count${count}`)
  },[count])
  return (
    <div className="App">
      <p>clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>click me</button>
      <p>clicked {num}</p>
      <button onClick={() => { setNum(num + 1) }}>click me</button>
      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list/">列表</Link></li>
        </ul>
        <Route path="/" exact component={Index}></Route>
        <Route path="/list/" exact component={List}></Route>
      </Router>
    </div>
  );
}


export default App;

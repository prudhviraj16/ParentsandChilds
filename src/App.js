import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Api from './api'
import Child1 from './components/parent2/Child1'
import Child2 from './components/parent2/Child2'
import Num from './components/parent1/Child2'

const App = () => {

  const [count,setCount] = useState(0)
  const [data,setData] = useState([])
  const [show,setShow] = useState(true)
  const [pass,setPass] = useState(false)

  useEffect(()=>{
    console.log("Component Did Mount")
  },[])

  useEffect(()=>{
    console.log("Component Did Update");
  },[count])

  useEffect(()=>{
    console.log("Component Will UnMount")
  })

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Click me </button>
      {show&&<Api/>}
      <button onClick={()=>setShow(!show)}>Click Me</button>

      <Child2 />
      <Num/>
    </div>
  )
}

export default App

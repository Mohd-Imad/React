import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { incrAction,decrAction } from '../redux/counter.action'

const Counter = () => {

    let dispatch = useDispatch()

    let counter = useSelector((state)=>{
        return state
    })

    let incrHandler = ()=>{
        dispatch(incrAction())
    }
    let decrHandler = ()=>{
        dispatch(decrAction())
    }
  return (
    <>
      <h1>Counter : {counter.count}</h1>
      <button onClick={incrHandler}>Incr</button>
      <button onClick={decrHandler}>Decr</button>
    </>
  )
}

export default Counter

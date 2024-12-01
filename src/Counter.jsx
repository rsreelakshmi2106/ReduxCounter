import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from './Redux/counterSlice'

function Counter() {

    const dispatch = useDispatch()
    const count = useSelector((state) => state.counterReducer.count)

    return (
        <div className='border border-dark m-5 p-5 text-center bg-black rounded'>
            <div className='m-5'>
                <h1 className='text-light bg-black' style={{ fontSize: '100px' }}>{count}</h1>
                <div className='d-flex justify-content-evenly bg-black'>
                    <button onClick={() => dispatch(incrementCounter())} className='btn btn-primary'>Increment</button>
                    <button onClick={() => dispatch(decrementCounter())} className='btn btn-danger'>Decrement</button>
                    <button onClick={() => dispatch(resetCounter())} className='btn btn-light'>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Counter
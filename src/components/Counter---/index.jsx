import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    const counter = useSelector(state => state.counter.value)
    return (
        <div>{counter}</div>
    )
}

export default Counter
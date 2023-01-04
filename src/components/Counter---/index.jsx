import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    const counter = useSelector(state => state.counter.value)
    const [count, setCount] = useState(0)
    return (
        <div>{counter}</div>
    )
}

export default Counter
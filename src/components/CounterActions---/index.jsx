import React from 'react'
import { increment, decrement, incrementByAmount } from '../../stores/counterSlide'
import { useDispatch } from 'react-redux'

const CounterActions = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(decrement())}> Azalt(-)</button >
            <button onClick={() => dispatch(increment())} >Arttır (+)</button>
            <button onClick={() => dispatch(incrementByAmount(4))} >Arttır (+)</button>
        </div >
    )
}

export default CounterActions
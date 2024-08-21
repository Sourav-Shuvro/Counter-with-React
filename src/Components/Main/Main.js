import React, { useState } from 'react';
import './Main.css'

const Main = () => {
    const [time, setTime] = useState(0);

    const increment = () =>{
        setTime(time + 1);
    }
    const decrement = () =>{
        setTime(time - 1);
    }
    const reset = () =>{
        setTime(0);
    }
    return (
        <div className='main'>
            <div className='container'>
                <div>
                    <h1>{time}</h1>
                    <button className='btn' onClick={increment} disabled={time===5}>+</button>
                    <button className='btn' onClick={decrement} disabled={time===-5}>-</button>
                    <button className='btn' onClick={reset}>0</button>
                </div>
            </div>
        </div>
    );
};

export default Main;
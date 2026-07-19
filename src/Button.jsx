import React from 'react';
import { useDispatch } from 'react-redux'
import { addMoney, removeMoney } from './store.js';

export default function Button() {
    const dispatch = useDispatch();
  return (
    <div>
    <button onClick={() => dispatch(addMoney(1000))}>
         AddMoney
         </button>
         <span> </span>
    <button onClick={() => dispatch(removeMoney(1000))}>
        RemoveMoney
        </button>
    </div>
  )
}

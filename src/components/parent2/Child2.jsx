import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { toggle } from '../Redux/action';
const Child2 = () => {

    const dispatch = useDispatch() 
    return (
        <div>
            <br/>
            <button onClick={()=>{dispatch(toggle())}}>Toggling from child2 to child1</button>
        </div>
    );
};

export default Child2;
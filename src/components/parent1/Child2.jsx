import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
const Child2 = () => {
    const hide = useSelector((state)=>state.display)
    console.log(hide)
    return (
        <div>
            {hide ? alert("Clicked from parent2 child2") : ''}
            
        </div>
    );
};

export default Child2;
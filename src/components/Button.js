import React, { useContext } from 'react';
import { Context } from "../state_managment/GlobalState";

const Button = ({ dispatch, text }) => {
    const [state, dispatcher] = useContext(Context);
    return (
        <button onClick={() => dispatcher({ type: dispatch })}>{text}</button>
    );
}

export default Button;
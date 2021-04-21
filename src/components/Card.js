import React, { useContext } from 'react';
import { Context } from "../state_managment/GlobalState";
import Button from "./Button";

const Card = () => {
    const [state] = useContext(Context)
    return (
        <div className="card col-6">
            <h1>Count: {state.count}</h1>
            <Button dispatch="increment" text="+"/>
            <Button dispatch="decrement" text="-"/>
            <Button dispatch="inc_100" text="+100"/>
            <Button dispatch="dec_100" text="-100"/>
        </div>
    );
}

export default Card;

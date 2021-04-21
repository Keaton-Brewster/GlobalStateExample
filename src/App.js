import React from "react";
import Card from "./components/Card";
import Store from "./state_managment/GlobalState";

export default function App() {
    return (
        <Store>
            <Card />
        </Store>
    );
};
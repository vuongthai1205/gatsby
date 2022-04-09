import React from "react";

const Greeting = (props) => {
    return (
        <>
            <h1>Hello {props.name}, {props.age}</h1>
        </>
    )
}

export default Greeting
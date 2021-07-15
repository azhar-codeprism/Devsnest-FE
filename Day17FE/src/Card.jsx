import React from "react"

function Card(props) {
    return (
        <div className="card">
            <h1 > {props.name}</h1>
            <p style={{ "fontSize": "x-large" }}> Contains {props.value} calories</p>
        </div>
    )
}

export default Card
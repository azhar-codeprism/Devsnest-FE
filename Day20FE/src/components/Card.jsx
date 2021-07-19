import React from 'react';
import delImg from './delete.png'

function Card({list, recepie, description, key, setArr, index}) {
            return (
            <div className = "card">
                <h1>{key}</h1>
                <h3>{recepie}</h3>
                    <div className="card-content">
                        <p style={{"fontWeight":"bolder"}}>{description}</p>
                        <button onClick={()=> { console.log(list)
                                                let newList = list.filter((ele,i)=> i!==index);
                                                setArr(newList)}}><img src = {delImg} alt = "del"></img></button>
                    </div>
            </div>)
        }

export default Card

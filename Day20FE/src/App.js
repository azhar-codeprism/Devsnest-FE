import React, {useState} from 'react';
import './App.css';
import Card  from './components/Card';
let list = [{recepie:"Pizza",description:"you have consumed 56 cals today"},
            {recepie:"Borgir",description:"you have consumed 69 cals today"},
            {recepie:"Coke",description:"you have consumed 500 cals today"},
            {recepie:"Lasagna",description:"you have consumed 600 cals today"},
            {recepie:"Fried Rice",description:"you have consumed 200 cals today"}]

function App() {
  let [arr, setArr] = useState(list)
  return (<div className="container">
    {arr.map((el,index)=>{
      return <Card list = {arr} index = {index} recepie = {el.recepie} description = {el.description} key = {el.key} setArr = {setArr}/>
    })}
    </div>
    
  );
}

export default App;

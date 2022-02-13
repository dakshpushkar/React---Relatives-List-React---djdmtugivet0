import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
         super(props)
        this.realativeList = [
            {name:puhkar ,location :delhi},
            {name:Ravi ,location:pune},
            {name:Rhul , location:up},
            {name:Gaja , location:guj}
        ]
    }
   
   
    render() {

        return(
            <div id="main">
            <ol>
               {this.realativeList.map((relativeName,index)=>{
                  const key = "location" + index
                  return <li key={key}>{relativeName.name}</li>
               })}
            </ol>
            </div>
        )
    }
}


export default App;

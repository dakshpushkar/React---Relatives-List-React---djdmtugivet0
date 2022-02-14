import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.realativeList = [
          { name: "puhkar", key:" relativeListItem1", location: "delhi" },
          { name: "Ravi",key:" relativeListItem2", location: "pune" },
          { name: "Rhul", key:" relativeListItem3",location: "up" },
          { name: "Gaja", key:" relativeListItem4",location: "guj" }
        ];
      }
   
    render() {

        return(
            <div id="main">
            <ol key={this.realativeList.key}>
               {this.realativeList.map((relativeName,index)=>{
                  {/* const key = "location" + index */}
                  return <li key={relativeName.key}>{relativeName.name}</li>
               })}
            </ol>
            </div>
        )
    }
}


export default App;

import React, { Component } from 'react';

class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         employees:[
            {
               empName: 'John',
               id: 1
            },
            {
               empName: 'Steve',
               id: 2
            },
            {
               empName: 'Alex',
               id: 3
            }
         ]
      }
   }
   render() {
      return (
         <div>
           <h1>W3Adda - React Keys</h1>
            <div>
               {this.state.employees.map((data, i) => <Employee 
                  key = {i} empData = {data}/>)}
            </div>
         </div>
      );
   }
}
class Employee extends React.Component {
   render() {
      return (
         <div>
            <div>{this.props.empData.empName}</div>
            <div>{this.props.empData.id}</div>
         </div>
      );
   }
}
export default App;
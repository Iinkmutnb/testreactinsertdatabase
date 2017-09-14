import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import queryString from 'query-string';
import fetch from 'node-fetch';



class App extends React.Component {
  constructor() {
    super();
    this.state = { user: {} };
    this.onSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    console.log(self.refs.name.value);
    var data = {
      name: self.refs.name.value,
      job: self.refs.job.value
  };
  
  
 
 
  
  /*fetch("http://localhost:9000/users",
  {
    headers: {
      
  },

      method: "POST",
      body:  queryString.stringify(data)
    
  })
  .then(res=>{console.log(res);})
  .then(res => {console.log(res)});
*/

 /*fetch("http://localhost:9000/showusers",
  {
    'mode':'no-cors',
    headers: {
      'Content-Type':'application/x-www-form-urlencoded'
  },

      method: "POST",
      body:  queryString.stringify({'name':'*'})
    
  })
  .then(res=> res.json())
  .then(data => {console.log(data)});


*/
fetch('http://localhost:9000/insertusers',  {
  headers: {
    'Content-Type':'application/x-www-form-urlencoded'
  
  },
  
  
      method: "POST",
      body:  queryString.stringify(data)

});
fetch('http://localhost:9000/showusers',  {
 
  headers: {
  'Content-Type':'application/x-www-form-urlencoded'

},


    method: "POST",
    body:  queryString.stringify({'name':'*'})
   
  
})
.then((response) => response.json())
.then((pages) => {console.log(pages)})
.catch(function(error) {
  console.log( error.message);});
    

  


  }
  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Name" ref="name"/>
        <input type="text" placeholder="Job" ref="job"/>
        <input type="submit" />
      </form>
   
      </div>
    );
  }
}

export default App;

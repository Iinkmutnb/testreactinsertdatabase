import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import queryString from 'query-string';

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
  
  
 
 
  
  fetch("http://localhost:9014/users",
  {
    headers: {
      'Content-Type':'application/x-www-form-urlencoded'
  },

      method: "POST",
      body:  queryString.stringify(data)
    
  })
  .then(res=>{console.log(res);})
  .then(res => {console.log(res)});

    
  fetch("http://localhost:9014/showusers",
  {
    headers: {
      'Content-Type':'application/x-www-form-urlencoded'
  },

      method: "POST"
    
  })
  .then(res=>{console.log(res)})

    

  


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

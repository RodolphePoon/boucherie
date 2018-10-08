import React, { Component } from 'react';
import data from './boucherie.json';
import { Link } from 'react-router-dom'


class List extends Component {

  render() {
    return (
      <div style={{padding:10}}>
      {
        data.map((item,index)=>(
          <div key={index}><Link to={{pathname:'/detail',state:{index:index}}} >{item.Nom}</Link></div>))
      }
       
      </div>
      
    );
  }
}

export default List;

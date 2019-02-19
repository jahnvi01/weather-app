import React, { Component } from 'react';
import {connect} from 'react-redux';
import Details from './details';

class Weather extends Component {
    search=()=>{
        var city=document.getElementById("city").value;
        var name={
            city:city 
        }
      this.props.find(name);
    }
  render() {
      var data=this.props.city
    return (
      <div className="App">
      
      <h2 id="title">Check weather here :)</h2>
      <br /><br />
     <input type="text" id="city" placeholder="Enter any city"/>
     <button type="submit" onClick={()=>{this.search()}}>Search</button>

     <Details city={data}/>
      </div>
    );
  }
}
function mapStateToProps(state){
    console.log(state.name);
    return {city:state.name};
};

function mapDispatchToProps(dispatch){
    return {
find:(name)=>{
    
    return fetch('/api/items',{
method:"post",headers:{
    'Accept':'application/json, text/plain, */*',
    'Content-Type':'application/json'
},
        body:JSON.stringify(name)},)
        .then(Response=>Response.json())
        .then(data=>dispatch({type:"post",payload:data}))
}
}
    }
export default connect(mapStateToProps,mapDispatchToProps)(Weather);
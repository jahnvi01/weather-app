import React, { Component } from 'react';


class Details extends Component {
  
  render() {
      var data=this.props.city
    return (
      <div className="description">
          <div className="desc">
    <h3>Details: </h3>
    <h2> {data.main}  </h2>
    </div>
    <div className="desc">
    <h3>Temperature:  </h3>
    <h2> {data.temp} </h2>
    </div>
      <div className="desc">
    <h3> Min temp:</h3>
    <h2>  {data.temp_min}  </h2>
    </div>
      <div className="desc">
    <h3>Temp_max:</h3>
    <h2>   {data.temp_max} </h2>
    </div>
      <div className="desc">
    <h3>Humidity: </h3>
    <h2> {data.humidity}  </h2>
    </div>
    
    </div>
    );
  }
}

export default Details;
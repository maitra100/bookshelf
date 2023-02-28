import React from 'react';
import './body.css';
import data from '../../index.json';
import Card from '../Card';

function Body() {
  const keys = Object.keys(data);
  return (
    <div id="content">
      {keys.map((key, index) => {
        console.log(data[key]);
        return (
          <div id="box" key={index}>
            <div id="text">{key}</div>
            <div id="cards">
              {data[key].map((item, index) => {
                return <Card key={index} title={item.Name} rating={item.rating} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Body;

import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
  datasets: [{
    data: [,20],
    backgroundColor: [
    '#4169E1',
    '#EEEEEE'
    ],
    hoverBackgroundColor: [
    '#4169E1',
    '#EEEEEE'
    ]
  }]
};
export class DoughnutExample extends React.Component{
  constructor(props){
    super(props);
   /* this.state={
      c1:this.props.
    }
    console.log(this.state.c1)*/
  }
  render() {
    return (
      <div>
        <Doughnut data={data} />
      </div>
    );
  }
}
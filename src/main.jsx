import React from 'react';
import BarChart from'../src/Charts/BarChart/barChart.jsx';
import BarChartLeft from'../src/Charts/BarChartLeft/barChartLeft.jsx';

/*
Main component returns the BarChart component wrapped in a container <div>.
*/
const Main = () => {
  return (
      <div className="container">
        <BarChartLeft
        />
      </div>
  )
}

export default Main;

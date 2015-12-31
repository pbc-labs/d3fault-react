import React from 'react';
import BarChart from'../src/Charts/BarChart/barChart.jsx';
import BarChartLeft from'../src/Charts/BarChartLeft/barChartLeft.jsx';
import chartData from './Data/chartDataCopy.js';

/*
Main component returns the BarChart component wrapped in a container <div>.
*/
const Main = () => {
  return (
      <div className="container">
        <BarChart
          title={'Letter Frequency'}
          xAxisLabel={'Letters'}
          yAxisLabel={'Frequency'}
        />
      </div>
  )
}

export default Main;

import React from 'react';
import BarChart from'../src/Charts/BarChart/barChart.jsx';
import BarChartLeft from'../src/Charts/BarChartLeft/barChartLeft.jsx';

const Main = () => {
  return (
      <div className="container">
        <BarChart
          title='new title, yo'
        />
      </div>
  )
}

export default Main;

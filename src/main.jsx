import React from 'react';
import BarChart from'./barChart.jsx';

const Main = () => {
  return (
      <div className="container">
        <BarChart
          width={600}
          height={300}
          title='My new title'
          fontSize={12}
          fontStyle='Comic Sans MS'
          yAxisLabel='New Y'
          colors={['red']}
        />
      </div>
  )
}

export default Main;

import d3 from 'd3';
import React from 'react';
import Chart from './chart.jsx';
import Data from './data.jsx';
import XAxis from './x-axis.jsx';
import YAxis from './y-axis.jsx';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }

  render() {
    const xScale = d3.scale.ordinal()
                      .rangeRoundBands([0, this.props.width], 0.1);
    const xArray = [];

    this.props.data.forEach(function (item) {
      xArray.push(item.letterTest);
    });

    xScale.domain(xArray);

    const yScale = d3.scale.linear()
                      .range([this.props.height, 0]);

    const yArray = [];

    this.props.data.forEach(function (item) {
      yArray.push(item.frequencyTest);
    });

    yScale.domain([0, d3.max(yArray)]);

    const marginTop = this.props.margins.top;
    const marginLeft = this.props.margins.left;
    const tran = 'translate(' + marginLeft + ',' + marginTop + ')';

    return (
      <div>
        <Chart
          colors={this.props.colors}
          width={this.props.width}
          height={this.props.height}
          title={this.props.title}
          margins={this.props.margins}
        >
          <g transform="translate(50, 30)" className={this.props.chartClassName}>
            <XAxis
              height={this.props.height}
              width={this.props.width}
              scale={xScale}
              scaleType={this.props.xscaleType}
            />
            <YAxis
              height={this.props.height}
              width={this.props.width}
              scale={yScale}
              scaleType={this.props.yscaleType}
            />
            <Data
              xScale={xScale}
              yScale={yScale}
              data={this.props.data}
              margins={this.props.margins}
              height={this.props.height}
              width={this.props.width}
            />
           </g>
        </Chart>
      </div>
    );
  }
};

BarChart.defaultProps = {
  width: 600,
  height: 300,
  title: 'Default Title, YO!',
  margins: { top: 30, right: 30, bottom: 30, left: 50 },
  colors: ['steelblue', 'red', 'green'],
  chartClassName: 'bar-chart-class',
  titleTextAlign: 'center',
  xscaleType: 'X',
  yscaleType: 'Y',
  data: [
    { 'letterTest': 'A', 'frequencyTest': 0.08167 },
    { 'letterTest': 'B', 'frequencyTest': 0.01492 },
    { 'letterTest': 'C', 'frequencyTest': 0.02782 },
    { 'letterTest': 'D', 'frequencyTest': 0.04253 },
    { 'letterTest': 'E', 'frequencyTest': 0.12702 },
    { 'letterTest': 'F', 'frequencyTest': 0.02288 },
    { 'letterTest': 'G', 'frequencyTest': 0.02015 },
    { 'letterTest': 'H', 'frequencyTest': 0.06094 },
    { 'letterTest': 'I', 'frequencyTest': 0.06966 },
    { 'letterTest': 'J', 'frequencyTest': 0.00153 },
    { 'letterTest': 'K', 'frequencyTest': 0.00772 },
    { 'letterTest': 'L', 'frequencyTest': 0.04025 },
    { 'letterTest': 'M', 'frequencyTest': 0.02406 },
    { 'letterTest': 'N', 'frequencyTest': 0.06749 },
    { 'letterTest': 'O', 'frequencyTest': 0.07507 },
    { 'letterTest': 'P', 'frequencyTest': 0.01929 },
    { 'letterTest': 'Q', 'frequencyTest': 0.00095 },
    { 'letterTest': 'R', 'frequencyTest': 0.05987 },
    { 'letterTest': 'S', 'frequencyTest': 0.06327 },
    { 'letterTest': 'T', 'frequencyTest': 0.09056 },
    { 'letterTest': 'U', 'frequencyTest': 0.02758 },
    { 'letterTest': 'V', 'frequencyTest': 0.00978 },
    { 'letterTest': 'W', 'frequencyTest': 0.0236 },
    { 'letterTest': 'X', 'frequencyTest': 0.0015 },
    { 'letterTest': 'Y', 'frequencyTest': 0.01974 },
    { 'letterTest': 'Z', 'frequencyTest': 0.00074 },
    ]
};

export default BarChart;

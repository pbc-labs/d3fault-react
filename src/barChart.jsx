import d3 from 'd3';
import React from 'react';
import Chart from './chart.jsx';
import Data from './data.jsx';
import XAxis from './x-axis.jsx';
import YAxis from './y-axis.jsx';
import ChartData from './chartData.js';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: ChartData }
    // Operations usually carried out in componentWillMount go here
  }

  render() {
    const xScale = d3.scale.ordinal()
                      .rangeRoundBands([0, this.props.width], 0.1);
    const xArray = [];

    this.state.data.forEach(function (item) {
      xArray.push(item.letterTest);
    });

    xScale.domain(xArray);

    const yScale = d3.scale.linear()
                      .range([this.props.height, 0]);

    const yArray = [];

    this.state.data.forEach(function (item) {
      yArray.push(item.frequencyTest);
    });

    yScale.domain([0, d3.max(yArray)]);

    const marginTop = this.props.margins.top;
    const marginLeft = this.props.margins.left;
    const tran = 'translate(' + marginLeft + ',' + marginTop + ')';

    return (
      <div>
        <Chart
          width={this.props.width}
          height={this.props.height}
          title={this.props.title}
          margins={this.props.margins}
          fontSize={this.props.fontSize}
          fontStyle={this.props.fontStyle}
          titleFontSize={this.props.titleFontSize}
        >
          <g transform="translate(50, 30)" className={this.props.chartClassName}>
            <XAxis
              height={this.props.height}
              width={this.props.width}
              scale={xScale}
              scaleType={this.props.xscaleType}
              innerTickSize={this.props.innerTickSize}
              outerTickSize={this.props.outerTickSize}
              tickPadding={this.props.tickPadding}
              xAxisLabel={this.props.xAxisLabel}
            />
            <YAxis
              height={this.props.height}
              width={this.props.width}
              scale={yScale}
              scaleType={this.props.yscaleType}
              innerTickSize={this.props.innerTickSize}
              outerTickSize={this.props.outerTickSize}
              tickPadding={this.props.tickPadding}
              yAxisLabel={this.props.yAxisLabel}
            />
            <Data
              xScale={xScale}
              yScale={yScale}
              data={this.state.data}
              margins={this.props.margins}
              height={this.props.height}
              width={this.props.width}
              colors={this.props.colors}
            />
           </g>
        </Chart>
      </div>
    );
  }
};

BarChart.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  margins: React.PropTypes.object.isRequired,
  colors: React.PropTypes.array.isRequired,
  fontSize: React.PropTypes.number.isRequired,
  titleFontSize: React.PropTypes.number.isRequired,
  xAxisLabel: React.PropTypes.string.isRequired,
  yAxisLabel: React.PropTypes.string.isRequired,
  chartClassName: React.PropTypes.string.isRequired,
  titleTextAlign: React.PropTypes.string.isRequired,
  xscaleType: React.PropTypes.string.isRequired,
  yscaleType: React.PropTypes.string.isRequired,
  innerTickSize: React.PropTypes.number.isRequired,
  outerTickSize: React.PropTypes.number.isRequired,
  tickPadding: React.PropTypes.number.isRequired
}

BarChart.defaultProps = {
  width: 600,
  height: 300,
  title: 'Default Title, YO!',
  margins: { top: 30, right: 30, bottom: 30, left: 50 },
  colors: ['steelblue', 'red', 'green'],
  fontSize: 14,
  titleFontSize: 18,
  fontStyle: 'Arial',
  xAxisLabel: 'Default X',
  yAxisLabel: 'Default Y',
  chartClassName: 'bar-chart-class',
  titleTextAlign: 'center',
  xscaleType: 'X',
  yscaleType: 'Y',
  innerTickSize: 6,
  outerTickSize: 6,
  tickPadding: 4
};

export default BarChart;

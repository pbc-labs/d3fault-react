import React from 'react';
import d3 from 'd3';
import AxisPath from './axisPath.jsx';
import AxisTicks from './axisTicks.jsx';
import AxisLabel from './axisLabel.jsx';

class YAxis extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }


  render() {
    const trans = `translate(${this.props.yAxisOffset}, 0)`;
    return (
      <g
        className={this.props.xAxisClassName}
        transform={trans}
      >
        <AxisTicks
          scale={this.props.scale}
          orient={this.props.yOrient}
          height={this.props.height}
          opacity={this.props.opacity}
          fill={this.props.fill}
          tickArguments={this.props.tickArguments}
          scaleType={this.props.scaleType}
        />
        <AxisPath
          scale={this.props.scale}
          orient={this.props.yOrient}
        />
        <AxisLabel
          transform={this.props.transform}
          className={this.props.yLabelClassName}
          offset={this.props.offset}
          scale={this.props.scale}
          orient={this.props.yOrient}
          height={this.props.height}
          width={this.props.width}
        />
      </g>
    );
  }
};

YAxis.defaultProps = {
  yOrient: 'right',
  stroke: 'rgb(0, 0, 0)',
  yAxisOffset: 0,
  yAxisClassName: 'd3fault-y-axis',
  opacity: 1,
  fill: 'none',
  tickArguments: [10],
  transform: 'rotate(-90)',
  yLabelClassName: 'd3fault-y-label',
  offset: 12
}

export default YAxis;

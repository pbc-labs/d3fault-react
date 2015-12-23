import React from 'react';
import d3 from 'd3';
import AxisPath from './axisPath.jsx';
import AxisTicks from './axisTicks.jsx';
import AxisLabel from './axisLabel.jsx';

class XAxis extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }


  render() {
    const trans = `translate(0 ,${this.props.xAxisOffset + this.props.height})`;
    const yAxis = d3.svg.axis()
                        .scale(this.props.scale)
                        .orient(this.props.xOrient);
    return (
      <g
        className={this.props.xAxisClassName}
        transform={trans}
      >
        <AxisTicks
          scale={this.props.scale}
          orient={this.props.xOrient}
          height={this.props.height}
          opacity={this.props.opacity}
          fill={this.props.fill}
          tickArguments={this.props.tickArguments}
          scaleType={this.props.scaleType}
        />
        <AxisPath
          scale={this.props.scale}
          orient={this.props.xOrient}
        />
      <AxisLabel
        transform={this.props.transform}
        className={this.props.xLabelClassName}
        offset={this.props.offset}
        scale={this.props.scale}
        orient={this.props.xOrient}
        height={this.props.height}
        width={this.props.width}
      />
      </g>
    );
  }
};

XAxis.defaultProps = {
  xOrient: 'bottom',
  xAxisOffset: 0,
  xAxisClassName: 'd3fault-x-axis',
  opacity: 1,
  fill: 'none',
  tickArguments: [10],
  transform: 'rotate(0)',
  xLabelClassName: 'd3fault-x-label',
  offset: 12

}

export default XAxis;

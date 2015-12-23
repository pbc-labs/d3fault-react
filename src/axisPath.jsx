import React from 'react';

class AxisPath extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }

  scaleExtent(domain) {
    // can we just use the scale domain?
    const start = domain[0];
    const stop = domain[domain.length - 1];
    return start < stop ? [start, stop] : [stop, start];
  }

  scaleRange(scale) {
    return scale.rangeExtent ? scale.rangeExtent() : this.scaleExtent(scale.range());
  }

  render() {
    const sign = this.props.orient === "top" || this.props.orient === "left" ? -1 : 1;
    const range = this.scaleRange(this.props.scale);

    if (this.props.orient === "bottom" || this.props.orient === "top") {
      var d = "M" + range[0] + "," + sign * this.props.outerTickSize + "V0H" + range[1] + "V" + sign * this.props.outerTickSize;
    } else {
      var d = "M" + sign * this.props.outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * this.props.outerTickSize;
    }

    return (
      <path
        className="domain"
        d={d}
        style={{'shapeRendering':'crispEdges'}}
        fill={this.props.fill}
        stroke={this.props.stroke}
      >
      </path>
    );
  }
};

AxisPath.defaultProps = {
  innerTickSize: 6,
  outerTickSize: 6,
  tickPadding: 4,
  fill: 'none',
  tickArguments: [10],
  tickValues: null,
  tickFormat: null,
  stroke: 'rgb(0, 0, 0)'
}

export default AxisPath;

import React from 'react';
import Rect from './rect.jsx';

class Data extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }

  render() {
    return (
      <g>{this.renderBars()}</g>
    );
  }

  renderBars() {
    return (
      this.props.data.map((d, i) => {
        return this.renderRect(this.props.yScale(d.frequencyTest), this.props.xScale(d.letterTest), d, i + 1);
      })
    )
  }

  renderRect(yVals, xVals, d, i) {
    var { xScale, yScale, data, margins, height, width } = this.props;
    return (
      <Rect
        key={i}
        height={height - yScale(d.frequencyTest)}
        width={xScale.rangeBand()}
        x={xVals}
        y={yScale(d.frequencyTest)}
      />
    )
  }
};


export default Data;

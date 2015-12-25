import React from 'react';
import Rect from '../BarChart/rect.jsx';

class DataLeft extends React.Component {
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
        return this.renderRect(this.props.xScale(d.frequencyTest), this.props.yScale(d.letterTest), d, i + 1);
      })
    )
  }

  renderRect(xVals, yVals, d, i) {
    var { xScale, yScale, data, margins, height, width } = this.props;
    return (
      <Rect
        key={i}
        height={yScale.rangeBand()}
        width={xScale(d.frequencyTest)}
        x={0}
        y={yVals}
        colors={this.props.colors}
      />
    )
  }
};


export default DataLeft;

import React from 'react';

class Rect extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }

  render() {
    return (
      <rect
        className={this.props.rectClassName}
        fill={this.props.fill}
        height={this.props.height}
        width={this.props.width}
        x={this.props.x}
        y={this.props.y}
      />
    );
  }
};

Rect.defaultProps = {
  fill: 'steelblue',
  rectClassName: "d3fault-bar-rect"
};

Rect.propTypes = {
  fill: React.PropTypes.string
};

export default Rect;

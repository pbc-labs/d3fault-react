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
        fill={this.props.colors[0]}
        height={this.props.height}
        width={this.props.width}
        x={this.props.x}
        y={this.props.y}
      />
    );
  }
};

Rect.propTypes = {
  rectClassName: React.PropTypes.string.isRequired

};

Rect.defaultProps = {
  rectClassName: "d3fault-bar-rect"
};

export default Rect;

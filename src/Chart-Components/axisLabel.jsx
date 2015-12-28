import React from 'react';

class AxisLabel extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }

  render() {
    var trans = this.props.transform;

    if (this.props.orient === 'top' || this.props.orient === 'bottom') {
      var x = this.props.width * 0.5 + this.props.offset;
      var y = this.props.offset * 2;
    } else {
      var x = - this.props.height * 0.5 + this.props.offset * 0.5;
      if (this.props.orient === 'left') {
        var y = -this.props.offset;
      } else {
        var y = -this.props.offset;
      }
    }
    return (
      <text
        textAnchor="end"
        y={y}
        x={x}
        transform={trans}
      >
        {this.props.axisLabel}
      </text>
    );
  }
};


AxisLabel.propTypes = {
  offset: React.PropTypes.number.isRequired,
  textAnchor: React.PropTypes.string.isRequired
}

AxisLabel.defaultProps = {
  offset: 20,
  textAnchor: 'end'
}

export default AxisLabel;

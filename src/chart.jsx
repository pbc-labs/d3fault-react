import React from 'react';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }

  renderTitle() {
    return (
      <text
        className={this.props.titleClassName}
        x='300'
        y='20'
      >
        {this.props.title}
      </text>
    );
  }

  renderChart() {

    const widthAdj = this.props.width + this.props.margins.left + this.props.margins.right;

    const heightAdj = this.props.height + this.props.margins.top + this.props.margins.bottom;

    return (
      <svg
        className={this.props.svgClassName}
        height={heightAdj}
        width={widthAdj}
        fontSize={this.props.fontSize}
        fontFamily={this.props.fontStyle}
      >
      {this.props.children}
      {this.renderTitle()}
      </svg>
    );
  }

  render() {
    const widthAdj = this.props.width + this.props.margins.left + this.props.margins.right;

    const heightAdj = this.props.height + this.props.margins.top + this.props.margins.bottom;

    return (
      <div
        className={this.props.mainClassName}
      >
        {this.renderChart()}
      </div>
    );
  }
};

Chart.defaultProps = {
    mainClassName: 'd3fault-chart',
    titleClassName: 'd3fault-title',
    svgClassName: 'd3fault-title',
    fontSize: 14,
    fontStyle: 'Arial'

}

export default Chart;

import React from 'react';

/*
Defines the component which encompasses the svg, chart, and chart title.
We build up the svg and title in this componenet. We render the children
components that are passed into Chart within the BarChart component.
*/
class Chart extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }

  renderChart() {
    // sets the svg width to be the chart width + left/right margins
    const widthAdj = this.props.width + this.props.margins.left + this.props.margins.right;

    // position title in center of svg
    const titleXPosition = widthAdj * 0.5;

    // sets the svg height to be the chart height + top/bottom margins
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
        <text
          className={this.props.titleClassName}
          x={titleXPosition}
          y='20'
          fontSize={this.props.titleFontSize}
        >
          {this.props.title}
        </text>
      </svg>
    );
  }

  render() {
    return (
      <div
        className={this.props.mainClassName}
      >
        {this.renderChart()}
      </div>
    );
  }
};

Chart.propTypes = {
  mainClassName: React.PropTypes.string.isRequired,
  titleClassName: React.PropTypes.string.isRequired,
  svgClassName: React.PropTypes.string.isRequired
}

Chart.defaultProps = {
    mainClassName: 'd3fault-chart',
    titleClassName: 'd3fault-title',
    svgClassName: 'd3fault-svg'

}

export default Chart;

// TODO: https://github.com/Swizec/react-testing-example
// http://swizec.com/reactd3js/

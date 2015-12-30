'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chart = require('../../chart.jsx');

var _chart2 = _interopRequireDefault(_chart);

var _data = require('./data.jsx');

var _data2 = _interopRequireDefault(_data);

var _xAxis = require('../../Chart-Components/xAxis.jsx');

var _xAxis2 = _interopRequireDefault(_xAxis);

var _yAxis = require('../../Chart-Components/yAxis.jsx');

var _yAxis2 = _interopRequireDefault(_yAxis);

var _chartData = require('../../Data/chartData.js');

var _chartData2 = _interopRequireDefault(_chartData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
Defines BarChart component. This uses the Chart componenet to render
svg element, and then within the svg renders the the x-axis, y-axis,
rectangles using the chart data.
*/

var BarChart = (function (_React$Component) {
  _inherits(BarChart, _React$Component);

  function BarChart(props) {
    _classCallCheck(this, BarChart);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BarChart).call(this, props));

    _this.state = { data: _chartData2.default };
    // Operations usually carried out in componentWillMount go here
    return _this;
  }

  _createClass(BarChart, [{
    key: 'render',
    value: function render() {
      var xScale = _d2.default.scale.ordinal().rangeRoundBands([0, this.props.width], 0.1);
      var xArray = [];

      this.state.data.forEach(function (item) {
        xArray.push(item.letterTest);
      });

      xScale.domain(xArray);

      var yScale = _d2.default.scale.linear().range([this.props.height, 0]);

      var yArray = [];

      this.state.data.forEach(function (item) {
        yArray.push(item.frequencyTest);
      });

      yScale.domain([0, _d2.default.max(yArray)]);

      var marginTop = this.props.margins.top;
      var marginLeft = this.props.margins.left;
      var tran = 'translate(' + marginLeft + ',' + marginTop + ')';

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _chart2.default,
          {
            width: this.props.width,
            height: this.props.height,
            title: this.props.title,
            margins: this.props.margins,
            fontSize: this.props.fontSize,
            fontStyle: this.props.fontStyle,
            titleFontSize: this.props.titleFontSize
          },
          _react2.default.createElement(
            'g',
            { transform: 'translate(50, 30)', className: this.props.chartClassName },
            _react2.default.createElement(_xAxis2.default, {
              height: this.props.height,
              width: this.props.width,
              scale: xScale,
              scaleType: this.props.xscaleType,
              innerTickSize: this.props.innerTickSize,
              outerTickSize: this.props.outerTickSize,
              tickPadding: this.props.tickPadding,
              xAxisLabel: this.props.xAxisLabel
            }),
            _react2.default.createElement(_yAxis2.default, {
              height: this.props.height,
              width: this.props.width,
              scale: yScale,
              scaleType: this.props.yscaleType,
              innerTickSize: this.props.innerTickSize,
              outerTickSize: this.props.outerTickSize,
              tickPadding: this.props.tickPadding,
              yAxisLabel: this.props.yAxisLabel
            }),
            _react2.default.createElement(_data2.default, {
              xScale: xScale,
              yScale: yScale,
              data: this.state.data,
              margins: this.props.margins,
              height: this.props.height,
              width: this.props.width,
              colors: this.props.colors
            })
          )
        )
      );
    }
  }]);

  return BarChart;
})(_react2.default.Component);

;

BarChart.propTypes = {
  width: _react2.default.PropTypes.number.isRequired,
  height: _react2.default.PropTypes.number.isRequired,
  title: _react2.default.PropTypes.string.isRequired,
  margins: _react2.default.PropTypes.object.isRequired,
  colors: _react2.default.PropTypes.array.isRequired,
  fontSize: _react2.default.PropTypes.number.isRequired,
  titleFontSize: _react2.default.PropTypes.number.isRequired,
  xAxisLabel: _react2.default.PropTypes.string.isRequired,
  yAxisLabel: _react2.default.PropTypes.string.isRequired,
  chartClassName: _react2.default.PropTypes.string.isRequired,
  titleTextAlign: _react2.default.PropTypes.string.isRequired,
  xscaleType: _react2.default.PropTypes.string.isRequired,
  yscaleType: _react2.default.PropTypes.string.isRequired,
  innerTickSize: _react2.default.PropTypes.number.isRequired,
  outerTickSize: _react2.default.PropTypes.number.isRequired,
  tickPadding: _react2.default.PropTypes.number.isRequired
};

BarChart.defaultProps = {
  width: 600,
  height: 300,
  title: 'Default Title',
  margins: { top: 30, right: 30, bottom: 50, left: 55 },
  colors: ['#E71D36', '#26408B', '#FF9F1C', '#767B91', '#0FA3B1'],
  fontSize: 14,
  titleFontSize: 18,
  fontStyle: 'Sans Serif',
  xAxisLabel: 'Default X',
  yAxisLabel: 'Default Y',
  chartClassName: 'bar-chart-class',
  titleTextAlign: 'center',
  xscaleType: 'X',
  yscaleType: 'Y',
  innerTickSize: 6,
  outerTickSize: 6,
  tickPadding: 4
};

exports.default = BarChart;
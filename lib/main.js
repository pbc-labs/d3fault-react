'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _barChart = require('../src/Charts/BarChart/barChart.jsx');

var _barChart2 = _interopRequireDefault(_barChart);

var _barChartLeft = require('../src/Charts/BarChartLeft/barChartLeft.jsx');

var _barChartLeft2 = _interopRequireDefault(_barChartLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main() {
  return _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(_barChart2.default, null)
  );
};

exports.default = Main;
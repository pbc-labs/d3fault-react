'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

var _axisPath = require('./axisPath.jsx');

var _axisPath2 = _interopRequireDefault(_axisPath);

var _axisTicks = require('./axisTicks.jsx');

var _axisTicks2 = _interopRequireDefault(_axisTicks);

var _axisLabel = require('./axisLabel.jsx');

var _axisLabel2 = _interopRequireDefault(_axisLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XAxis = (function (_React$Component) {
  _inherits(XAxis, _React$Component);

  function XAxis(props) {
    _classCallCheck(this, XAxis);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(XAxis).call(this, props));
    // Operations usually carried out in componentWillMount go here
  }

  _createClass(XAxis, [{
    key: 'render',
    value: function render() {
      var trans = 'translate(0 ,' + (this.props.xAxisOffset + this.props.height) + ')';
      var yAxis = _d2.default.svg.axis().scale(this.props.scale).orient(this.props.xOrient);
      return _react2.default.createElement(
        'g',
        {
          className: this.props.xAxisClassName,
          transform: trans
        },
        _react2.default.createElement(_axisTicks2.default, {
          scale: this.props.scale,
          orient: this.props.xOrient,
          height: this.props.height,
          opacity: this.props.opacity,
          fill: this.props.fill,
          tickArguments: this.props.tickArguments,
          scaleType: this.props.scaleType,
          innerTickSize: this.props.innerTickSize,
          outerTickSize: this.props.outerTickSize,
          tickPadding: this.props.tickPadding
        }),
        _react2.default.createElement(_axisPath2.default, {
          scale: this.props.scale,
          orient: this.props.xOrient,
          innerTickSize: this.props.innerTickSize,
          outerTickSize: this.props.outerTickSize,
          tickPadding: this.props.tickPadding
        }),
        _react2.default.createElement(_axisLabel2.default, {
          transform: this.props.transform,
          className: this.props.xLabelClassName,
          offset: this.props.offset,
          scale: this.props.scale,
          orient: this.props.xOrient,
          height: this.props.height,
          width: this.props.width,
          axisLabel: this.props.xAxisLabel
        })
      );
    }
  }]);

  return XAxis;
})(_react2.default.Component);

;

XAxis.propTypes = {
  xOrient: _react2.default.PropTypes.string.isRequired,
  xAxisOffset: _react2.default.PropTypes.number.isRequired,
  xAxisClassName: _react2.default.PropTypes.string.isRequired,
  opacity: _react2.default.PropTypes.number.isRequired,
  fill: _react2.default.PropTypes.string,
  tickArguments: _react2.default.PropTypes.array.isRequired,
  transform: _react2.default.PropTypes.string.isRequired,
  xLabelClassName: _react2.default.PropTypes.string.isRequired,
  offset: _react2.default.PropTypes.number.isRequired
};

XAxis.defaultProps = {
  xOrient: 'bottom',
  xAxisOffset: 0,
  xAxisClassName: 'd3fault-x-axis',
  opacity: 1,
  fill: 'none',
  tickArguments: [10],
  transform: 'rotate(0)',
  xLabelClassName: 'd3fault-x-label',
  offset: 18

};

exports.default = XAxis;
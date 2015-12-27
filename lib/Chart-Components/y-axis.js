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

var YAxis = (function (_React$Component) {
  _inherits(YAxis, _React$Component);

  function YAxis(props) {
    _classCallCheck(this, YAxis);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(YAxis).call(this, props));
    // Operations usually carried out in componentWillMount go here
  }

  _createClass(YAxis, [{
    key: 'render',
    value: function render() {

      var trans = 'translate(' + this.props.yAxisOffset + ', 0)';
      return _react2.default.createElement(
        'g',
        {
          className: this.props.xAxisClassName,
          transform: trans
        },
        _react2.default.createElement(_axisTicks2.default, {
          scale: this.props.scale,
          orient: this.props.yOrient,
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
          orient: this.props.yOrient,
          innerTickSize: this.props.innerTickSize,
          outerTickSize: this.props.outerTickSize,
          tickPadding: this.props.tickPadding
        }),
        _react2.default.createElement(_axisLabel2.default, {
          transform: this.props.transform,
          className: this.props.yLabelClassName,
          offset: this.props.offset,
          scale: this.props.scale,
          orient: this.props.yOrient,
          height: this.props.height,
          width: this.props.width,
          axisLabel: this.props.yAxisLabel
        })
      );
    }
  }]);

  return YAxis;
})(_react2.default.Component);

;

YAxis.propTypes = {
  yOrient: _react2.default.PropTypes.string.isRequired,
  yAxisOffset: _react2.default.PropTypes.number.isRequired,
  yAxisClassName: _react2.default.PropTypes.string.isRequired,
  opacity: _react2.default.PropTypes.number.isRequired,
  fill: _react2.default.PropTypes.string,
  tickArguments: _react2.default.PropTypes.array.isRequired,
  transform: _react2.default.PropTypes.string.isRequired,
  yLabelClassName: _react2.default.PropTypes.string.isRequired,
  offset: _react2.default.PropTypes.number.isRequired
};

YAxis.defaultProps = {
  yOrient: 'right',
  yAxisOffset: 0,
  yAxisClassName: 'd3fault-y-axis',
  opacity: 1,
  fill: 'none',
  tickArguments: [10],
  transform: 'rotate(-90)',
  yLabelClassName: 'd3fault-y-label',
  offset: 40
};

exports.default = YAxis;
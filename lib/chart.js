'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chart = (function (_React$Component) {
  _inherits(Chart, _React$Component);

  function Chart(props) {
    _classCallCheck(this, Chart);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Chart).call(this, props));
    // Operations usually carried out in componentWillMount go here
  }

  _createClass(Chart, [{
    key: 'renderChart',
    value: function renderChart() {
      var widthAdj = this.props.width + this.props.margins.left + this.props.margins.right;
      var titleXPosition = widthAdj * 0.5;

      var heightAdj = this.props.height + this.props.margins.top + this.props.margins.bottom;

      return _react2.default.createElement(
        'svg',
        {
          className: this.props.svgClassName,
          height: heightAdj,
          width: widthAdj,
          fontSize: this.props.fontSize,
          fontFamily: this.props.fontStyle
        },
        this.props.children,
        _react2.default.createElement(
          'text',
          {
            className: this.props.titleClassName,
            x: titleXPosition,
            y: '20',
            fontSize: this.props.titleFontSize
          },
          this.props.title
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: this.props.mainClassName
        },
        this.renderChart()
      );
    }
  }]);

  return Chart;
})(_react2.default.Component);

;

Chart.propTypes = {
  mainClassName: _react2.default.PropTypes.string.isRequired,
  titleClassName: _react2.default.PropTypes.string.isRequired,
  svgClassName: _react2.default.PropTypes.string.isRequired
};

Chart.defaultProps = {
  mainClassName: 'd3fault-chart',
  titleClassName: 'd3fault-title',
  svgClassName: 'd3fault-title'

};

exports.default = Chart;

// TODO: https://github.com/Swizec/react-testing-example
// http://swizec.com/reactd3js/
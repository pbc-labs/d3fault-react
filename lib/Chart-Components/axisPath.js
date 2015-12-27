"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AxisPath = (function (_React$Component) {
  _inherits(AxisPath, _React$Component);

  function AxisPath(props) {
    _classCallCheck(this, AxisPath);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AxisPath).call(this, props));
    // Operations usually carried out in componentWillMount go here
  }

  _createClass(AxisPath, [{
    key: "scaleExtent",
    value: function scaleExtent(domain) {
      // can we just use the scale domain?
      var start = domain[0];
      var stop = domain[domain.length - 1];
      return start < stop ? [start, stop] : [stop, start];
    }
  }, {
    key: "scaleRange",
    value: function scaleRange(scale) {
      return scale.rangeExtent ? scale.rangeExtent() : this.scaleExtent(scale.range());
    }
  }, {
    key: "render",
    value: function render() {
      var sign = this.props.orient === "top" || this.props.orient === "left" ? -1 : 1;
      var range = this.scaleRange(this.props.scale);

      if (this.props.orient === "bottom" || this.props.orient === "top") {
        var d = "M" + range[0] + "," + sign * this.props.outerTickSize + "V0H" + range[1] + "V" + sign * this.props.outerTickSize;
      } else {
        var d = "M" + sign * this.props.outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * this.props.outerTickSize;
      }

      return _react2.default.createElement("path", {
        className: "domain",
        d: d,
        style: { 'shapeRendering': 'crispEdges' },
        fill: this.props.fill,
        stroke: this.props.stroke
      });
    }
  }]);

  return AxisPath;
})(_react2.default.Component);

;

AxisPath.propTypes = {
  fill: _react2.default.PropTypes.string.isRequired,
  tickArguments: _react2.default.PropTypes.array.isRequired,
  tickValues: _react2.default.PropTypes.array,
  stroke: _react2.default.PropTypes.string.isRequired
};

AxisPath.defaultProps = {
  fill: 'none',
  tickArguments: [10],
  tickValues: null,
  stroke: 'rgb(0, 0, 0)'
};

exports.default = AxisPath;
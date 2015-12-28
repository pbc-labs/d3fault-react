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

var AxisLabel = (function (_React$Component) {
  _inherits(AxisLabel, _React$Component);

  function AxisLabel(props) {
    _classCallCheck(this, AxisLabel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AxisLabel).call(this, props));
    // Operations usually carried out in componentWillMount go here
  }

  _createClass(AxisLabel, [{
    key: 'render',
    value: function render() {
      var trans = this.props.transform;

      if (this.props.orient === 'top' || this.props.orient === 'bottom') {
        var x = this.props.width * 0.5 + this.props.offset;
        var y = this.props.offset * 2;
      } else {
        var x = -this.props.height * 0.5 + this.props.offset * 0.5;
        if (this.props.orient === 'left') {
          var y = -this.props.offset;
        } else {
          var y = -this.props.offset;
        }
      }
      return _react2.default.createElement(
        'text',
        {
          textAnchor: 'end',
          y: y,
          x: x,
          transform: trans
        },
        this.props.axisLabel
      );
    }
  }]);

  return AxisLabel;
})(_react2.default.Component);

;

AxisLabel.propTypes = {
  offset: _react2.default.PropTypes.number.isRequired,
  textAnchor: _react2.default.PropTypes.string.isRequired
};

AxisLabel.defaultProps = {
  offset: 20,
  textAnchor: 'end'
};

exports.default = AxisLabel;
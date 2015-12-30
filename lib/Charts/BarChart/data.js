'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rect = require('./rect.jsx');

var _rect2 = _interopRequireDefault(_rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
Defines Data compoenent for BarChart. This uses the data to build up
Rect components to represent chart data.
*/

var Data = (function (_React$Component) {
  _inherits(Data, _React$Component);

  function Data(props) {
    _classCallCheck(this, Data);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Data).call(this, props));
    // Operations usually carried out in componentWillMount go here
  }

  _createClass(Data, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'g',
        null,
        this.renderBars()
      );
    }
  }, {
    key: 'renderBars',
    value: function renderBars() {
      var _this2 = this;

      return this.props.data.map(function (d, i) {
        return _this2.renderRect(_this2.props.yScale(d.frequencyTest), _this2.props.xScale(d.letterTest), d, i + 1);
      });
    }
  }, {
    key: 'renderRect',
    value: function renderRect(yVals, xVals, d, i) {
      var _props = this.props;
      var xScale = _props.xScale;
      var yScale = _props.yScale;
      var data = _props.data;
      var margins = _props.margins;
      var height = _props.height;
      var width = _props.width;

      return _react2.default.createElement(_rect2.default, {
        key: i,
        height: height - yScale(d.frequencyTest),
        width: xScale.rangeBand(),
        x: xVals,
        y: yScale(d.frequencyTest),
        colors: this.props.colors
      });
    }
  }]);

  return Data;
})(_react2.default.Component);

;

exports.default = Data;
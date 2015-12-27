'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axisPath = require('./axisPath.jsx');

var _axisPath2 = _interopRequireDefault(_axisPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AxisTicks = (function (_React$Component) {
  _inherits(AxisTicks, _React$Component);

  function AxisTicks(props) {
    _classCallCheck(this, AxisTicks);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AxisTicks).call(this, props));
    // Operations usually carried out in componentWillMount go here
  }

  _createClass(AxisTicks, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;

      var sign = this.props.orient === "top" || this.props.orient === "left" ? -1 : 1;

      var tickSpacing = Math.max(this.props.innerTickSize, 0) + this.props.tickPadding;

      var ticks = this.props.scale.domain();
      if (ticks.length === 2) {
        ticks = this.props.scale.ticks(this.props.tickArguments);
      }

      var tickFormat = function tickFormat(d) {
        return d;
      };

      var adjustedScale = this.props.scale.rangeBand ? function (d) {
        return _this2.props.scale(d) + _this2.props.scale.rangeBand() / 2;
      } : this.props.scale;

      if (this.props.orient === 'top' || this.props.orient === 'bottom') {
        var tr = function tr(tick) {
          return 'translate(' + adjustedScale(tick) + ',0)';
        };
        var textAnchor = "middle";
        var y2 = this.props.innerTickSize * sign;
        var y1 = tickSpacing * sign;
        var dy = sign < 0 ? "0em" : ".71em";
        var x2,
            x1 = 0;
      } else if (this.props.orient === 'left') {
        var tr = function tr(tick) {
          return 'translate(0, ' + adjustedScale(tick) + ')';
        };
        var textAnchor = "end";
        var x2 = this.props.innerTickSize * -sign;
        var x1 = tickSpacing * -sign;
        var dy = ".32em";
      } else if (this.props.orient === 'right') {
        var tr = function tr(tick) {
          return 'translate(0, ' + adjustedScale(tick) + ')';
        };
        var textAnchor = "end";
        var x2 = this.props.innerTickSize * -sign;
        var x1 = tickSpacing * -sign;
        var dy = ".32em";
      } else {
        throw new Error('Enter a orientation for the scale in props');
      }

      return _react2.default.createElement(
        'g',
        null,
        ticks.map(function (tick, i) {
          return _react2.default.createElement(
            'g',
            { key: i, className: 'tick', transform: tr(tick), style: { opacity: props.opacity } },
            _react2.default.createElement('line', { style: { shapeRendering: 'crispEdges', stroke: props.tickStroke, fill: props.fill }, x2: x2, y2: y2 }),
            _react2.default.createElement(
              'text',
              {
                dy: dy,
                x: x1,
                y: y1,
                textAnchor: textAnchor
              },
              tickFormat(tick)
            )
          );
        })
      );
    }
  }]);

  return AxisTicks;
})(_react2.default.Component);

;

AxisTicks.propTypes = {
  tickStroke: _react2.default.PropTypes.string.isRequired,
  tickArguments: _react2.default.PropTypes.array.isRequired,
  tickValues: _react2.default.PropTypes.array
};

AxisTicks.defaultProps = {
  tickStroke: 'rgb(0, 0, 0)',
  tickArguments: [10],
  tickValues: null
};

exports.default = AxisTicks;

// Implementation of AxisTicks and AxisLine
// derived from d3's axis.js
// Copyright (c) 2010-2015, Michael Bostock
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
// * Redistributions of source code must retain the above copyright notice, this
//   list of conditions and the following disclaimer.
//
// * Redistributions in binary form must reproduce the above copyright notice,
//   this list of conditions and the following disclaimer in the documentation
//   and/or other materials provided with the distribution.
//
// * The name Michael Bostock may not be used to endorse or promote products
//   derived from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL MICHAEL BOSTOCK BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
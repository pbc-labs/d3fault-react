'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _reactShallowTestutils = require('react-shallow-testutils');

var _reactShallowTestutils2 = _interopRequireDefault(_reactShallowTestutils);

var _skinDeep = require('skin-deep');

var _skinDeep2 = _interopRequireDefault(_skinDeep);

var _yAxis = require('../Chart-Components/yAxis.jsx');

var _yAxis2 = _interopRequireDefault(_yAxis);

var _barChart = require('../Charts/BarChart/barChart.jsx');

var _barChart2 = _interopRequireDefault(_barChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = _react2.default.createElement;

describe('yAxis component', function () {
  var _this = this;

  beforeEach(function () {
    _this.renderer = _reactAddonsTestUtils2.default.createRenderer();
    _this.renderer.render(_react2.default.createElement(_yAxis2.default, null), context);
    _this.result = _this.renderer.getRenderOutput();
    _this.tree = _skinDeep2.default.shallowRender($(_yAxis2.default));
    _this.vdom = _this.tree.getRenderOutput();
    _this.mounted = _this.tree.getMountedInstance();
  });

  it('should render a <g> element', function () {
    console.log(_this.mounted.props);
    console.log(_this.vdom);
    (0, _chai.expect)(_this.vdom.type).to.equal('g');
  });

  it("mounts the yAxis with correct className", function () {
    (0, _chai.expect)(_this.mounted.props.yAxisClassName).to.equal('d3fault-y-axis');
  });

  it("mounts the yAxis with correct y-axis orientation", function () {
    (0, _chai.expect)(_this.mounted.props.yOrient).to.equal('right');
  });

  it("mounts the yAxis with correct opacity", function () {
    (0, _chai.expect)(_this.mounted.props.opacity).to.equal(1);
  });

  it("mounts the yAxis with correct fill color", function () {
    (0, _chai.expect)(_this.mounted.props.fill).to.equal('none');
  });

  it("mounts the yAxis with correct y-axis-label className", function () {
    (0, _chai.expect)(_this.mounted.props.yLabelClassName).to.equal('d3fault-y-label');
  });

  it("mounts the yAxis with correct transform degree", function () {
    (0, _chai.expect)(_this.mounted.props.transform).to.equal('rotate(-90)');
  });
});
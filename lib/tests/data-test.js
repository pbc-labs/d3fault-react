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

var _data = require('../Charts/BarChart/data.jsx');

var _data2 = _interopRequireDefault(_data);

var _chartData = require('../Data/chartData.js');

var _chartData2 = _interopRequireDefault(_chartData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = _react2.default.createElement;

describe('Data component', function () {
  var _this = this;

  beforeEach(function () {
    _this.renderer = _reactAddonsTestUtils2.default.createRenderer();
    _this.renderer.render(_react2.default.createElement(_data2.default, null), context);
    _this.result = _this.renderer.getRenderOutput();
    _this.tree = _skinDeep2.default.shallowRender($(_data2.default, { data: _chartData2.default }));
    _this.vdom = _this.tree.getRenderOutput();
    _this.mounted = _this.tree.getMountedInstance();
  });

  console.log(this.mounted);
  it('should render a <g> element', function () {
    console.log(_this.mounted);
    (0, _chai.expect)(_this.vdom.type).to.equal('g');
  });

  it("mounts the xAxis with correct className", function () {
    (0, _chai.expect)(_this.mounted.props.xAxisClassName).to.equal('d3fault-x-axis');
  });

  it("mounts the xAxis with correct x-axis orientation", function () {
    (0, _chai.expect)(_this.mounted.props.xOrient).to.equal('bottom');
  });

  it("mounts the xAxis with correct opacity", function () {
    (0, _chai.expect)(_this.mounted.props.opacity).to.equal(1);
  });

  it("mounts the xAxis with correct fill color", function () {
    (0, _chai.expect)(_this.mounted.props.fill).to.equal('none');
  });

  it("mounts the xAxis with correct x-axis-label className", function () {
    (0, _chai.expect)(_this.mounted.props.xLabelClassName).to.equal('d3fault-x-label');
  });

  it("mounts the xAxis with correct transform degree", function () {
    (0, _chai.expect)(_this.mounted.props.transform).to.equal('rotate(0)');
  });
});
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

var _axisLabel = require('../Chart-Components/axisLabel.jsx');

var _axisLabel2 = _interopRequireDefault(_axisLabel);

var _axisPath = require('../Chart-Components/axisPath.jsx');

var _axisPath2 = _interopRequireDefault(_axisPath);

var _axisTicks = require('../Chart-Components/axisTicks.jsx');

var _axisTicks2 = _interopRequireDefault(_axisTicks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = _react2.default.createElement;

describe('Axis Label component', function () {
  var _this = this;

  beforeEach(function () {
    // Axis Label
    _this.treeLabel = _skinDeep2.default.shallowRender($(_axisLabel2.default));
    _this.vdomLabel = _this.treeLabel.getRenderOutput();
    _this.mountedLabel = _this.treeLabel.getMountedInstance();
  });

  it('AxisLabel component should render a <text> element', function () {
    (0, _chai.expect)(_this.vdomLabel.type).to.equal('text');
  });

  it("AxisLabel component mounts the axisLabel with correct offset value", function () {
    (0, _chai.expect)(_this.mountedLabel.props.offset).to.equal(20);
  });

  it("AxisLabel component mounts the axisLabel with correct text anchor value", function () {
    (0, _chai.expect)(_this.mountedLabel.props.textAnchor).to.equal('end');
  });
});
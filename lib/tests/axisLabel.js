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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = _react2.default.createElement;

describe('Axis Label component', function () {
  var _this = this;

  beforeEach(function () {
    _this.renderer = _reactAddonsTestUtils2.default.createRenderer();
    _this.renderer.render(_react2.default.createElement(_axisLabel2.default, null), context);
    _this.result = _this.renderer.getRenderOutput();
    _this.tree = _skinDeep2.default.shallowRender($(_axisLabel2.default));
    _this.vdom = _this.tree.getRenderOutput();
    _this.mounted = _this.tree.getMountedInstance();
  });

  console.log(this.mounted);
  it('should render a <text> element', function () {
    (0, _chai.expect)(_this.vdom.type).to.equal('text');
  });

  it("mounts the axisLabel with correct offset value", function () {
    (0, _chai.expect)(_this.mounted.props.offset).to.equal(20);
  });

  it("mounts the axisLabel with correct text anchor value", function () {
    (0, _chai.expect)(_this.mounted.props.textAnchor).to.equal('end');
  });
});
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

var _chart = require('../chart.jsx');

var _chart2 = _interopRequireDefault(_chart);

var _barChart = require('../Charts/BarChart/barChart.jsx');

var _barChart2 = _interopRequireDefault(_barChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = _react2.default.createElement;

describe('BarChart component', function () {
  var _this = this;

  beforeEach(function () {
    _this.renderer = _reactAddonsTestUtils2.default.createRenderer();
    _this.renderer.render(_react2.default.createElement(_barChart2.default, null), context);
    _this.result = _this.renderer.getRenderOutput();
  });

  it('should do some damn thing', function () {
    var testTree = 'im funny';

    (0, _chai.expect)(testTree).to.equal('im funny');
  });

  it("renders a ReactElement", function () {
    var tree = _skinDeep2.default.shallowRender($(_barChart2.default));
    var vdom = tree.getRenderOutput();
    (0, _chai.expect)(vdom).to.have.property('type', 'div');
  });

  it("BarChart renders into a div", function () {
    (0, _chai.expect)(_this.result.type).to.equal('div');
  });

  it("renders with correct parent class name of 'd3fault-chart'", function () {
    var chart = _skinDeep2.default.shallowRender(_react2.default.createElement(_chart2.default, { width: 600, height: 400, title: 'test', margins: { top: 30, right: 30, bottom: 50, left: 55 }, fontSize: 14, fontStyle: 'Arial', titleFontSize: 14 }));

    (0, _chai.expect)(chart.getRenderOutput().props.className).to.equal('d3fault-chart');
  });

  it("renders proper width prop (not using ShollowTestUtils)", function () {

    (0, _chai.expect)(_this.result.props.children.props.width).to.equal(600);
  });

  it("renders proper width prop", function () {
    var barChart = _reactShallowTestutils2.default.getMountedInstance(_this.renderer);

    (0, _chai.expect)(barChart.props.width).to.equal(600);
  });
});

// http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/
// https://github.com/simonsmith/react-component-unit-test/blob/master/test/components/post-list.spec.js
// https://jamesfriend.com.au/better-assertions-shallow-rendered-react-components
//https://www.youtube.com/watch?v=bnWIBeImVKg
// http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/
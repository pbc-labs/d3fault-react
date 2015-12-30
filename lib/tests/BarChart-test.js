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

var _barChartLeft = require('../Charts/BarChartLeft/barChartLeft.jsx');

var _barChartLeft2 = _interopRequireDefault(_barChartLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = _react2.default.createElement;

describe('BarChart component', function () {
  var _this = this;

  beforeEach(function () {
    _this.renderer = _reactAddonsTestUtils2.default.createRenderer();
    _this.renderer.render(_react2.default.createElement(_barChart2.default, null), context);
    _this.result = _this.renderer.getRenderOutput();
    _this.tree = _skinDeep2.default.shallowRender($(_barChart2.default));
    _this.vdom = _this.tree.getRenderOutput();
    _this.mounted = _this.tree.getMountedInstance();
  });

  it('should do some damn thing', function () {
    var testTree = 'im funny';
    (0, _chai.expect)(testTree).to.equal('im funny');
  });

  it("renders the BarChart into a div", function () {
    (0, _chai.expect)(_this.vdom).to.have.property('type', 'div');
  });

  it("renders the BarChart with width prop set to default width", function () {
    (0, _chai.expect)(_this.vdom.props.children.props).to.have.property('width');
    (0, _chai.expect)(_this.vdom.props.children.props.width).to.equal(600);
  });

  it("mounts the BarChart with width prop set to default width", function () {
    (0, _chai.expect)(_this.mounted.props).to.have.property('width');
    (0, _chai.expect)(_this.mounted.props.width).to.equal(600);
  });

  it("renders the BarChart with height prop set to default height", function () {
    (0, _chai.expect)(_this.vdom.props.children.props).to.have.property('height');
    (0, _chai.expect)(_this.vdom.props.children.props.height).to.equal(300);
  });

  it("mounts the BarChart with height prop set to default height", function () {
    (0, _chai.expect)(_this.mounted.props).to.have.property('height');
    (0, _chai.expect)(_this.mounted.props.height).to.equal(300);
  });

  it("renders the BarChart with title prop set to default title", function () {
    (0, _chai.expect)(_this.vdom.props.children.props).to.have.property('title');
    (0, _chai.expect)(_this.vdom.props.children.props.title).to.equal('Default Title');
  });

  it("mounts the BarChart with title prop set to default title", function () {
    (0, _chai.expect)(_this.mounted.props).to.have.property('title');
    (0, _chai.expect)(_this.mounted.props.title).to.equal('Default Title');
  });

  it("renders the BarChart with margins prop set to default margins", function () {
    (0, _chai.expect)(_this.vdom.props.children.props).to.have.property('margins');
    (0, _chai.expect)(_this.vdom.props.children.props.margins.top).to.equal(30);(0, _chai.expect)(_this.vdom.props.children.props.margins.bottom).to.equal(50);
    (0, _chai.expect)(_this.vdom.props.children.props.margins.left).to.equal(55);
    (0, _chai.expect)(_this.vdom.props.children.props.margins.right).to.equal(30);
  });

  it("mounts the BarChart with margins prop set to default margins", function () {
    (0, _chai.expect)(_this.mounted.props).to.have.property('margins');
    (0, _chai.expect)(_this.mounted.props.margins.top).to.equal(30);
    (0, _chai.expect)(_this.mounted.props.margins.bottom).to.equal(50);
    (0, _chai.expect)(_this.mounted.props.margins.left).to.equal(55);
    (0, _chai.expect)(_this.mounted.props.margins.right).to.equal(30);
  });

  it("renders the BarChart with fontSize prop set to default fontSize", function () {
    (0, _chai.expect)(_this.vdom.props.children.props).to.have.property('fontSize');
    (0, _chai.expect)(_this.vdom.props.children.props.fontSize).to.equal(14);
  });

  it("mounts the BarChart with fontSize prop set to default fontSize", function () {
    (0, _chai.expect)(_this.mounted.props).to.have.property('fontSize');
    (0, _chai.expect)(_this.mounted.props.fontSize).to.equal(14);
  });

  it("renders the BarChart with fontStyle prop set to default fontStyle", function () {
    (0, _chai.expect)(_this.vdom.props.children.props).to.have.property('fontStyle');
    (0, _chai.expect)(_this.vdom.props.children.props.fontStyle).to.equal('Sans Serif');
  });

  it("mounts the BarChart with fontStyle prop set to default fontStyle", function () {
    (0, _chai.expect)(_this.mounted.props).to.have.property('fontStyle');
    (0, _chai.expect)(_this.mounted.props.fontStyle).to.equal('Sans Serif');
  });

  it("renders the BarChart with titleFontSize prop set to default titleFontSize", function () {
    (0, _chai.expect)(_this.vdom.props.children.props).to.have.property('titleFontSize');
    (0, _chai.expect)(_this.vdom.props.children.props.titleFontSize).to.equal(18);
  });

  it("mounts the BarChart with titleFontSize prop set to default titleFontSize", function () {
    (0, _chai.expect)(_this.mounted.props).to.have.property('titleFontSize');
    (0, _chai.expect)(_this.mounted.props.titleFontSize).to.equal(18);
  });

  it("renders the BarChart with mainClassName prop set to 'd3fault-chart'", function () {
    (0, _chai.expect)(_this.vdom.props.children.props).to.have.property('mainClassName');
    (0, _chai.expect)(_this.vdom.props.children.props.mainClassName).to.equal('d3fault-chart');
  });

  it("renders the BarChart with titleClassName prop set to 'd3fault-title'", function () {
    (0, _chai.expect)(_this.vdom.props.children.props).to.have.property('titleClassName');
    (0, _chai.expect)(_this.vdom.props.children.props.titleClassName).to.equal('d3fault-title');
  });

  it("renders the BarChart with svgClassName prop set to 'd3fault-svg'", function () {
    (0, _chai.expect)(_this.vdom.props.children.props).to.have.property('svgClassName');
    (0, _chai.expect)(_this.vdom.props.children.props.svgClassName).to.equal('d3fault-svg');
  });
});

describe('BarChart component - setting customized props', function () {
  var _this2 = this;

  beforeEach(function () {});

  it('should overwrite default prop type for title - vdom', function () {
    _this2.tree = _skinDeep2.default.shallowRender($(_barChart2.default, { title: 'New title' }));
    _this2.vdom = _this2.tree.getRenderOutput();
    _this2.mounted = _this2.tree.getMountedInstance();
    (0, _chai.expect)(_this2.vdom.props.children.props.title).to.equal('New title');
  });

  it('should overwrite default prop type for title - mounted', function () {
    _this2.tree = _skinDeep2.default.shallowRender($(_barChart2.default, { title: 'New title' }));
    _this2.vdom = _this2.tree.getRenderOutput();
    _this2.mounted = _this2.tree.getMountedInstance();
    (0, _chai.expect)(_this2.mounted.props.title).to.equal('New title');
  });

  it('should overwrite default prop type for width - vdom', function () {
    _this2.tree = _skinDeep2.default.shallowRender($(_barChart2.default, { width: 400 }));
    _this2.vdom = _this2.tree.getRenderOutput();
    _this2.mounted = _this2.tree.getMountedInstance();
    (0, _chai.expect)(_this2.vdom.props.children.props.width).to.equal(400);
  });

  it('should overwrite default prop type for width - mounted', function () {
    _this2.tree = _skinDeep2.default.shallowRender($(_barChart2.default, { width: 400 }));
    _this2.vdom = _this2.tree.getRenderOutput();
    _this2.mounted = _this2.tree.getMountedInstance();
    (0, _chai.expect)(_this2.mounted.props.width).to.equal(400);
  });

  it('should overwrite default prop type for height - vdom', function () {
    _this2.tree = _skinDeep2.default.shallowRender($(_barChart2.default, { height: 500 }));
    _this2.vdom = _this2.tree.getRenderOutput();
    _this2.mounted = _this2.tree.getMountedInstance();
    (0, _chai.expect)(_this2.vdom.props.children.props.height).to.equal(500);
  });

  it('should overwrite default prop type for height - mounted', function () {
    _this2.tree = _skinDeep2.default.shallowRender($(_barChart2.default, { height: 500 }));
    _this2.vdom = _this2.tree.getRenderOutput();
    _this2.mounted = _this2.tree.getMountedInstance();
    (0, _chai.expect)(_this2.mounted.props.height).to.equal(500);
  });

  it('should overwrite default prop type for margins - vdom', function () {
    _this2.tree = _skinDeep2.default.shallowRender($(_barChart2.default, { margins: { top: 60, right: 60, bottom: 60, left: 60 } }));
    _this2.vdom = _this2.tree.getRenderOutput();
    _this2.mounted = _this2.tree.getMountedInstance();
    (0, _chai.expect)(_this2.vdom.props.children.props.margins.top).to.equal(60);
    (0, _chai.expect)(_this2.vdom.props.children.props.margins.right).to.equal(60);
    (0, _chai.expect)(_this2.vdom.props.children.props.margins.bottom).to.equal(60);
    (0, _chai.expect)(_this2.vdom.props.children.props.margins.left).to.equal(60);
  });

  it('should overwrite default prop type for margins - mounted', function () {
    _this2.tree = _skinDeep2.default.shallowRender($(_barChart2.default, { margins: { top: 60, right: 60, bottom: 60, left: 60 } }));
    _this2.vdom = _this2.tree.getRenderOutput();
    _this2.mounted = _this2.tree.getMountedInstance();
    (0, _chai.expect)(_this2.mounted.props.margins.top).to.equal(60);
    (0, _chai.expect)(_this2.mounted.props.margins.right).to.equal(60);
    (0, _chai.expect)(_this2.mounted.props.margins.bottom).to.equal(60);
    (0, _chai.expect)(_this2.mounted.props.margins.left).to.equal(60);
  });

  it('should overwrite default prop type for fontStyle - vdom', function () {
    _this2.tree = _skinDeep2.default.shallowRender($(_barChart2.default, { fontStyle: 'Comic Sans' }));
    _this2.vdom = _this2.tree.getRenderOutput();
    _this2.mounted = _this2.tree.getMountedInstance();
    (0, _chai.expect)(_this2.vdom.props.children.props.fontStyle).to.equal('Comic Sans');
  });

  it('should overwrite default prop type for fontStyle - mounted', function () {
    _this2.tree = _skinDeep2.default.shallowRender($(_barChart2.default, { fontStyle: 'Comic Sans' }));
    _this2.vdom = _this2.tree.getRenderOutput();
    _this2.mounted = _this2.tree.getMountedInstance();
    (0, _chai.expect)(_this2.mounted.props.fontStyle).to.equal('Comic Sans');
  });

  it('should overwrite default prop type for fontSize - vdom', function () {
    _this2.tree = _skinDeep2.default.shallowRender($(_barChart2.default, { fontSize: 22 }));
    _this2.vdom = _this2.tree.getRenderOutput();
    _this2.mounted = _this2.tree.getMountedInstance();
    (0, _chai.expect)(_this2.vdom.props.children.props.fontSize).to.equal(22);
  });

  it('should overwrite default prop type for fontSize - mounted', function () {
    _this2.tree = _skinDeep2.default.shallowRender($(_barChart2.default, { fontSize: 22 }));
    _this2.vdom = _this2.tree.getRenderOutput();
    _this2.mounted = _this2.tree.getMountedInstance();
    (0, _chai.expect)(_this2.mounted.props.fontSize).to.equal(22);
  });

  it('should overwrite default prop type for titleFontSize - vdom', function () {
    _this2.tree = _skinDeep2.default.shallowRender($(_barChart2.default, { titleFontSize: 24 }));
    _this2.vdom = _this2.tree.getRenderOutput();
    _this2.mounted = _this2.tree.getMountedInstance();
    (0, _chai.expect)(_this2.vdom.props.children.props.titleFontSize).to.equal(24);
  });

  it('should overwrite default prop type for fontSize - mounted', function () {
    _this2.tree = _skinDeep2.default.shallowRender($(_barChart2.default, { titleFontSize: 24 }));
    _this2.vdom = _this2.tree.getRenderOutput();
    _this2.mounted = _this2.tree.getMountedInstance();
    (0, _chai.expect)(_this2.mounted.props.titleFontSize).to.equal(24);
  });
});

describe('BarChartLeft component', function () {
  var _this3 = this;

  beforeEach(function () {
    _this3.renderer = _reactAddonsTestUtils2.default.createRenderer();
    _this3.renderer.render(_react2.default.createElement(_barChartLeft2.default, null), context);
    _this3.result = _this3.renderer.getRenderOutput();
    _this3.tree = _skinDeep2.default.shallowRender($(_barChartLeft2.default));
    _this3.vdom = _this3.tree.getRenderOutput();
    _this3.mounted = _this3.tree.getMountedInstance();
  });

  it("renders the BarChartLeft into a div", function () {
    (0, _chai.expect)(_this3.vdom).to.have.property('type', 'div');
  });

  it("renders the BarChartLeft with width prop set to default width", function () {
    (0, _chai.expect)(_this3.vdom.props.children.props).to.have.property('width');
    (0, _chai.expect)(_this3.vdom.props.children.props.width).to.equal(600);
  });

  it("mounts the BarChartLeft with width prop set to default width", function () {
    (0, _chai.expect)(_this3.mounted.props).to.have.property('width');
    (0, _chai.expect)(_this3.mounted.props.width).to.equal(600);
  });

  it("renders the BarChartLeft with height prop set to default height", function () {
    (0, _chai.expect)(_this3.vdom.props.children.props).to.have.property('height');
    (0, _chai.expect)(_this3.vdom.props.children.props.height).to.equal(400);
  });

  it("mounts the BarChartLeft with height prop set to default height", function () {
    (0, _chai.expect)(_this3.mounted.props).to.have.property('height');
    (0, _chai.expect)(_this3.mounted.props.height).to.equal(400);
  });

  it("renders the BarChartLeft with title prop set to default title", function () {
    (0, _chai.expect)(_this3.vdom.props.children.props).to.have.property('title');
    (0, _chai.expect)(_this3.vdom.props.children.props.title).to.equal('Default Title');
  });

  it("mounts the BarChartLeft with title prop set to default title", function () {
    (0, _chai.expect)(_this3.mounted.props).to.have.property('title');
    (0, _chai.expect)(_this3.mounted.props.title).to.equal('Default Title');
  });

  it("renders the BarChartLeft with margins prop set to default margins", function () {
    (0, _chai.expect)(_this3.vdom.props.children.props).to.have.property('margins');
    (0, _chai.expect)(_this3.vdom.props.children.props.margins.top).to.equal(30);(0, _chai.expect)(_this3.vdom.props.children.props.margins.bottom).to.equal(50);
    (0, _chai.expect)(_this3.vdom.props.children.props.margins.left).to.equal(55);
    (0, _chai.expect)(_this3.vdom.props.children.props.margins.right).to.equal(30);
  });

  it("mounts the BarChartLeft with margins prop set to default margins", function () {
    (0, _chai.expect)(_this3.mounted.props).to.have.property('margins');
    (0, _chai.expect)(_this3.mounted.props.margins.top).to.equal(30);
    (0, _chai.expect)(_this3.mounted.props.margins.bottom).to.equal(50);
    (0, _chai.expect)(_this3.mounted.props.margins.left).to.equal(55);
    (0, _chai.expect)(_this3.mounted.props.margins.right).to.equal(30);
  });

  it("renders the BarChartLeft with fontSize prop set to default fontSize", function () {
    (0, _chai.expect)(_this3.vdom.props.children.props).to.have.property('fontSize');
    (0, _chai.expect)(_this3.vdom.props.children.props.fontSize).to.equal(14);
  });

  it("mounts the BarChartLeft with fontSize prop set to default fontSize", function () {
    (0, _chai.expect)(_this3.mounted.props).to.have.property('fontSize');
    (0, _chai.expect)(_this3.mounted.props.fontSize).to.equal(14);
  });

  it("renders the BarChartLeft with fontStyle prop set to default fontStyle", function () {
    (0, _chai.expect)(_this3.vdom.props.children.props).to.have.property('fontStyle');
    (0, _chai.expect)(_this3.vdom.props.children.props.fontStyle).to.equal('Sans Serif');
  });

  it("mounts the BarChartLeft with fontStyle prop set to default fontStyle", function () {
    (0, _chai.expect)(_this3.mounted.props).to.have.property('fontStyle');
    (0, _chai.expect)(_this3.mounted.props.fontStyle).to.equal('Sans Serif');
  });

  it("renders the BarChartLeft with titleFontSize prop set to default titleFontSize", function () {
    (0, _chai.expect)(_this3.vdom.props.children.props).to.have.property('titleFontSize');
    (0, _chai.expect)(_this3.vdom.props.children.props.titleFontSize).to.equal(18);
  });

  it("mounts the BarChartLeft with titleFontSize prop set to default titleFontSize", function () {
    (0, _chai.expect)(_this3.mounted.props).to.have.property('titleFontSize');
    (0, _chai.expect)(_this3.mounted.props.titleFontSize).to.equal(18);
  });

  it("renders the BarChartLeft with mainClassName prop set to 'd3fault-chart'", function () {
    (0, _chai.expect)(_this3.vdom.props.children.props).to.have.property('mainClassName');
    (0, _chai.expect)(_this3.vdom.props.children.props.mainClassName).to.equal('d3fault-chart');
  });

  it("renders the BarChartLeft with titleClassName prop set to 'd3fault-title'", function () {
    (0, _chai.expect)(_this3.vdom.props.children.props).to.have.property('titleClassName');
    (0, _chai.expect)(_this3.vdom.props.children.props.titleClassName).to.equal('d3fault-title');
  });

  it("renders the BarChartLeft with svgClassName prop set to 'd3fault-svg'", function () {
    (0, _chai.expect)(_this3.vdom.props.children.props).to.have.property('svgClassName');
    (0, _chai.expect)(_this3.vdom.props.children.props.svgClassName).to.equal('d3fault-svg');
  });
});

// http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/
// https://github.com/simonsmith/react-component-unit-test/blob/master/test/components/post-list.spec.js
// https://jamesfriend.com.au/better-assertions-shallow-rendered-react-components
//https://www.youtube.com/watch?v=bnWIBeImVKg
// http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/

// TODO: Move?
// it("renders Chart element with class name of 'd3fault-chart'", () => {
//   const chart = sd.shallowRender(React.createElement(Chart, { width: 600, height: 400, title: 'test', margins: {top: 30, right: 30, bottom: 50, left: 55}, fontSize: 14, fontStyle: 'Arial', titleFontSize: 14}));
//
//   expect(chart.getRenderOutput().props.className).to.equal('d3fault-chart');
//   });
//
// it("BarChart renders into a div", () => {
//     expect(this.result.type).to.equal('div');
// });
//
// it("renders proper width prop (not using ShollowTestUtils)", () => {
//   expect(this.result.props.children.props.width).to.equal(600);
// });
//
// it("renders proper width prop", () => {
//   const barChart = ShallowTestUtils.getMountedInstance(this.renderer);
//
//   expect(barChart.props.width).to.equal(600);
// });
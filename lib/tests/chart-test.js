'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _skinDeep = require('skin-deep');

var _skinDeep2 = _interopRequireDefault(_skinDeep);

var _chart = require('../chart.jsx');

var _chart2 = _interopRequireDefault(_chart);

var _barChart = require('../Charts/BarChart/barChart.jsx');

var _barChart2 = _interopRequireDefault(_barChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Chart component', function () {
  // const vdom, instance;

  beforeEach(function () {
    var tree = 'im funny';
    //
    // instance = tree.getMountedInstance();
    // vdom = tree.getRenderOutput();
  });

  it('should do some damn thing', function () {
    var testTree = 'im funny';

    (0, _chai.expect)(testTree).to.equal('im funny');
  });

  // it("renders Chart svg", () => {
  //   console.log(TestUtils, 'asdf')
  //   const shallowRenderer = TestUtils.createRenderer();
  //   console.log(shallowRenderer)
  //   const result = shallowRenderer.render(<BarChart />);
  //
  //   console.log(result, 'asdf');
  //
  //   expect(result.type).to.be('div');
  // });

  it("renders BarChart into a div", function () {
    var test = _skinDeep2.default.shallowRender(_react2.default.createElement(_chart2.default, { width: 600, height: 400, title: 'test', margins: { top: 30, right: 30, bottom: 50, left: 55 }, fontSize: 14, fontStyle: 'Arial', titleFontSize: 14 }));

    (0, _chai.expect)(test.getRenderOutput().type).to.equal('div');
  });

  it("renders with correct parent class name of 'd3fault-chart'", function () {
    var test = _skinDeep2.default.shallowRender(_react2.default.createElement(_chart2.default, { width: 600, height: 400, title: 'test', margins: { top: 30, right: 30, bottom: 50, left: 55 }, fontSize: 14, fontStyle: 'Arial', titleFontSize: 14 }));

    (0, _chai.expect)(test.getRenderOutput().props.className).to.equal('d3fault-chart');
  });
});

// http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/
// https://github.com/simonsmith/react-component-unit-test/blob/master/test/components/post-list.spec.js
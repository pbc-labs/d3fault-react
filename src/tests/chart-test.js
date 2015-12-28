import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import sd from 'skin-deep';
import Chart from '../chart.jsx';
import BarChart from '../Charts/BarChart/barChart.jsx';

describe('Chart component', function() {
  // const vdom, instance;

  beforeEach(function() {
    var tree = 'im funny';
    //
    // instance = tree.getMountedInstance();
    // vdom = tree.getRenderOutput();
  });

  it('should do some damn thing', () => {
    var testTree = 'im funny'

    expect(testTree).to.equal('im funny');
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


  it("renders BarChart into a div", () => {
    const test = sd.shallowRender(React.createElement(Chart, { width: 600, height: 400, title: 'test', margins: {top: 30, right: 30, bottom: 50, left: 55}, fontSize: 14, fontStyle: 'Arial', titleFontSize: 14}));

    expect(test.getRenderOutput().type).to.equal('div');
    });

  it("renders with correct parent class name of 'd3fault-chart'", () => {
    const test = sd.shallowRender(React.createElement(Chart, { width: 600, height: 400, title: 'test', margins: {top: 30, right: 30, bottom: 50, left: 55}, fontSize: 14, fontStyle: 'Arial', titleFontSize: 14}));

    expect(test.getRenderOutput().props.className).to.equal('d3fault-chart');
    });
});

// http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/
// https://github.com/simonsmith/react-component-unit-test/blob/master/test/components/post-list.spec.js

import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import ShallowTestUtils from 'react-shallow-testutils';
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

  it("BarChart renders into a div", () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<BarChart />, context);
    const result = renderer.getRenderOutput()

    expect(result.type).to.equal('div');
  });

  it("renders with correct parent class name of 'd3fault-chart'", () => {
    const chart = sd.shallowRender(React.createElement(Chart, { width: 600, height: 400, title: 'test', margins: {top: 30, right: 30, bottom: 50, left: 55}, fontSize: 14, fontStyle: 'Arial', titleFontSize: 14}));

    expect(chart.getRenderOutput().props.className).to.equal('d3fault-chart');
    });

  it("renders proper width prop (not using ShollowTestUtls)", () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<BarChart />, context);

    expect(renderer.getRenderOutput().props.children.props.width).to.equal(600);

  });

  it("renders proper width prop", () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<BarChart />, context);
    const barChart = ShallowTestUtils.getMountedInstance(renderer);

    expect(barChart.props.width).to.equal(600);
  });

});

// http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/
// https://github.com/simonsmith/react-component-unit-test/blob/master/test/components/post-list.spec.js
// https://jamesfriend.com.au/better-assertions-shallow-rendered-react-components

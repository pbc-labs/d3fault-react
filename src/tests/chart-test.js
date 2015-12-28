import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import ShallowTestUtils from 'react-shallow-testutils';
import sd from 'skin-deep';
import Chart from '../chart.jsx';
import BarChart from '../Charts/BarChart/barChart.jsx';

describe('BarChart component', function() {
  // const vdom, instance;

  beforeEach(() => {
    this.renderer = ReactTestUtils.createRenderer();
    this.renderer.render(<BarChart />, context);
    this.result = this.renderer.getRenderOutput()
  });

  it('should do some damn thing', () => {
    var testTree = 'im funny'

    expect(testTree).to.equal('im funny');
  });

  it("BarChart renders into a div", () => {
    expect(this.result.type).to.equal('div');
  });

  it("renders with correct parent class name of 'd3fault-chart'", () => {
    const chart = sd.shallowRender(React.createElement(Chart, { width: 600, height: 400, title: 'test', margins: {top: 30, right: 30, bottom: 50, left: 55}, fontSize: 14, fontStyle: 'Arial', titleFontSize: 14}));

    expect(chart.getRenderOutput().props.className).to.equal('d3fault-chart');
    });

  it("renders proper width prop (not using ShollowTestUtils)", () => {

    expect(this.result.props.children.props.width).to.equal(600);

  });

  it("renders proper width prop", () => {
    const barChart = ShallowTestUtils.getMountedInstance(this.renderer);

    expect(barChart.props.width).to.equal(600);
  });

});

// http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/
// https://github.com/simonsmith/react-component-unit-test/blob/master/test/components/post-list.spec.js
// https://jamesfriend.com.au/better-assertions-shallow-rendered-react-components
//https://www.youtube.com/watch?v=bnWIBeImVKg

import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import ShallowTestUtils from 'react-shallow-testutils';
import sd from 'skin-deep';
import Chart from '../chart.jsx';
import BarChart from '../Charts/BarChart/barChart.jsx';
import BarChartLeft from '../Charts/BarChartLeft/barChartLeft.jsx';

const $ = React.createElement;

describe('BarChart component', function () {

  beforeEach(() => {
    this.renderer = ReactTestUtils.createRenderer();
    this.renderer.render(<BarChart />, context);
    this.result = this.renderer.getRenderOutput();
    this.tree = sd.shallowRender($(BarChart));
    this.vdom = this.tree.getRenderOutput();
    this.mounted = this.tree.getMountedInstance();
  });

  it('should do some damn thing', () => {
    const testTree = 'im funny';
    expect(testTree).to.equal('im funny');
  });

  it("renders the BarChart into a div", () => {
    expect(this.vdom).to.have.property('type', 'div');
  });

  it("renders the BarChart with width prop set to default width", () => {
    expect(this.vdom.props.children.props).to.have.property('width');
    expect(this.vdom.props.children.props.width).to.equal(600);
  });

  it("mounts the BarChart with width prop set to default width", () => {
    expect(this.mounted.props).to.have.property('width');
    expect(this.mounted.props.width).to.equal(600);
  });

  it("renders the BarChart with height prop set to default height", () => {
    expect(this.vdom.props.children.props).to.have.property('height');
    expect(this.vdom.props.children.props.height).to.equal(300);
  });

  it("mounts the BarChart with height prop set to default height", () => {
    expect(this.mounted.props).to.have.property('height');
    expect(this.mounted.props.height).to.equal(300);
  });

  it("renders the BarChart with title prop set to default title", () => {
    expect(this.vdom.props.children.props).to.have.property('title');
    expect(this.vdom.props.children.props.title).to.equal('Default Title');
  });

  it("mounts the BarChart with title prop set to default title", () => {
    expect(this.mounted.props).to.have.property('title');
    expect(this.mounted.props.title).to.equal('Default Title');
  });

  it("renders the BarChart with margins prop set to default margins", () => {
    expect(this.vdom.props.children.props).to.have.property('margins');
    expect(this.vdom.props.children.props.margins.top).to.equal(30);    expect(this.vdom.props.children.props.margins.bottom).to.equal(50);
    expect(this.vdom.props.children.props.margins.left).to.equal(55);
    expect(this.vdom.props.children.props.margins.right).to.equal(30);
  });

  it("mounts the BarChart with margins prop set to default margins", () => {
    expect(this.mounted.props).to.have.property('margins');
    expect(this.mounted.props.margins.top).to.equal(30);
    expect(this.mounted.props.margins.bottom).to.equal(50);
    expect(this.mounted.props.margins.left).to.equal(55);
    expect(this.mounted.props.margins.right).to.equal(30);
  });

  it("renders the BarChart with fontSize prop set to default fontSize", () => {
    expect(this.vdom.props.children.props).to.have.property('fontSize');
    expect(this.vdom.props.children.props.fontSize).to.equal(14);
  });

  it("mounts the BarChart with fontSize prop set to default fontSize", () => {
    expect(this.mounted.props).to.have.property('fontSize');
    expect(this.mounted.props.fontSize).to.equal(14);
  });

  it("renders the BarChart with fontStyle prop set to default fontStyle", () => {
    expect(this.vdom.props.children.props).to.have.property('fontStyle');
    expect(this.vdom.props.children.props.fontStyle).to.equal('Sans Serif');
  });

  it("mounts the BarChart with fontStyle prop set to default fontStyle", () => {
    expect(this.mounted.props).to.have.property('fontStyle');
    expect(this.mounted.props.fontStyle).to.equal('Sans Serif');
  });

  it("renders the BarChart with titleFontSize prop set to default titleFontSize", () => {
    expect(this.vdom.props.children.props).to.have.property('titleFontSize');
    expect(this.vdom.props.children.props.titleFontSize).to.equal(18);
  });

  it("mounts the BarChart with titleFontSize prop set to default titleFontSize", () => {
    expect(this.mounted.props).to.have.property('titleFontSize');
    expect(this.mounted.props.titleFontSize).to.equal(18);
  });

  it("renders the BarChart with mainClassName prop set to 'd3fault-chart'", () => {
    expect(this.vdom.props.children.props).to.have.property('mainClassName');
    expect(this.vdom.props.children.props.mainClassName).to.equal('d3fault-chart');
  });

  it("renders the BarChart with titleClassName prop set to 'd3fault-title'", () => {
    expect(this.vdom.props.children.props).to.have.property('titleClassName');
    expect(this.vdom.props.children.props.titleClassName).to.equal('d3fault-title');
  });

  it("renders the BarChart with svgClassName prop set to 'd3fault-svg'", () => {
    expect(this.vdom.props.children.props).to.have.property('svgClassName');
    expect(this.vdom.props.children.props.svgClassName).to.equal('d3fault-svg');
  });
});

describe('BarChart component - setting customized props', function () {

  beforeEach(() => {
  });

  it('should overwrite default prop type for title - vdom', () => {
    this.tree = sd.shallowRender($(BarChart, { title: 'New title'}));
    this.vdom = this.tree.getRenderOutput();
    this.mounted = this.tree.getMountedInstance();
    expect(this.vdom.props.children.props.title).to.equal('New title');
  });

  it('should overwrite default prop type for title - mounted', () => {
    this.tree = sd.shallowRender($(BarChart, { title: 'New title'}));
    this.vdom = this.tree.getRenderOutput();
    this.mounted = this.tree.getMountedInstance();
    expect(this.mounted.props.title).to.equal('New title');
  });

  it('should overwrite default prop type for width - vdom', () => {
    this.tree = sd.shallowRender($(BarChart, { width: 400 }));
    this.vdom = this.tree.getRenderOutput();
    this.mounted = this.tree.getMountedInstance();
    expect(this.vdom.props.children.props.width).to.equal(400);
  });

  it('should overwrite default prop type for width - mounted', () => {
    this.tree = sd.shallowRender($(BarChart, { width: 400 }));
    this.vdom = this.tree.getRenderOutput();
    this.mounted = this.tree.getMountedInstance();
    expect(this.mounted.props.width).to.equal(400);
  });

  it('should overwrite default prop type for height - vdom', () => {
    this.tree = sd.shallowRender($(BarChart, { height: 500 }));
    this.vdom = this.tree.getRenderOutput();
    this.mounted = this.tree.getMountedInstance();
    expect(this.vdom.props.children.props.height).to.equal(500);
  });

  it('should overwrite default prop type for height - mounted', () => {
    this.tree = sd.shallowRender($(BarChart, { height: 500 }));
    this.vdom = this.tree.getRenderOutput();
    this.mounted = this.tree.getMountedInstance();
    expect(this.mounted.props.height).to.equal(500);
  });

  it('should overwrite default prop type for margins - vdom', () => {
    this.tree = sd.shallowRender($(BarChart, { margins: { top: 60, right: 60, bottom: 60, left: 60 } }));
    this.vdom = this.tree.getRenderOutput();
    this.mounted = this.tree.getMountedInstance();
    expect(this.vdom.props.children.props.margins.top).to.equal(60);
    expect(this.vdom.props.children.props.margins.right).to.equal(60);
    expect(this.vdom.props.children.props.margins.bottom).to.equal(60);
    expect(this.vdom.props.children.props.margins.left).to.equal(60);
  });

  it('should overwrite default prop type for margins - mounted', () => {
    this.tree = sd.shallowRender($(BarChart, { margins: { top: 60, right: 60, bottom: 60, left: 60 } }));
    this.vdom = this.tree.getRenderOutput();
    this.mounted = this.tree.getMountedInstance();
    expect(this.mounted.props.margins.top).to.equal(60);
    expect(this.mounted.props.margins.right).to.equal(60);
    expect(this.mounted.props.margins.bottom).to.equal(60);
    expect(this.mounted.props.margins.left).to.equal(60);
  });

  it('should overwrite default prop type for fontStyle - vdom', () => {
    this.tree = sd.shallowRender($(BarChart, { fontStyle: 'Comic Sans' }));
    this.vdom = this.tree.getRenderOutput();
    this.mounted = this.tree.getMountedInstance();
    expect(this.vdom.props.children.props.fontStyle).to.equal('Comic Sans');
  });

  it('should overwrite default prop type for fontStyle - mounted', () => {
    this.tree = sd.shallowRender($(BarChart, { fontStyle: 'Comic Sans' }));
    this.vdom = this.tree.getRenderOutput();
    this.mounted = this.tree.getMountedInstance();
    expect(this.mounted.props.fontStyle).to.equal('Comic Sans');
  });

  it('should overwrite default prop type for fontSize - vdom', () => {
    this.tree = sd.shallowRender($(BarChart, { fontSize: 22 }));
    this.vdom = this.tree.getRenderOutput();
    this.mounted = this.tree.getMountedInstance();
    expect(this.vdom.props.children.props.fontSize).to.equal(22);
  });

  it('should overwrite default prop type for fontSize - mounted', () => {
    this.tree = sd.shallowRender($(BarChart, { fontSize: 22 }));
    this.vdom = this.tree.getRenderOutput();
    this.mounted = this.tree.getMountedInstance();
    expect(this.mounted.props.fontSize).to.equal(22);
  });

  it('should overwrite default prop type for titleFontSize - vdom', () => {
    this.tree = sd.shallowRender($(BarChart, { titleFontSize: 24 }));
    this.vdom = this.tree.getRenderOutput();
    this.mounted = this.tree.getMountedInstance();
    expect(this.vdom.props.children.props.titleFontSize).to.equal(24);
  });

  it('should overwrite default prop type for fontSize - mounted', () => {
    this.tree = sd.shallowRender($(BarChart, { titleFontSize: 24 }));
    this.vdom = this.tree.getRenderOutput();
    this.mounted = this.tree.getMountedInstance();
    expect(this.mounted.props.titleFontSize).to.equal(24);
  });

});



describe('BarChartLeft component', function () {

  beforeEach(() => {
    this.renderer = ReactTestUtils.createRenderer();
    this.renderer.render(<BarChartLeft />, context);
    this.result = this.renderer.getRenderOutput();
    this.tree = sd.shallowRender($(BarChartLeft));
    this.vdom = this.tree.getRenderOutput();
    this.mounted = this.tree.getMountedInstance();
  });

  it("renders the BarChartLeft into a div", () => {
    expect(this.vdom).to.have.property('type', 'div');
  });

  it("renders the BarChartLeft with width prop set to default width", () => {
    expect(this.vdom.props.children.props).to.have.property('width');
    expect(this.vdom.props.children.props.width).to.equal(600);
  });

  it("mounts the BarChartLeft with width prop set to default width", () => {
    expect(this.mounted.props).to.have.property('width');
    expect(this.mounted.props.width).to.equal(600);
  });

  it("renders the BarChartLeft with height prop set to default height", () => {
    expect(this.vdom.props.children.props).to.have.property('height');
    expect(this.vdom.props.children.props.height).to.equal(400);
  });

  it("mounts the BarChartLeft with height prop set to default height", () => {
    expect(this.mounted.props).to.have.property('height');
    expect(this.mounted.props.height).to.equal(400);
  });

  it("renders the BarChartLeft with title prop set to default title", () => {
    expect(this.vdom.props.children.props).to.have.property('title');
    expect(this.vdom.props.children.props.title).to.equal('Default Title');
  });

  it("mounts the BarChartLeft with title prop set to default title", () => {
    expect(this.mounted.props).to.have.property('title');
    expect(this.mounted.props.title).to.equal('Default Title');
  });

  it("renders the BarChartLeft with margins prop set to default margins", () => {
    expect(this.vdom.props.children.props).to.have.property('margins');
    expect(this.vdom.props.children.props.margins.top).to.equal(30);    expect(this.vdom.props.children.props.margins.bottom).to.equal(50);
    expect(this.vdom.props.children.props.margins.left).to.equal(55);
    expect(this.vdom.props.children.props.margins.right).to.equal(30);
  });

  it("mounts the BarChartLeft with margins prop set to default margins", () => {
    expect(this.mounted.props).to.have.property('margins');
    expect(this.mounted.props.margins.top).to.equal(30);
    expect(this.mounted.props.margins.bottom).to.equal(50);
    expect(this.mounted.props.margins.left).to.equal(55);
    expect(this.mounted.props.margins.right).to.equal(30);
  });

  it("renders the BarChartLeft with fontSize prop set to default fontSize", () => {
    expect(this.vdom.props.children.props).to.have.property('fontSize');
    expect(this.vdom.props.children.props.fontSize).to.equal(14);
  });

  it("mounts the BarChartLeft with fontSize prop set to default fontSize", () => {
    expect(this.mounted.props).to.have.property('fontSize');
    expect(this.mounted.props.fontSize).to.equal(14);
  });

  it("renders the BarChartLeft with fontStyle prop set to default fontStyle", () => {
    expect(this.vdom.props.children.props).to.have.property('fontStyle');
    expect(this.vdom.props.children.props.fontStyle).to.equal('Sans Serif');
  });

  it("mounts the BarChartLeft with fontStyle prop set to default fontStyle", () => {
    expect(this.mounted.props).to.have.property('fontStyle');
    expect(this.mounted.props.fontStyle).to.equal('Sans Serif');
  });

  it("renders the BarChartLeft with titleFontSize prop set to default titleFontSize", () => {
    expect(this.vdom.props.children.props).to.have.property('titleFontSize');
    expect(this.vdom.props.children.props.titleFontSize).to.equal(18);
  });

  it("mounts the BarChartLeft with titleFontSize prop set to default titleFontSize", () => {
    expect(this.mounted.props).to.have.property('titleFontSize');
    expect(this.mounted.props.titleFontSize).to.equal(18);
  });

  it("renders the BarChartLeft with mainClassName prop set to 'd3fault-chart'", () => {
    expect(this.vdom.props.children.props).to.have.property('mainClassName');
    expect(this.vdom.props.children.props.mainClassName).to.equal('d3fault-chart');
  });

  it("renders the BarChartLeft with titleClassName prop set to 'd3fault-title'", () => {
    expect(this.vdom.props.children.props).to.have.property('titleClassName');
    expect(this.vdom.props.children.props.titleClassName).to.equal('d3fault-title');
  });

  it("renders the BarChartLeft with svgClassName prop set to 'd3fault-svg'", () => {
    expect(this.vdom.props.children.props).to.have.property('svgClassName');
    expect(this.vdom.props.children.props.svgClassName).to.equal('d3fault-svg');
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

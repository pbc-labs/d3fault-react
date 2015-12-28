import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import ShallowTestUtils from 'react-shallow-testutils';
import sd from 'skin-deep';
import YAxis from '../Chart-Components/yAxis.jsx';
import BarChart from '../Charts/BarChart/barChart.jsx';

const $ = React.createElement;

describe('yAxis component', function () {

  beforeEach(() => {
    this.renderer = ReactTestUtils.createRenderer();
    this.renderer.render(<YAxis />, context);
    this.result = this.renderer.getRenderOutput();
    this.tree = sd.shallowRender($(YAxis));
    this.vdom = this.tree.getRenderOutput();
    this.mounted = this.tree.getMountedInstance();
  });

  it('should render a <g> element', () => {
    console.log(this.mounted.props)
    console.log(this.vdom)
    expect(this.vdom.type).to.equal('g');
  });

  it("mounts the yAxis with correct className", () => {
    expect(this.mounted.props.yAxisClassName).to.equal('d3fault-y-axis');
  });

  it("mounts the yAxis with correct y-axis orientation", () => {
    expect(this.mounted.props.yOrient).to.equal('right');
  });

  it("mounts the yAxis with correct opacity", () => {
    expect(this.mounted.props.opacity).to.equal(1);
  });

  it("mounts the yAxis with correct fill color", () => {
    expect(this.mounted.props.fill).to.equal('none');
  });

  it("mounts the yAxis with correct y-axis-label className", () => {
    expect(this.mounted.props.yLabelClassName).to.equal('d3fault-y-label');
  });

  it("mounts the yAxis with correct transform degree", () => {
    expect(this.mounted.props.transform).to.equal('rotate(-90)');
  });
});

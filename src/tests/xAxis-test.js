import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import ShallowTestUtils from 'react-shallow-testutils';
import sd from 'skin-deep';
import XAxis from '../Chart-Components/xAxis.jsx';

const $ = React.createElement;

describe('xAxis component', function () {

  beforeEach(() => {
    this.renderer = ReactTestUtils.createRenderer();
    this.renderer.render(<XAxis />, context);
    this.result = this.renderer.getRenderOutput();
    this.tree = sd.shallowRender($(XAxis));
    this.vdom = this.tree.getRenderOutput();
    this.mounted = this.tree.getMountedInstance();
  });

  it('should render a <g> element', () => {
    expect(this.vdom.type).to.equal('g');
  });

  it("mounts the xAxis with correct className", () => {
    expect(this.mounted.props.xAxisClassName).to.equal('d3fault-x-axis');
  });

  it("mounts the xAxis with correct x-axis orientation", () => {
    expect(this.mounted.props.xOrient).to.equal('bottom');
  });

  it("mounts the xAxis with correct opacity", () => {
    expect(this.mounted.props.opacity).to.equal(1);
  });

  it("mounts the xAxis with correct fill color", () => {
    expect(this.mounted.props.fill).to.equal('none');
  });

  it("mounts the xAxis with correct x-axis-label className", () => {
    expect(this.mounted.props.xLabelClassName).to.equal('d3fault-x-label');
  });

  it("mounts the xAxis with correct transform degree", () => {
    expect(this.mounted.props.transform).to.equal('rotate(0)');
  });
});

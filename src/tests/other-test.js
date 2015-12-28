import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import ShallowTestUtils from 'react-shallow-testutils';
import sd from 'skin-deep';
import AxisLabel from '../Chart-Components/axisLabel.jsx';
import Rect from '../Charts/BarChart/rect.jsx';

const $ = React.createElement;

describe('Axis Label component', function () {

  beforeEach(() => {
    // Axis Label
    this.treeLabel = sd.shallowRender($(AxisLabel));
    this.vdomLabel = this.treeLabel.getRenderOutput();
    this.mountedLabel = this.treeLabel.getMountedInstance();

    // Rect
    this.treeRect = sd.shallowRender($(Rect, { colors: ['red'] }));
    this.vdomRect = this.treeRect.getRenderOutput();
    this.mountedRect = this.treeRect.getMountedInstance();
  });

  it('AxisLabel component should render a <text> element', () => {
    expect(this.vdomLabel.type).to.equal('text');
  });

  it("AxisLabel component mounts the axisLabel with correct offset value", () => {
    expect(this.mountedLabel.props.offset).to.equal(20);
  });

  it("AxisLabel component mounts the axisLabel with correct text anchor value", () => {
    expect(this.mountedLabel.props.textAnchor).to.equal('end');
  });

  it('Rect component should render a <rect> element', () => {
    expect(this.vdomRect.type).to.equal('rect');
  });

  it("Rect component mounts the correct rectClassName", () => {
    expect(this.mountedRect.props.rectClassName).to.equal('d3fault-bar-rect');
  });

});

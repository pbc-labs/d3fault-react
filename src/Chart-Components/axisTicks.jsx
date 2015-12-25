import React from 'react';
import AxisPath from './axisPath.jsx';

class AxisTicks extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }

  render() {
    const props = this.props;

    const sign = this.props.orient === "top" || this.props.orient === "left" ? -1 : 1;

    const tickSpacing = Math.max(this.props.innerTickSize, 0) + this.props.tickPadding;

    var ticks = this.props.scale.domain();
    if (ticks.length === 2) {
      ticks = this.props.scale.ticks(this.props.tickArguments);
    }

    const tickFormat = (d) => d;

    const adjustedScale = this.props.scale.rangeBand ? (d) => { return this.props.scale(d) + this.props.scale.rangeBand() / 2; } : this.props.scale;

    if (this.props.orient === 'top' || this.props.orient === 'bottom') {
      var tr = (tick) =>  `translate(${adjustedScale(tick)},0)`;
      var textAnchor = "middle";
      var y2 = this.props.innerTickSize * sign;
      var y1 = tickSpacing * sign;
      var dy =  sign < 0 ? "0em" : ".71em";
      var x2, x1 = 0;
    } else if (this.props.orient === 'left') {
      var tr = (tick) =>  `translate(0, ${adjustedScale(tick)})`;
      var textAnchor = "end";
      var x2 = this.props.innerTickSize * -sign;
      var x1 = tickSpacing * -sign;
      var dy =  ".32em";
    } else if (this.props.orient === 'right') {
      var tr = (tick) =>  `translate(0, ${adjustedScale(tick)})`;
      var textAnchor = "end";
      var x2 = this.props.innerTickSize * -sign;
      var x1 = tickSpacing * -sign;
      var dy =  ".32em";
    } else {
      throw new Error('Enter a orientation for the scale in props');
    }

    return (
      <g>
        {ticks.map( (tick, i) => {
          return (
            <g key={i} className="tick" transform={tr(tick)} style={{opacity:props.opacity}}>
              <line style={{shapeRendering:'crispEdges', stroke:props.tickStroke, fill:props.fill}} x2={x2} y2={y2}></line>
              <text
                dy={dy}
                x={x1}
                y={y1}
                textAnchor={textAnchor}
              >
                {tickFormat(tick)}
              </text>
            </g>
          );
        })
      }
      </g>
    );
  }
};


AxisTicks.propTypes = {
  tickStroke: React.PropTypes.string.isRequired,
  tickArguments: React.PropTypes.array.isRequired,
  tickValues: React.PropTypes.array
}

AxisTicks.defaultProps = {
  tickStroke: 'rgb(0, 0, 0)',
  tickArguments: [10],
  tickValues: null
}

export default AxisTicks;


// Implementation of AxisTicks and AxisLine
// derived from d3's axis.js
// Copyright (c) 2010-2015, Michael Bostock
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
// * Redistributions of source code must retain the above copyright notice, this
//   list of conditions and the following disclaimer.
//
// * Redistributions in binary form must reproduce the above copyright notice,
//   this list of conditions and the following disclaimer in the documentation
//   and/or other materials provided with the distribution.
//
// * The name Michael Bostock may not be used to endorse or promote products
//   derived from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL MICHAEL BOSTOCK BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

import { expect } from 'chai';
import React from 'react';

describe('Chart component', function() {
  var vdom, instance;

  beforeEach(function() {
    var tree = 'im funny';
    //
    // instance = tree.getMountedInstance();
    // vdom = tree.getRenderOutput();
  });

  it('should do some damn thing', function() {
    var testTree = 'im funny'

    expect(testTree).to.equal('im funny');
  });
});

'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Chart component', function () {
  var vdom, instance;

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
});
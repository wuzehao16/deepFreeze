var assert = require('assert');
var should = require('should');
var deepFreeze = require('..');
describe('obj internal', function(){
  it('should equal something', function(){
    var obj = {
      internal: {
        a: 'something',
      }
    };

    deepFreeze(obj);
    obj.internal.a = 'anotherValue';
    obj.internal.a; // 'something'

    deepFreeze(obj);

    obj.internal.a.should.equal('something');
  })
})

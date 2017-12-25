/**
 * Created by reamd on 2017/12/21.
 */
var add = require('../add.js');
var expect = require('chai').expect;

/*
describe测试套件(函数)，一组相关的测试，第一个参数是测试套件的名称（"加法函数的测试"），第二个参数是一个实际执行的函数。

it块称为"测试用例"(函数),表示一个单独的测试，是测试的最小单位。第一个参数是测试用例的名称（"1 加 1 应该等于 2"），第二个参数是一个实际执行的函数。

chai "断言"，就是判断源码的实际执行结果与预期结果是否一致，如果不一致就抛出一个错误。代码引入的断言库是chai，并且指定使用它的expect断言风格。

如果expect断言不成立，就会抛出一个错误。事实上，只要不抛出错误，测试用例就算通过。
*/

describe('加法函数的测试', function() {
    it('1 加 1 应该等于 2', function() {
        expect(add(1, 1)).to.be.equal(2);
    });

    it('1 加 2 应该等于 3', function() {
        expect(add(1, 2)).to.be.equal(3);
    });
});
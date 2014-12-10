/**
 * Created by michaelwatts
 * Date: 05/12/14
 * Time: 09:16
 */

var Closure = function() {};

Closure.prototype.mystery = function(input) {
    var secret = 5;

    function mystery2(multiplier) {
        console.log('multiplier: ' + multiplier);
        multiplier *= input;
        return secret * multiplier;
    }

    return mystery2;
};

Closure.prototype.strange = function (input) {
    function strange2(operator) {
        operator += input;
        return operator;
    }
    return strange2;
};

var closure = new Closure();

//var hidden = closure.mystery(4);
//var result = hidden(2);

var test1 = closure.strange(3);
var test2 = test1(10);

console.log(test1(3));
console.log(test2);

module.exports = Closure;

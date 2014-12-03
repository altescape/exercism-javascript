//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

    var shouting = function () { return input === input.toUpperCase() && /[a-zA-Z]/.test(input) === true; }(input),
        question = function () { return input.charAt(input.length-1) === "?"; }(input),
        silence = function () { return input.trim() === "" }(input);

    if ( shouting ) return "Whoa, chill out!";
    if ( question ) return "Sure.";
    if ( silence ) return "Fine. Be that way!";
    else return "Whatever.";

};

module.exports = Bob;

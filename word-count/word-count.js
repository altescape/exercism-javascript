/**
 * Created by michaelwatts
 * Date: 03/12/14
 * Time: 16:39
 */

var words = function(input){

    var sanitized_input = input.replace(/\n/g, " "); // replace newlines with space

    var words = sanitized_input.split(" ");
    var counts = {};

    words.map(function(word){
        var wordCount = word;
        console.log(typeof counts[wordCount]);
        if (typeof counts[wordCount] === "function") {}
        return counts[wordCount] = counts[wordCount] ? counts[wordCount] + 1 : 1;
    });

    return counts;

};

module.exports = words;
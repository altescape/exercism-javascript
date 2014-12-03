/**
 * Created by michaelwatts
 * Date: 03/12/14
 * Time: 16:39
 */

var words = function(input){

    var words = input.split(" ");
    var counts = {};

    words.map(function(word){
        var num = word;
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    });

    return counts;

};

module.exports = words;
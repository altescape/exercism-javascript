/**
 * Created by michaelwatts
 * Date: 03/12/14
 * Time: 16:39
 */

var words = function(input){

    var sanitizedInput = input.replace(/\n/g, " "); // replace newlines with space, others could be added...

    var words = sanitizedInput.split(" "),
        // Creating an object with no properties is essential to make last test pass
        // see: http://stackoverflow.com/a/21079232/1945990 for explanation
        results = Object.create(null);

    words.map(function(word){
        return results[word] = results[word] ? results[word] + 1 : 1;
    });

    return results;
};

module.exports = words;
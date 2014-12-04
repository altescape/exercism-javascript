
var anagram = function (word) {
    return {
        matches: function (matches) {

            var matches_array = [];
            if (typeof matches === "string") {
                console.log(arguments);
                for (var i = 0; i < arguments.length; i++) {
                    matches_array.push(arguments[i]);
                }
            } else {
                matches_array = matches;
            }

            return this.find_matches(matches_array);
        },

        find_matches: function (arr) {

            var result = [];

            arr.forEach(function(value, index){

                var lowercase_word = word.toLowerCase(),
                    lowercase_matches_word = value.toLowerCase();

                var sorted_word = lowercase_word.split("").sort(),
                    sorted_match = lowercase_matches_word.split("").sort();

                if ( lowercase_word !== lowercase_matches_word &&
                    lowercase_word.length === lowercase_matches_word.length ) {

                    if (sorted_word.equals(sorted_match))
                        result.push(value);
                }
            });

            return result;
        }
    }
};

// Compare two arrays
// http://stackoverflow.com/a/14853974/1945990
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
};

module.exports = anagram;
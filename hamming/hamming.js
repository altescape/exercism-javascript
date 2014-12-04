var Hamming = {

    a: "",
    b: "",

    strand_length: function () {
        return [Hamming.a.length, Hamming.b.length].sort(function (z,x) {return z-x})[0];
    },

    count_mutations: function () {
        var mutation_count = 0,
            a_array = Hamming.a.split(""),
            b_array = Hamming.b.split("");
        for(var i = 0; i <= Hamming.strand_length(); i++) {
            if (a_array[i] !== b_array[i]) mutation_count += 1
        }
        return mutation_count;
    },

    compute: function(a,b) {
        Hamming.a = a;
        Hamming.b = b;

        return Hamming.count_mutations();
    }

};

module.exports = Hamming;


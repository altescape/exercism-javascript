var Hamming = {

    a: "",
    b: "",

    strand_length: function () {
        return Math.min(Hamming.a.length, Hamming.b.length);
    },

    count_mutations: function () {
        var mutation_count = 0;
        for (var i = 0; i <= Hamming.strand_length(); i++)
            mutation_count = Hamming.a[i] !== Hamming.b[i] ? mutation_count += 1 : mutation_count;
        return mutation_count;
    },

    compute: function(a,b) {
        Hamming.a = a;
        Hamming.b = b;
        return Hamming.count_mutations();
    }
};

module.exports = Hamming;


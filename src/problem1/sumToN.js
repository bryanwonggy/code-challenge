var sum_to_n_a = function(n) {
    // iterative
    var res = 0;
    for (let i = 1; i <= n; i++) {
        res += i;
    }
    return res;
};

var sum_to_n_b = function(n) {
    // recursive
    if (n == 1) {
        return 1; // base case
    }
    return sum_to_n_b(n - 1) + n;
};

var sum_to_n_c = function(n) {
    // using arithmetic progression formula
    return n*(n+1)/2
};

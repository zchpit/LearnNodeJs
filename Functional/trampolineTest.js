var thunk = function (f, lst) {
    return { tag: "thunk", func: f, args: lst };
};

var thunkValue = function (x) {
    return { tag: "value", val: x };
};

var thunkFactorial = function(n, cont) {
    if (n < 2) {
        return thunk(cont, [n]);
    } else {
        var new_cont = function(v) {
            var result = v * n;
            return thunk(cont, [result]);
        };
        return thunk(thunkFactorial, [n - 1, new_cont]);
    }
};

var trampoline = function (thk) {
    while (true) {
        if (thk.tag === "value") {
            return thk.val;
        }
        if (thk.tag === "thunk") {
            thk = thk.func.apply(null, thk.args);
        }
    }
};

trampoline(thunkFactorial(100000, thunkValue));

function print(s) {
    cp.addLineToTranscript(s, null);
}

print.toString = function () {
    return "function print() { [native code] }";
};

function println(s) {
    cp.addLineToTranscript(s, null);
}

println.toString = function () {
    return "function println() { [native code] }";
};

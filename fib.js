// find the first n fibonacci numbers
function fibonacci(x, y, n) {
    if (n === 0) {
        return
    }
    console.log(x);
    fibonacci(y, x + y, n - 1);
}

fibonacci(1, 1, 12)
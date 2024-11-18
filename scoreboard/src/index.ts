function fibonacci(n: number): number {
    if (n===0) return 0;
    if (n === 1) return 1;

    return fibonacci(n-1) + fibonacci(n-2)
}

function fibonacciOneD(n: number): number {
    let fib = [0,1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib[fib.length-1];
}

console.log(fibonacci(3));
console.log(fibonacciOneD(19));

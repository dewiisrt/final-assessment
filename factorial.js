function factorial(n) {
    let arrFib = [];
    function innerFibo(n) {
        if (n === 0) {
            return 0;
        } else if (n === 1) {
            return 1
        } else if (n === 2) {
            return 1
        }
        return innerFibo(n - 1) + innerFibo(n - 2);
    }
    for (let i = 0; i <= n; i++) {
        arrFib.push(innerFibo(i))
    }
    return arrFib;
}

// Jangan hapus kode di bawah ini!
export default factorial;

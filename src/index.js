module.exports = function reverse (n) {
    let str = String(n);
        let a = str.split('').reverse().join('');
        let num = parseInt(a);
        return Math.abs(num);
}


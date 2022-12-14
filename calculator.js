function Calculator() {
    this.total = 0;
};


Calculator.prototype.add =  function(n) {
    return this.total += n;
}

Calculator.prototype.subtract = function(n){
    return this.total -= n;
}

Calculator.prototype.multiply = function(n){
    return this.total *= n;
}

Calculator.prototype.divide = function(n){
    if(n === 0) {
        throw new Error('Cannot divide by zero');
    }
    return this.total /= n;
}

Object.defineProperty(Calculator.prototype, 'version', {
    get: function() {
        return fetch('http://localhost:4000/calc')
        .then((data) => {
            return data.json();
        })
        .then((jsonData) => {
            return jsonData;
        });
    },
    enumerable: true,
    configurable: true
})
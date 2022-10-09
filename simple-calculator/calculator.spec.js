describe('calculator.js',() => {
    it('should add number to total', ()=> {
        const calculator = new Calculator();
        const expectedNumber = 5;
        calculator.add(5);
        expect(calculator.total).toEqual(expectedNumber);
    });
    it('should subtract number from total', ()=> {
        const calculator = new Calculator();
        const expectedNumber = 25;
        calculator.total = 30;
        calculator.subtract(5);
        expect(calculator.total).toEqual(expectedNumber);
    });
    it('should multiply total by number', ()=> {
        const calculator = new Calculator();
        const expectedNumber = 500;
        calculator.total = 100;
        calculator.multiply(5);
        expect(calculator.total).toEqual(expectedNumber);
    });
    it('should divide total by number', ()=> {
        const calculator = new Calculator();
        const expectedNumber = 10;
        calculator.total = 100;
        calculator.divide(10);
        expect(calculator.total).toEqual(expectedNumber);
    });
});
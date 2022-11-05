describe('calculator.js',() => {
    let calculator;
    let calculator2;
    beforeEach(() => {
        console.log('beforeEach()');
        calculator = new Calculator();
        calculator2 = new Calculator();
    });
    afterEach(() => {
        console.log('afterEach()');
    });

    describe('Calculator', () => {
        it('should initialize the total value', () => {
            expect(calculator.total).toBe(0);
        });
        it('has constructor', () => {
            expect(calculator).toEqual(calculator2);
        });
        it('can be instanstiated', () => {
            expect(calculator).toBeTruthy();
            expect(calculator2).toBeTruthy();
        });
        it('asymmetric matchers!', () => {
            calculator.total = 50;
            expect(calculator.total).toEqual(jasmine.anything());
            expect(() => {}).toEqual(jasmine.anything());
            // anything cannot be null!
            expect(null).not.toEqual(jasmine.anything());
            //anything cannot be undefined!
            expect(undefined).not.toEqual(jasmine.anything());
        });
        it('use a custom matcher', () => {
            jasmine.addMatchers(customMatchers);
            expect(calculator).toBeCalculator();
        });
        it('use a third-party toBeNumber matcher', () => {
            // don't need to register with jasmine.addMatchers(...)
            const calculator = new Calculator();        
            expect(calculator.total).toBeNumber();
        });
        describe('add()', () => {
            it('should add number to total', ()=> {
                const expectedNumber = 5;
                calculator.add(5);
                expect(calculator.total).toEqual(expectedNumber);
            });
            it('returns total', () => {
                calculator.total = 50;
                expect(calculator.add(20)).toBe(70);
                expect(calculator.total).toMatch(/-?\d+/);
                expect(typeof calculator.total).toMatch('number');
            });
        });
        describe('subtract()', () => {
            it('should subtract number from total', ()=> {
                const expectedNumber = 25;
                calculator.total = 30;
                calculator.subtract(5);
                expect(calculator.total).toEqual(expectedNumber);
            });
        });
        describe('multiply()', () => {
            it('should multiply total by number', ()=> {
                const expectedNumber = 500;
                calculator.total = 100;
                calculator.multiply(5);
                expect(calculator.total).toEqual(expectedNumber);
            });
        });
        describe('divide()', () => {
            it('should divide total by number', ()=> {
                const expectedNumber = 10;
                calculator.total = 100;
                calculator.divide(10);
                expect(calculator.total).toEqual(expectedNumber);
            });
            it('handles divide by zero', () => {

                calculator.total = 100;
                // we should always test real function inside a wrapper function!
                const wrapperFunction = () => {
                    calculator.divide(0);
                }
                
                expect(wrapperFunction).toThrow();
                expect(wrapperFunction).toThrowError(Error);
                expect(wrapperFunction).toThrowError(Error, 'Cannot divide by zero');
            });
        });
        describe('get version', () => {
            it('fetches version from external source', (done) => {
                spyOn(window, 'fetch').and.returnValue(Promise.resolve(
                    new Response('{"version": "0.1"}')
                ));
                calculator.version.then((data) => {
                    expect(data.version).toEqual('0.1');

                    done();
                })
            })
        })
    });
    
});
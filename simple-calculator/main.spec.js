describe('main.js', () => {
    describe('calculate()', () => {
        it('validates expression when the first number is invalid', () => {
            spyOn(window, 'updateResult').and.stub();
            calculate('a+3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized.');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });
        it('validates expression when the second number is invalid', () => {
            spyOn(window, 'updateResult'); // we removed the `.and.stub()` becuase it will be there as default
            calculate('3+a');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });
        it('validates expression when operation is invalid', () => {
            spyOn(window, 'updateResult');
            calculate('a_3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });
        it('calls add', () => {
            const spy = spyOn(Calculator.prototype, 'add');
            calculate('3+4');

            expect(Calculator.prototype.add).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledTimes(2);
            expect(spy).toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledWith(4);
        });
        it('calls subtract', () => {
            const spy = spyOn(Calculator.prototype, 'subtract');
            calculate('3-7');

            expect(Calculator.prototype.subtract).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(7);
        });
        it('calls multiply', () => {
            const spy = spyOn(Calculator.prototype, 'multiply');
            calculate('3*5');

            expect(Calculator.prototype.multiply).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(5);
        });
        it('calls divide', () => {
            const spy = spyOn(Calculator.prototype, 'divide');
            calculate('4/2');

            expect(Calculator.prototype.divide).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(2);
        });
        xit('calls updateResult');
    });
    describe('updateResult()', () => {
        beforeAll(() => {
            const elm = document.createElement('div');
            elm.setAttribute('id','result');

            document.body.appendChild(elm);
            this.element = elm;
        })
        afterAll( () => {
            document.body.removeChild(this.element);
        });
        it('adds result to the DOM element', () => {


            updateResult(5);
            expect(this.element.innerText).toBe('5');
        });
    });
})
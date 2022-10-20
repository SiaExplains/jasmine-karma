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
        xit('calls add');
        xit('calls subtract');
        xit('calls multiply');
        xit('calls divide');
        xit('calls divide');
        xit('validates operation');
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
describe('main.js', () => {
    describe('calculate()', () => {
        xit('validates expression');
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
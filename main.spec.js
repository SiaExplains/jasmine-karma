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
        it('calls updateResult (exmaple of using callThrough)', () => {
            // // callThrough allow to execute real implementation of function
            spyOn(window,'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.callThrough();
            calculate('5*5');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(25);
            
        });
        it('calls updateResult (exmaple of using callFake)', () => {
            // callFake allow to execute a specific custom implementation asepct of function
            spyOn(window,'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.callFake((n) => {
                return 'it works'
            })
            calculate('5*5');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('it works');
            
        });

        it('calls updateResult (exmaple of using returnValue)', () => {

            spyOn(window,'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.returnValue('it works');
            calculate('5*5');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('it works');
            
        });
        it('calls updateResult (exmaple of using returnValues)', () => {
            // return multiple values per each call
            spyOn(window,'updateResult');
            spyOn(Calculator.prototype, 'add').and.returnValues(null,'it works');
            calculate('5+5');
            expect(window.updateResult).toHaveBeenCalled();
            // the null value will be ignore and updateResult function won't react to have been called
            expect(window.updateResult).toHaveBeenCalledWith('it works');
            
        });

        it('does not handle errors', () => {
            spyOn(Calculator.prototype, 'multiply').and.throwError('some error')
            
            expect(() => {
                calculate('5*5');
            }).toThrowError('some error')
        });
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

    describe('showVersion', () => {
      it('calls calculator version', (done) => {
        spyOn(document, 'getElementById').and.returnValue({
            innerText: null
        });

        const spy = spyOnProperty(Calculator.prototype, 'version','get').and.returnValue(Promise.resolve(
            new Response('{"version": "0.1"}')
        ));

        showVersion();

        expect(spy).toHaveBeenCalled();
        done();
      })
    })
    
})
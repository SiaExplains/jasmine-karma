const customMatchers = {
    // the matcher name
    toBeCalculator: () => {
        // shoul dreturn an object contains compare function
        return {
            compare: (actualValue) => {
                const result = {
                    pass: actualValue  instanceof Calculator,
                    message: ''
                }

                if(result.pass) {
                    result.message = `Expected ${actualValue} not to be instance of calculator!`
                }
                else {
                    result.message = `Expected ${actualValue} to be instance of calculator!`
                }
                return result;
            }
        }
    }
}
// retrieveing all the buttons from the document.
const buttons = document.querySelectorAll('button')
const screen = document.querySelector('.screen-text')
const smallScreen = document.querySelector('.screen-text-output')
const errorMsg = document.querySelector('.error-output')

// Array storing the mathematical expression (operand, operator, operand.)
let mathExpressionArr = []

// Operands and operator.
let firstOperand = ''
let operator = ''
let secondOperand = ''

// output of expression
let outputValue = ''

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if(screen.textContent.length == 20) {
            errorMsg.textContent = 'number view limit reached.'
        } else {
            errorMsg.textContent = ''
        }
            
        // Getting values for the operands.
        if(button.className == 'num' && screen.textContent.length < 20)
        {

            errorMsg.textContent = ''

            screen.textContent += button.innerHTML

            // if first operand is empty then store in first operand, else in second operand.
            if(mathExpressionArr.length === 0)
            {
                firstOperand = screen.textContent
            } 
            else {
                secondOperand = screen.textContent
            }
        }

        if(button.className == 'equal')
        {
            if(mathExpressionArr.length === 2)
            {
                mathExpressionArr.push(secondOperand)
            }
            else 
            {
                return
            }

            if(mathExpressionArr[1] == '+')
            {
                outputValue = parseFloat(mathExpressionArr[0]) + parseFloat(mathExpressionArr[2])
            }
            else if(mathExpressionArr[1] == '-')
            {
                outputValue = parseFloat(mathExpressionArr[0]) - parseFloat(mathExpressionArr[2])
            }
            else if(mathExpressionArr[1] == '×')
            {
                outputValue = parseFloat(mathExpressionArr[0]) * parseFloat(mathExpressionArr[2])
            }
            else if(mathExpressionArr[1] == '/')
            {
                outputValue = parseFloat(mathExpressionArr[0]) / parseFloat(mathExpressionArr[2])
            }
        
            // Converting to string to store in array
            outputValue = outputValue.toString()
        
            // Emptying array.
            mathExpressionArr = []
            secondOperand = ''
        
            // now ONLY output value is present in array.
            mathExpressionArr.push(outputValue)
        
            // outputing final value on screen to output value.
            screen.textContent = mathExpressionArr[0]
            firstOperand = screen.textContent
        
            screen.textContent = ''
        
            if(mathExpressionArr.length == 1) {
                smallScreen.textContent = mathExpressionArr[0]
            }
        }

        if(button.className == 'operator') 
        {

            // if first operand is empty then do nothing.
            if(firstOperand == '') {
                return
            }

            // if array is empty, then store first operand along with operator else push
            // second operand.
            if(mathExpressionArr.length === 0)
            {
                mathExpressionArr.push(firstOperand)
                mathExpressionArr.push(button.innerHTML)

                screen.textContent = ''
            }
            else
            {
                // if second operand is empty, then return on clicking operator.
                if(!secondOperand) {
                    return
                }

                // calculating with previous output in case new operand pressed 
                // instead of equal sign.
                if(mathExpressionArr.length === 1) {
                    mathExpressionArr.push(button.innerHTML)
                    mathExpressionArr.push(secondOperand)
                }
                else {
                    mathExpressionArr.push(secondOperand)
                }
            }

            // Carrying out the calculation of the expression if array contains
            // exactly three elements (operator, operand, operator)
            if(mathExpressionArr.length == 3)
            {
                if(mathExpressionArr[1] == '+')
                {
                    outputValue = parseFloat(mathExpressionArr[0]) + parseFloat(mathExpressionArr[2])
                }
                else if(mathExpressionArr[1] == '-')
                {
                    outputValue = parseFloat(mathExpressionArr[0]) - parseFloat(mathExpressionArr[2])
                }
                else if(mathExpressionArr[1] == '×')
                {
                    outputValue = parseFloat(mathExpressionArr[0]) * parseFloat(mathExpressionArr[2])
                }
                else if(mathExpressionArr[1] == '/')
                {
                    outputValue = parseFloat(mathExpressionArr[0]) / parseFloat(mathExpressionArr[2])
                }

                // Converting to string to store in array
                outputValue = outputValue.toString()

                // Emptying array.
                mathExpressionArr = []
                secondOperand = ''

                // now ONLY output value is present in array.
                mathExpressionArr.push(outputValue)
                
                // outputing final value on screen to output value.
                screen.textContent = mathExpressionArr[0]
                firstOperand = screen.textContent

                screen.textContent = ''

                if(mathExpressionArr.length == 1) {
                    smallScreen.textContent = mathExpressionArr[0]
                }
            }
        }

        // Clearing screen (emtpying array and text content of screen)
        if(button.className == 'cl')
        {
            mathExpressionArr = []
            screen.textContent = ''
            smallScreen.textContent = ''

            if(screen.textContent.length < 18) {
                errorMsg.textContent = ''
            }

        }

        // Deleting number one by one
        if(button.className == 'del')
        {
            screen.textContent = screen.textContent.slice(0, -1);

            // if first operand is empty then store in first operand, else in second operand.
            if(mathExpressionArr.length === 0)
            {
                firstOperand = screen.textContent
            } 
            else {
                secondOperand = screen.textContent
            }
        }

        // Adding decimal point to number.
        if(button.className == 'dot')
        {
            // Add decimal point only if screen contains number and no prior decimal points.
            if(/[0-9]/.test(screen.textContent) && !(screen.textContent.includes('.')))
            {
                screen.textContent += '.'
            } else {
                return
            }
        }
    })
})
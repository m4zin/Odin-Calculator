//Getting buttons and screens.
const buttons = document.querySelectorAll("button");
const mainScreen = document.querySelector(".screen-text");
const outputScreen = document.querySelector(".screen-text-output");
const errorOutput = document.querySelector(".error-output");

let firstOperand = ''
let operator = ''
let secondOperand = ''

let outputValue = 0

let mathArr = []

let screenLimit = false

// Looping through all the buttons since querySelectorAll being used.
for (let i = 0; i < buttons.length; i++) {
  // Adding an event listener for each button on click.
  buttons[i].addEventListener("click", () => {

    // Checking if screen view limit has been reached.
    if(mainScreen.textContent.length == 20)
    {
        screenLimit = true
        errorOutput.textContent = 'Screen view limit reached!'
    }
    else
    {
        errorOutput.textContent = ''
    }

    if(!screenLimit)
    {
        if(buttons[i].className == 'num')
        {
            // displaying numbers on screen
            mainScreen.textContent += buttons[i].innerHTML
        }

        if(buttons[i].className == 'operator')
        {

            // if there is no first operand, dont do anything.
            if(!mainScreen.textContent)
            {
                return
            }

            if(mathArr.length == 0)
            {
                // Getting values for first operand and operator
                firstOperand = mainScreen.textContent
                operator = buttons[i].innerHTML

                // Pusing first operand and operator
                mathArr.push(firstOperand)
                mathArr.push(operator)

                // Clearing main screen.
                mainScreen.textContent = ''

                outputScreen.textContent = mathArr[0]

                // First Debug
                console.log(mathArr, 'Arr now has two elements.')

                return
            }

            if(mathArr.length == 1)
            {
                mathArr.push(buttons[i].innerHTML)
            }

            if(mathArr.length == 2)
            {
                // Getting value for second operand.
                secondOperand = mainScreen.textContent

                // Pushing secondOperand and new operator value if pressed.
                mathArr.push(secondOperand)

                console.log(mathArr, 'Arr should now have 4 elements.')

                for(let i = 0; i < mathArr.length; i++)
                {
                    if(mathArr[1] == '+')
                    {
                        outputValue = parseFloat(mathArr[0]) + parseFloat(mathArr[2])
                    }
                    else if(mathArr[1] == '-')
                    {
                        outputValue = parseFloat(mathArr[0]) - parseFloat(mathArr[2])
                    }
                    else if(mathArr[1] == '/')
                    {
                        outputValue = parseFloat(mathArr[0]) / parseFloat(mathArr[2])
                    }
                    else if(mathArr[1] == '×')
                    {
                        outputValue = parseFloat(mathArr[0]) * parseFloat(mathArr[2])
                    }
                }

                // Converting output value to string.
                outputValue = outputValue.toString()

                // Emptying array
                mathArr = []
                
                mathArr.push(outputValue)

                outputScreen.textContent = mathArr[0]
                mainScreen.textContent = ''

                console.log(mathArr, 'arr should contain 2 elements only now.')

            }

        }
    }

    if(buttons[i].className == 'equal')
    {
        if(mathArr.length == 2)
        {
            // Getting value for second operand.
            secondOperand = mainScreen.textContent

            // Pushing secondOperand and new operator value if pressed.
            mathArr.push(secondOperand)

            console.log(mathArr, 'Arr should now have 4 elements.')

            for(let i = 0; i < mathArr.length; i++)
            {
                if(mathArr[1] == '+')
                {
                    outputValue = parseFloat(mathArr[0]) + parseFloat(mathArr[2])
                }
                else if(mathArr[1] == '-')
                {
                    outputValue = parseFloat(mathArr[0]) - parseFloat(mathArr[2])
                }
            }

            // Converting output value to string.
            outputValue = outputValue.toString()

            // Emptying array
            mathArr = []
            
            mathArr.push(outputValue)

            outputScreen.textContent = mathArr[0]
            mainScreen.textContent = ''

            console.log(mathArr, 'arr should contain 2 elements only now.')
        }

        if(mathArr.length == 1)
        {
            screen.textContent = ''
            outputScreen.textContent = mathArr[0]
        }
    }

    if(buttons[i].className == 'del')
    {
        // Deleting char by char.
        mainScreen.textContent = mainScreen.textContent.slice(0, -1)
    }

    if(buttons[i].className == 'cl')
    {
        // Empting everything.
        mainScreen.textContent = ''
        outputScreen.textContent = ''
        mathArr = []
        firstOperand = ''
        secondOperand = ''
        operator = ''
    }

  });
}

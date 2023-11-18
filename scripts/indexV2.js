const screen = document.querySelector(".screen-text");
const screenTextOutput = document.querySelector(".screen-text-output");
const buttons = document.querySelectorAll("button");
const errorMsg = document.querySelector(".error-output");

let mathArr = []
let firstOperand = ''
let outputValue = ''

buttons.forEach((button) =>
  button.addEventListener("click", () => {

    // Showing clicked numbers on calc screen.
    if(button.className == "num") 
    {
        if(screen.textContent.length < 20)
        {
            screen.textContent += button.innerHTML
        }
    }

    // Deleting clicked numbers one by one.
    if(button.className == "del") {
		screen.textContent = screen.textContent.slice(0, -1);
    }

    // Clearing calc screen.
	if (button.className == "cl") 
	{
		screen.textContent = null
	} 

    if(button.className == "operator")
    {
        
        if(mathArr[1] == '+' ||
            mathArr[1] == '-' ||
            mathArr[1] == '/' ||
            mathArr[1] == '×') {

            // To determine the different operators that are clicked.
            mathArr[1] = button.innerHTML

            // Pushing the second operand after the operator, 
            // Also check if operator is pressed twice
            if(screen.textContent){
                mathArr.push(screen.textContent)
            } else {
                return
            }

            // DEBUG
            console.log('i am now here', mathArr)
            
            if(mathArr.length == 3)
            {

                if(mathArr[1] == '+')
                {
                    outputValue = parseFloat(mathArr[0]) + parseFloat(mathArr[2])
                    outputValue = outputValue.toString()
                } 
                else if (mathArr[1] == '-') 
                {
                    outputValue = parseFloat(mathArr[0]) - parseFloat(mathArr[2])
                    outputValue = outputValue.toString()
                } 
                else if (mathArr[1] == '/') 
                {
                    outputValue = parseFloat(mathArr[0]) / parseFloat(mathArr[2])
                    outputValue = outputValue.toString()
                } 
                else if (mathArr[1] == '×') {
                    outputValue = parseFloat(mathArr[0]) * parseFloat(mathArr[2])
                    outputValue = outputValue.toString()
                }

                mathArr.splice(0, 1, outputValue)
                mathArr.pop()

                // DEBUG
                console.log(mathArr)

                screen.textContent = ''
            }
        } 
        else 
        {
            firstOperand = screen.textContent
            mathArr.push(firstOperand)
            mathArr.push(button.innerHTML)

            screen.textContent = ''
    
            // DEBUG
            console.log('I am here', mathArr)
        }
    }
    
  })
);

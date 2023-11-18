const screen = document.querySelector(".screen-text");
const screenTextOutput = document.querySelector(".screen-text-output");
const buttons = document.querySelectorAll("button");
const errorMsg = document.querySelector(".error-output");

mathArr = []
let outputVal = 0;

buttons.forEach((button) =>
  button.addEventListener("click", () => {

	// Prints error if input size reaches screen view limit.
	if(screen.textContent.length == 20)
	{
		errorMsg.textContent = "Number limit reached!"
	} else {
		errorMsg.textContent = null
	}

	// Adding numbers to screen.
	if (button.className == "num" && screen.textContent.length < 20) {
		screen.textContent += button.innerHTML
	}

	// Deleting characters from calculator screen.
	if (button.className == "del")
	{
		screen.textContent = screen.textContent.slice(0, -1);
	}
	
	// Clearing calculator screen.
	if (button.className == "cl") 
	{
		screen.textContent = null
	}

	// Adding decimal point.
	if (button.className == "dot") 
	{
		// If decimal point already present.
		if(screen.textContent.includes('.')) {
			return
		} else {
			screen.textContent += '.'
		}
	}

	if(button.className == "operator") 
	{
		
	}

  })
);

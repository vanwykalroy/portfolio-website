// 1. Find the element we want to change 
const greetingElement = document.getElementById('greeting');

// 2. Get the current hour (0-23)
const currentHour = new Date().getHours();

// 3. Create a variable to hold our text
let message = "";

// 4. Decide which message to show
if (currentHour < 12) {
    message = "Good Morning! I'm Alroy.";
} else if (currentHour < 18) {
    message = "Good Afternoon! I'm Alroy."
}else {
    message = "Good Evening! I'm Alroy."
}

// 5 Update the test on the screen
greetingElement.innerText = message + " Building digital experiences in Cape Town";
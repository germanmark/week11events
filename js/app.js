function makePurple(eventDetails){
    console.log(eventDetails);
    anything.style.color = "purple";
    console.log(counter);
    counter++;
    if (counter >= 5) {
        anything.removeEventListener('click',makePurple);
    }
}

function makeRed(eventDetails){
    // console.log(eventDetails);
    console.log(eventDetails.target);
    eventDetails.target.style.color = "red";
}

function setBackground(){
    anything.style.backgroundColor="lime";
    console.log("Timeout reached");
}

function resetColor(eventDetails){
    eventDetails.target.style.color = "initial";
}

function keyboardPressed(e){
    console.log(e);
    let key = e.key;
    document.getElementById('userInput').innerText += key;
}

function intervalFunc(){
    secondCounter++;
    console.log("Interval count: "+ secondCounter);
    if (secondCounter < 60){
        secondsContainer.innerText = String(secondCounter).padStart(2, '0');
    } else if (secondCounter >= 60) {
        minuteCounter ++;
        secondCounter = 0;
        secondsContainer.innerText = String(secondCounter).padStart(2, '0');
        minutesContainer.innerText = String(minuteCounter).padStart(2, '0');
    }
}

function timerStart(){
    countInterval = setInterval(intervalFunc, 1000);
}

function timerStop(){
    clearInterval(countInterval);
    clearTimeout(timeoutEvent);
    console.log("Interval cleared");
}

// CODE START
let counter = 0;
let secondCounter = 0;
let minuteCounter = 0;
let anything = document.getElementById('heading');
let subheading = document.getElementById('subheading');
let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
// Set listeners for changing to red on hover
subheading.addEventListener('mouseover', makeRed);
anything.addEventListener('mouseover', makeRed);

// Set listeners for resetting to black when not hovering
subheading.addEventListener('mouseleave', resetColor);
anything.addEventListener('mouseleave', resetColor);

document.body.addEventListener('keypress', keyboardPressed);

anything.addEventListener('click', makePurple);
anything.addEventListener('click', function(e){
                            console.log(e);
                            if (e.shiftKey){
                                anything.style.color = "blue";
                                console.log("Shift+click happened");
                            }
                        });

let timeoutEvent = setTimeout(setBackground, 10000);
document.getElementById('timerStart').addEventListener('click', timerStart);
document.getElementById('timerStop').addEventListener('click', timerStop);


let countInterval;

let str = "hello";
console.log(str.padStart(10,'-'));

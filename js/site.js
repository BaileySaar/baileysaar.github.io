console.log('Test Message');

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

if (isMorning == true)
{
    document.querySelector('welcome')
    welcome.textContent = "Good Morning!"
}
else if (isAfternoon == true)
{
    document.querySelector('welcome')
    welcome.textContent = "Good Afternoon!"
}
else if (isEvening == true)
{
    document.querySelector('welcome')
    welcome.textContent = "Good Evening!"
}

localStorage.setItem('It\'s a secret to everybody.', 'Seeds bear new life when flowers dare to fade')
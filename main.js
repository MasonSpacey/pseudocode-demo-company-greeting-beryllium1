
let greeting
let dayWeekInput =  prompt('What day of the week is today?')
let dayWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
let friHoliday = prompt('Is friday a Holiday?')
let isHoliday = true

let empHours = prompt('How many hours have you worked so far this week?')
let hoursWarning


if (dayWeekInput === dayWeek[0]) {
greeting = `<h3>Looks like somebody's got a case of the Monday's...</h3>`
} else if (dayWeekInput === dayWeek[1]) {
    greeting = `<h3>Another day, another <strike>Domination</strike> Dollar!</h3>`
} else if (dayWeekInput === dayWeek[2]) {
    greeting =`<h3>Hump Dayyyyy</h3>`
} else if (dayWeekInput === dayWeek[3]) {
    greeting = `<h3>You've almost made it through another week</h3>`
            if (friHoliday === 'yes'){
                greeting = `<h1>REMINDER</h1> <br/>
                <h3>Friday is a holiday, do not report to work. Enjoy your three day weekend...</h3>`
            }
} else if (dayWeekInput === dayWeek[4]) {
    greeting = `<h3>Happy Friday! You made it through another week! Now all you have to do 
                    is get through today and do it all over again :)</h3>`
}

if (empHours > 35) {
   greeting +=`<h1>WARNING</h1> <br/>
   <h3>You are approaching 40 hours. Exceeding this amount of hours can result in 
   <strike>extermination</strike> termination.`
}
 
document.write(greeting)

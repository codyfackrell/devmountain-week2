///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

let totalAcres = 0;

for (i = 0; i < 7; i++) {
    totalAcres += fujiAcres[i];
    totalAcres += galaAcres[i];
    totalAcres += pinkAcres[i];
}

console.log(totalAcres)

// I initally had 'fujiAcres.length' as the condition arguement in the for loop. While that would have worked, because each array were 7 indexs long, it could have been confusing for other developers reading the code. 



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

const averageDailyAcres = (totalAcres / (fujiAcres.length + galaAcres.length + pinkAcres.length))

console.log(averageDailyAcres)

// While I knew that there were 21 values in the three arrays, I figured it wouldn't always be practical to know the exact number. I wanted to figure out an alternative way to find the average. I decided to sum to total of length of each array to be the divisor.


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

while (acresLeft > 0) {
    acresLeft -= averageDailyAcres
    days += 1;   
}

console.log(days)


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = fujiAcres.slice(0, 7)
let galaTons = galaAcres.slice(0, 7)
let pinkTons = pinkAcres.slice(0, 7)

for (i = 0; i < 7; i++) {
    fujiTons[i] *= 6.5;
    galaTons[i] *= 6.5;
    pinkTons[i] *= 6.5;
}

console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for (i = 0; i < 7; i++) {
    fujiPounds += fujiTons[i];
    galaPounds += galaTons[i];
    pinkPounds += pinkTons[i];
}

fujiPounds *= 2000;
galaPounds *= 2000;
pinkPounds *= 2000;

console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)

// I started by inititalizing each variable as 0 to later store the total pounds for each variety in. I created a for loop to sum the total tons for each variety. I initially included the "varietyAcres *= 2000" in the for loop and was getting a massive number logged. I realized it was looping each 7 times, producing a big number. I took those out of the for loop and logged the correct number of pounds. 



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = (fujiPounds *= fujiPrice)
let galaProfit = (galaPounds *= galaPrice )
let pinkProfit = (pinkPounds *= pinkPrice)

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)

// I initially had the varietyProfit variables initalizied to 0 then below the variables, I had the equation to calculate total pounds. I realized the current method would be easier and less lines of code. After the switch, it wasn't working. I relized I forgot the = rather than *=. I have done this multiple times and it took a minute to relaize. 



// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

var totalProfit = (fujiProfit + galaProfit + pinkProfit)

console.log(totalProfit)

// total profit for the week was $547,170. Thats $28.45MM/yr. Seems like a great profit to me!
let name = prompt("What is your name?");
let hour = new Date().getHours();

if (hour < 12) {
    console.log("Good morning, " + name + "!");
} else if (hour < 18) {
    console.log("Good afternoon, " + name + "!");
} else {
    console.log("Good evening, " + name + "!");
}

let birthYear = prompt("What is your birth year?");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

let daysLived = age * 365;
console.log("You have lived approximately " + daysLived + " days!");

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
var total = document.getElementById("total");
var items = document.getElementById("items");
var busPrice = 2000000;
var firPrice = 5000000;
var ticketAmount = 0;
var first = false;
var bus = false;

var ticketNum = document.getElementById("fticket");
const ticketForm = (input) => {
    ticketAmount = input.value;
    
    if (first) {
        total.textContent = "$" + firPrice*ticketAmount;
        items.textContent = firPrice + " x " + ticketAmount;
    } else if (bus){
        total.textContent = "$" + busPrice*ticketAmount;
        items.textContent = busPrice + " x " + ticketAmount;
    } else {
        total.textContent = "------";
        items.textContent = "------";
    }
}

var plan_btn = document.getElementById("plan-btn");

var first_click1 = document.getElementById("plan-2");
first_click1.addEventListener("click", () => {
    first = true;
    bus = false;
    plan_btn.textContent = "First Class";
    total.textContent = "$" + firPrice*ticketAmount;
    items.textContent = firPrice + " x " + ticketAmount;
})

var business_click1 = document.getElementById("plan-1");
business_click1.addEventListener("click", () => {
    bus = true;
    first = false;
    plan_btn.textContent = "Business Class";
    total.textContent = "$" + busPrice*ticketAmount;
    items.textContent = busPrice + " x " + ticketAmount;
})

var date_btn = document.getElementById("date-btn");

var date1_click = document.getElementById("date-1");
date1_click.addEventListener("click", () => {
    date_btn.textContent = "June 26th";
})

var date2_click = document.getElementById("date-2");
date2_click.addEventListener("click", () => {
    date_btn.textContent = "January 25th";
})

var location_btn = document.getElementById("location-btn");

var location1_click = document.getElementById("location-1");
location1_click.addEventListener("click", () => {
    location_btn.textContent = "Billings, Montana";
})

var location2_click = document.getElementById("location-2");
location2_click.addEventListener("click", () => {
    location_btn.textContent = "Burnt Porcupine, Maine";
})


var submit = document.getElementById("submit-btn");
submit.addEventListener("click", () => {
    location_btn.textContent = "Launch Site";
    date_btn.textContent = "Date";
    plan_btn.textContent = "Price Plan";
    total.textContent = "------";
    items.textContent = "------";
})


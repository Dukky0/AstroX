var total = document.getElementById("total");

var plan_btn = document.getElementById("plan-btn");

var first_click1 = document.getElementById("plan-2");
first_click1.addEventListener("click", () => {
    plan_btn.textContent = "First Class";
    total.textContent = "$5,000,000";
})

var business_click1 = document.getElementById("plan-1");
business_click1.addEventListener("click", () => {
    plan_btn.textContent = "Business Class";
    total.textContent = "$2,000,000";
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
})


const form = document.querySelector(".date_of_birth_container");
const amount = document.getElementById("amount");
const timespend = document.querySelectorAll(".time-container h3");
const submit = document.querySelector(".btn");
form.addEventListener("submit", (e) => {
  e.preventDefault();
 

	
  setInterval(lifespan, 1000);
	
  
});
function lifespan() {
	
	// console.log(value);
      
	const dob = new Date(amount.value);
	const dob_date = dob.getTime();
	const currentTime = new Date();
	// console.log(currentTime.getTime());
      
	// remaing time
	const TimeSpent = currentTime.getTime() - dob_date;
	// console.log(`you have lived ${remaingTime}`);
      
	// times of the years
	const oneyear = 1000 * 60 * 60 * 24 * 365;
	const leapyear_day = TimeSpent / (oneyear * 4);
	const onemonth = 1000 * 60 * 60 * 24 * 30;
	const oneday = 1000 * 60 * 60 * 24;
	const onehour = 1000 * 60 * 60;
	const onemin = 1000 * 60;
      
	let years = Math.floor(TimeSpent / oneyear);
	let months = Math.floor((TimeSpent % oneyear) / onemonth);
	let days = Math.floor((TimeSpent % onemonth) / oneday);
	let hours = Math.floor((TimeSpent % oneday) / onehour);
	let mins = Math.floor((TimeSpent % onehour) / onemin);
	let secs = Math.floor((TimeSpent % onemin) / 1000);
      
	const finalTime = [years, months, days, hours, mins, secs];
	console.log(finalTime);
	function format(waqt) {
		if (waqt <= 9) return `0${waqt}`;

		else return waqt;
	}

	timespend.forEach((onething, index) => {
		onething.textContent = format(finalTime[index]);
	      });
}

// SETTING BUTTON UPLOAD 
const btn = document.querySelector(".date_of_birth_container label")

btn.addEventListener("click",()=> {
	submit.classList.toggle("active");
	amount.classList.toggle("active");
	
})



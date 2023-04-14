const formEl = document.querySelector(".calculator_container");
const resultEl = document.querySelector(".result");
formEl.addEventListener("submit", (e) => {
	e.preventDefault();

	const maxMarks = 400;
	const formData = new FormData(formEl);
	// console.log(formData);

	const data = {};
	formData.forEach((value, item) => {
		data[item] = +value;
	})
	// console.log(data); 
	const totalMarks = data.maths + data.english + data.hindi + data.science;
	let percentage = (totalMarks / maxMarks) * 100;
	let percent=percentage.toString();
	console.log(percent);
	console.log(typeof (percent))
	percent = percent.slice(0, 5);

	resultEl.textContent=`you have got ${totalMarks} from 400 and ${percent}%`
})
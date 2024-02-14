//your JS code here. If required.
const form = document.querySelector('.form');
form.addEventListener('submit',(e)=>{
	e.preventDefault();
	const fname = form.firstname.value;
	const lname = form.lastname.value;
	const number = form.number.value;
	const email = form.email.value;
	alert(`first Name: ${fname} Last Name: ${lname} Number: ${number} Email ID: ${email}`)
	
})
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function(evt){
	evt.preventDefault();
	checkInputs();
})

const inputs = document.querySelectorAll('input');


inputs.forEach(input=>{
	input.addEventListener('focusout',function(evt){
	
		const $this = this;
		const icon = document.createElement('em')
		const span = document.createElement('span')
		const message = ' '+$this.getAttribute('aria-details').toLowerCase() + ' is required'
		const p = document.createElement('p');
		icon.classList.add('fa','fa-exclamation-circle');
		span.textContent = message;
		p.classList.add('error-message');
		p.prepend(icon)
		p.appendChild(span)
		
		if($this.value === ""){
			$this.classList.add("error")
			$this.classList.remove("success")
			//$this.parentElement.innerHTML(p)
			
		}
		if(!($this.value === "")){
		 $this.classList.add("success")
		 $this.classList.remove("error")
		
		}
	})
	
})
// / hdh fhjdhkdjf hdj







form.addEventListener('submit', e => {
	e.preventDefault();
	
	
	alert("submitted")
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value;
	alert(username)
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		username.classList.add('error')
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

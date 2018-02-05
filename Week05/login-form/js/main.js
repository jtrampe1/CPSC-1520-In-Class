var loginForm = document.querySelector('.frm-login');

loginForm.addEventListener('submit', function (evt) {
	// The evt.target is the <form> element
	var form = evt.target;
	// A form elemnt has a collection called elements which hold values that will be submitted from the form
	// Each input on the form will have the control`s id attribute as a property

	// Any property can be accessed as though it were a string like "index" to an array

	var pass2 = form.elements["passwordInfo"]
	// pass2 is an <input type"password"> elemnt in the elements collection

	// short access to the field elements
	var user = form.elements.username;
	var pass = form.elements.userpass;
	// flag for invalid form
	var valid = true;
	// error display variables
	var errorList = document.querySelector('ul.error');
	var errors = '';

	// 1. user cannot be empty
	if (user.value.trim() == '') {
		errors += '<li>username cannot be empty</li>';
		// the previous line is equivalent to the following:
		// errors = errors + '<li>username cannot be empty</li>';
		valid = false;
	}

	// 2. password cannot be empty
	if (pass.value.trim() == '') {
		errors += '<li>password cannot be empty</li>';
		valid = false;
	}

	// if NOT validForm, then...
	if (!valid) {
		// do not submit the form
		evt.preventDefault();
		// display the errors
		errorList.innerHTML = errors;
	}
});
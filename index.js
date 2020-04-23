document.forms.login.addEventListener('submit', (e) => {
	e.preventDefault();

	const notification = document.getElementById('login-notification');

	const email = e.target.email.value;
	const password = e.target.password.value;

	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			notification.textContent = 'You have successfully logged in';
			notification.classList.remove('is-hidden');
			notification.classList.add('is-primary');
			window.location.pathname = 'home.html';
		})
		.catch((err) => {
			notification.textContent = err.message;
			notification.classList.remove('is-hidden');
			notification.classList.add('is-danger');
		});
});

document.forms.register.addEventListener('submit', (e) => {
	e.preventDefault();

	const notification = document.getElementById('register-notification');

	const email = e.target.email.value;
	const password = e.target.password.value;

	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			notification.textContent = 'You have successfully registered';
			notification.classList.remove('is-hidden');
			notification.classList.add('is-primary');
			window.location.pathname = 'home.html';
		})
		.catch((err) => {
			notification.textContent = err.message;
			notification.classList.remove('is-hidden');
			notification.classList.add('is-danger');
		});
});

firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		window.location = 'home.html';
	}
});

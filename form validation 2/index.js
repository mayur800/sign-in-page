const form = document.getElementById('registrationForm');
const successMes = document.getElementById('successMes');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Reset previous messages
  clearMes();

  // Validate each field
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const city = document.getElementById('city');
  const phone = document.getElementById('phone');

  if (!validateUsername(username.value)) {
    displayError('username', 'Invalid username');
  }

  if (!validateEmail(email.value)) {
    displayError('email', 'Invalid email');
  }

  if (!validatePassword(password.value)) {
    displayError('password', 'Invalid password');
  }

  if (!validateCity(city.value)) {
    displayError('city', 'Invalid city');
  }

  if (!validatePhone(phone.value)) {
    displayError('phone', 'Invalid phone number');
  }

  if (FormValid()) {
    successMes.textContent = 'Registration successful!';
  }
});

function clearMes() {
  successMessage.textContent = '';
  const errorMes = document.querySelectorAll('.error');
  errorMes.forEach(message => {
    message.textContent = '';
  });
}

function displayError(field, message) {
  const errorElement = document.getElementById(`${field}Error`);
  errorElement.textContent = message;
}

function validateUsername(username) {
  // Add your username validation logic here
  return username.length >= 3;
}

function validateEmail(email) {
  // Add your email validation logic here
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  // Add your password validation logic here
  return password.length >= 6;
}

function validateCity(city) {
  // Add your city validation logic here
  return city.length > 0;
}

function validatePhone(phone) {
  // Add your phone number validation logic here
  return /^\d{10}$/.test(phone);
}

function FormValid() {
  const errorMes = document.querySelectorAll('.error');
  for (const message of errorMes) {
    if (message.textContent !== '') {
      return false;
    }
  }
  return true;
}

// =====================
// CERTIFICATION "OTHER" TOGGLE
// =====================

var certificationSelect = document.getElementById('certification');
var otherInput = document.getElementById('other');

certificationSelect.addEventListener('change', function () {
  if (this.value === 'other') {
    otherInput.disabled = false;
    otherInput.required = true;
  } else {
    otherInput.disabled = true;
    otherInput.required = false;
    otherInput.value = '';
  }
});


// =====================
// JOB TYPE "OTHER" TOGGLE
// =====================

var jobTypeSelect = document.getElementById('jobtype');
var otherJobTypeInput = document.getElementById('other-jobtype');

jobTypeSelect.addEventListener('change', function () {
  if (this.value === 'other') {
    otherJobTypeInput.disabled = false;
    otherJobTypeInput.required = true;
  } else {
    otherJobTypeInput.disabled = true;
    otherJobTypeInput.required = false;
    otherJobTypeInput.value = '';
  }
});


// =====================
// FORM SUBMIT
// =====================

var registrationForm = document.getElementById('registrationForm');
var submitBtn = registrationForm.querySelector('.btn-submit');

registrationForm.addEventListener('submit', function (e) {
  e.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var certification = certificationSelect.value === 'other' ? otherInput.value : certificationSelect.value;
  var dob = document.getElementById('dob').value;
  var location = document.getElementById('location').value;
  var jobtype = jobTypeSelect.value === 'other' ? otherJobTypeInput.value : jobTypeSelect.value;
  var password = document.getElementById('password').value;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Registering...';

  setTimeout(function () {
    alert(
      'Registration successful!\n\n' +
      'Name: ' + name + '\n' +
      'Email: ' + email + '\n' +
      'Certification: ' + certification + '\n' +
      'Date of Birth: ' + (dob || 'Not provided') + '\n' +
      'Location: ' + location + '\n' +
      'Job Type: ' + jobtype
    );
    registrationForm.reset();
    otherInput.disabled = true;
    otherJobTypeInput.disabled = true;
    submitBtn.disabled = false;
    submitBtn.textContent = 'Register';
  }, 1500);
});

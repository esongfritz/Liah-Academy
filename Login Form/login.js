// Get form elements
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const phoneInput = document.getElementById('phone');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const submitBtn = document.querySelector('.btn-submit');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Email input validation
emailInput.addEventListener('blur', function() {
    if (this.value && !emailRegex.test(this.value)) {
        emailError.textContent = 'Please enter a valid email address';
        this.style.borderColor = '#e74c3c';
    } else {
        emailError.textContent = '';
        this.style.borderColor = '#e0e0e0';
    }
});

emailInput.addEventListener('focus', function() {
    emailError.textContent = '';
    this.style.borderColor = '#667eea';
});

// Password input validation
passwordInput.addEventListener('blur', function() {
    if (this.value && this.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        this.style.borderColor = '#e74c3c';
    } else {
        passwordError.textContent = '';
        this.style.borderColor = '#e0e0e0';
    }
});

passwordInput.addEventListener('focus', function() {
    passwordError.textContent = '';
    this.style.borderColor = '#667eea';
});

// Phone input - format as user types
phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 0) {
        if (value.length <= 3) {
            value = value;
        } else if (value.length <= 6) {
            value = value.slice(0, 3) + '-' + value.slice(3);
        } else {
            value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
        }
    }
    
    e.target.value = value;
});

// Form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    emailError.textContent = '';
    passwordError.textContent = '';
    
    // Validate form
    let isValid = true;
    
    if (!emailInput.value) {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    if (!passwordInput.value) {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        isValid = false;
    }
    
    if (isValid) {
        // Disable submit button during submission
        submitBtn.disabled = true;
        submitBtn.textContent = 'Logging in...';
        
        // Simulate API call
        setTimeout(function() {
            alert('Login successful!\n\nEmail: ' + emailInput.value + '\nPhone: ' + (phoneInput.value || 'Not provided'));
            
            // Reset form
            loginForm.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Login';
        }, 1500);
    }
});

// Real-time validation feedback
emailInput.addEventListener('input', function() {
    if (this.value && !emailRegex.test(this.value)) {
        this.style.borderColor = '#e74c3c';
    } else {
        this.style.borderColor = '#e0e0e0';
    }
});

passwordInput.addEventListener('input', function() {
    if (this.value && this.value.length < 6) {
        this.style.borderColor = '#e74c3c';
    } else {
        this.style.borderColor = '#e0e0e0';
    }
});

// Clear error on input change
[emailInput, passwordInput].forEach(input => {
    input.addEventListener('input', function() {
        const errorElement = this === emailInput ? emailError : passwordError;
        errorElement.textContent = '';
    });
});

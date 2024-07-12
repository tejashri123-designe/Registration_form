function validateForm() {
    document.getElementById('nameErr').innerHTML = '';
    document.getElementById('emailErr').innerHTML = '';
    document.getElementById('mobileErr').innerHTML = '';
    document.getElementById('userErr').innerHTML = '';
    document.getElementById('passErr').innerHTML = '';

    var name = document.forms["Form"]["name"].value;
    var email = document.forms["Form"]["email"].value;
    var mobile = document.forms["Form"]["mobile"].value;
    var username = document.forms["Form"]["username"].value;
    var password = document.forms["Form"]["password"].value;

    // Validate name
    var namePattern = /^[a-zA-Z\s]+$/;
    if (name == "") {
        document.getElementById('nameErr').innerHTML = 'Name is required';
        return false;
    } else if (!namePattern.test(name)) {
        document.getElementById('nameErr').innerHTML = 'Name must only contain letters and spaces';
        return false;
    }

    // Validate email
    var emailPattern = /^[a-zA-Z0-9._-]+@(gmail\.com|rediffmail\.com|yahoo\.com)$/;
    if (email == "") {
        document.getElementById('emailErr').innerHTML = 'Email is required';
        return false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailErr').innerHTML = 'Invalid email address';
        return false;
    }

    // Validate mobile
    var mobilePattern = /^[789][0-9]{9}$/;
    if (mobile == "") {
        document.getElementById('mobileErr').innerHTML = 'Mobile number is required';
        return false;
    } else if (!mobilePattern.test(mobile)) {
        document.getElementById('mobileErr').innerHTML = 'Invalid mobile number';
        return false;
    }

    // Validate username
    var usernamePattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&]).{6,20}$/;
    if (username == "") {
        document.getElementById('userErr').innerHTML = 'Username is required';
        return false;
    } else if (!usernamePattern.test(username)) {
        document.getElementById('userErr').innerHTML = 'Username must be 6-20 characters long, include one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)';
        return false;
    }

    // Validate password
    var passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&]).{6,20}$/;
    if (password == "") {
        document.getElementById('passErr').innerHTML = 'Password is required';
        return false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById('passErr').innerHTML = 'Password must be 6-20 characters long, include one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)';
        return false;
    }

    // Store data in local storage
    var formData = {
        name: name,
        email: email,
        mobile: mobile,
        username: username,
        password: password
    };
    var existingData = JSON.parse(localStorage.getItem('formData')) || [];
    existingData.push(formData);
    localStorage.setItem('formData', JSON.stringify(existingData));

    window.location.href = 'table.html'; // Redirect to table page
    return false;
}
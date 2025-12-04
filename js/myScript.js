function confirm_update() {
    if (confirm("Press 'OK' to confirm or 'Cancel' to edit.")) {
        alert("Your message was successfully sent at " + getTime());
        return true;
    } else {
        return false;
    }
}

function getTime() {
    var t = new Date();
    currentTime = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();

    return currentTime;
}

function resetErrorDisplay() {

    // Set variables for toggle elements
    var a = document.getElementById('validate-fname');
    var b = document.getElementById('validate-lname');
    var c = document.getElementById('validate-sAddress');
    var d = document.getElementById('validate-city');
    var e = document.getElementById('validate-state');
    var f = document.getElementById('validate-zCode');
    var g = document.getElementById('validate-message');

    // Add no-display class to all toggle elements
    a.className += " no-display";
    b.className += " no-display";
    c.className += " no-display";
    d.className += " no-display";
    e.className += " no-display";
    f.className += " no-display";
    g.className += " no-display";

    return;
}

function validateForm() {

    // Reset Error Displays
    resetErrorDisplay();

    // Set form validation flag to true
    var valid = true;

    // Set variables for form fields
    var a = document.forms["contactForm"]["fname"].value;
    var b = document.forms["contactForm"]["lname"].value;
    var c = document.forms["contactForm"]["sAddress"].value;
    var d = document.forms["contactForm"]["city"].value;
    var e = document.forms["contactForm"]["state"].value;
    var f = document.forms["contactForm"]["zcode"].value;
    var g = document.forms["contactForm"]["message"].value;

    // Set variables for toggle elements
    var h = document.getElementById('validate-fname');
    var i = document.getElementById('validate-lname');
    var j = document.getElementById('validate-sAddress');
    var k = document.getElementById('validate-city');
    var l = document.getElementById('validate-state');
    var m = document.getElementById('validate-zCode');
    var n = document.getElementById('validate-message');

    // Validate First Name Field
    if (a == "" || a.length <= 1 || a.length >= 20) {
        h.classList.toggle("no-display");
        valid = false;
    }

    // Validate Last Name Field
    if (b == "" || b.length < 3 || b.length >= 20) {
        i.classList.toggle("no-display");
        valid = false;
    }

    // Validate Street Address Field
    if (c == "") {
        j.classList.toggle("no-display");
        valid = false;
    }

    // Validate City Field
    if (d == "") {
        k.classList.toggle("no-display");
        valid = false;
    }

    // Validate State Field
    if (e.length != 2) {
        l.classList.toggle("no-display");
        valid = false;
    }

    // Validate Zip Code Field
    if (f == "") {
        m.classList.toggle("no-display");
        valid = false;
    }

    // Validate Zip Code Field
    if (g == "") {
        n.classList.toggle("no-display");
        valid = false;
    }

    if (valid) {
        return confirm_update();
    } else {
        return false;
    }
}
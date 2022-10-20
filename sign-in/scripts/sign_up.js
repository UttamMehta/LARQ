let usersData = JSON.parse(localStorage.getItem('usersData')) || [];
document.querySelector("button").addEventListener("click", function () {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let passwordConfirm = document.getElementById('passwordConfirm').value;
    let country = document.getElementById('country').value;
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let addressLineOne = document.getElementById('addressLineOne').value;
    let company = document.getElementById('company').value;
    let suburbCity = document.getElementById('suburbCity').value;
    let stateProvince = document.getElementById('stateProvince').value;
    let zipPostcode = document.getElementById('zipPostcode').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let flag = true;
    let obj = {
        email: email,
        password: password,
        country: country,
        firstName: firstName,
        lastName: lastName,
        addressLineOne: addressLineOne,
        company: company,
        stateProvince: stateProvince,
        suburbCity: suburbCity,
        zipPostcode: zipPostcode,
        phoneNumber: phoneNumber,
    }
    usersData.map(function (el, i) {
        if (el.email == email) {
            alert("Email already in use!");
            flag = false;
        }
    })
    if(password.length<8&&flag){
        alert("password is too short!");
        flag = false;
    }
    if(passwordConfirm!=password&&flag){
        alert("Password is not same!");
        flag = false;
    }
    if (flag) {
        usersData.push(obj);
        localStorage.setItem('usersData', JSON.stringify(usersData));
        location.href = "../sign-in.html";
    }
})

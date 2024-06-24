"use strict";
//inputs
const userName = document.getElementById("userName");
const userFullName = document.getElementById("userFullName");
const userPassword = document.getElementById("userPassword");
const userBio = document.getElementById("userBio");

//button
const submitBtn = document.getElementById("submitBtn");

window.onload = function () {
    console.log("it works");
    submitBtn.onclick = onClickedSubmitBtn;
}

function onClickedSubmitBtn() {
    console.log("the button works");
    console.log(userName.value);

    let bodyData = {
        username: document.getElementById("userName").value,
        fullName: document.getElementById("userFullName").value,
        password: document.getElementById("userPassword").value,
        bio: document.getElementById("userBio").value,
    }

    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/users", {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {"Content-type":
                    "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
        .catch(err =>{
        console.log("error");
    })

}
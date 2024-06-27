"use strict";
const userName = document.getElementById("userName");
const userFullName = document.getElementById("userFullName");
const userBio = document.getElementById("userBio");
const accountCreated = document.getElementById("accountCreated");
const acountUpdated = document.getElementById("acountUpdated");
const createPost = document.getElementById("createPost");
const clearBtn = document.getElementById("clearBtn");

// button
const submitBtn = document.getElementById("submitBtn");


window.onload = function () {
    console.log("it works");
    getLogingUserData();
    submitBtn.onclick = onClickedSubmitBtn;
    clearBtn.onclick = () => {
        clearPostTextBox();
    }

}

function onClickedSubmitBtn() {
    
    createPostForUser();
    clearPostTextBox();

    alert="hi";
}

function getLogingUserData() {
    let token = getLoginData();
    // console.log(token);
    let userDataName = token.username;
    // console.log(userDataName);

    const loginToken = getLoginData();
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${loginToken.token}`,
        },
    };

    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/users/" + userDataName, options)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            userName.innerHTML = "User Namer: " + data.username;
            userBio.innerHTML = "User Bio: " + data.bio;
            userFullName.innerHTML = "User Full name: " + data.fullName;
            accountCreated.innerHTML = data.createdAt;
            acountUpdated.innerHTML = data.acountUpdated;

        })

}

function createPostForUser() {

    const loginToken = getLoginData();

    let postBody = {
        "text": document.getElementById("createPost").value,
    }
    
    const options = {
        method: "POST",
        body: JSON.stringify(postBody),
        headers: {
            "Content-type":
                "application/json; charset=UTF-8",
            Authorization: `Bearer ${loginToken.token}`,
        },
    };

    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })

        .catch(err => {
            console.log("error");
        })
}

function clearPostTextBox() {
    createPost.value = '';
}
/* Posts Page JavaScript */

"use strict";

const submitBtn = document.getElementById("submitBtn");

window.onload = function(){
    submitBtn.onclick = onClickedSubmitBtn;
    getAllUsersPost();
    // createCard("cardOutPut");
}

function onClickedSubmitBtn(){
    logout ();
}

function getAllUsersPost(){

    const loginToken = getLoginData ();
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${loginToken.token}`,
        },
    };

    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", options)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        for(let user of data){
            createCardsOfUserPosts(user);
        }

        // for(let user in data){
        //     // console.log(user)
        //     createCardsOfUserPosts(data[user]);
        //     if(user%2 == 0){
        //         // console.log(user);
        //         createCard("cardOutPut", "https://source.unsplash.com/random/200x300", "race car", "Lets race");
                
        //     }
        //     else if(user%2 !=0){
        //         console.log(user);
        //         createCard2("cardOutPut");
        //     }
        // }

    })
}

function createCardsOfUserPosts(userData){
    let colDiv = document.createElement("div");
    colDiv.classList.add("col-12", "p-5","shadow","mt-5", "text-center");
    

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "mt-5", "mb-5", "p-5");

    let divHeader = document.createElement("div");
    divHeader.classList.add("card-header");
    divHeader.innerHTML = "User Id: " + userData._id;
    cardDiv.appendChild(divHeader);

    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body", "p-5");
    cardDiv.appendChild(cardBodyDiv);

    let h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerHTML = "Username: " + userData.username;
    cardBodyDiv.appendChild(h5);

    let p = document.createElement("p");
    p.classList.add("card-text");
    p.innerHTML = userData.text;
    cardBodyDiv.appendChild(p);


    const cardOutPut = document.getElementById("cardOutPut");
    colDiv.appendChild(cardDiv);
    cardOutPut.appendChild(colDiv);

}

// function createCard(containerId, imgSrc, imgAlt, cardText) {
//     // Create card element
//     const card = document.createElement('div');
//     card.classList.add("col-1")
//     card.className = 'card';
//     card.style.width = '25rem';
//     card.style.height = '18rem';

//     // Create image element
//     const img = document.createElement('img');
//     img.src = imgSrc;
//     img.className = 'card-img-top';
//     img.alt = imgAlt;
//     img.style.width = '100%';
//     img.style.height = "100%";

//     // Create card body element
//     const cardBody = document.createElement('div');
//     cardBody.className = 'card-body';

//     // Create card text element
//     const text = document.createElement('p');
//     text.className = 'card-text';
//     text.textContent = cardText;

//     // Append image to card
//     card.appendChild(img);

//     // Append card text to card body
//     cardBody.appendChild(text);

//     // Append card body to card
//     card.appendChild(cardBody);

//     // Append card to container
//     const container = document.getElementById(containerId);
//     container.appendChild(card);
// }

// function createCard2(containerId) {
//     // Create the card div
//     const card = document.createElement('div');
//     card.classList.add("col-6");
//     card.className = 'card w-25';

//     // Create the card body div
//     const cardBody = document.createElement('div');
//     cardBody.className = 'card-body';

//     // Create the card title
//     const cardTitle = document.createElement('h5');
//     cardTitle.className = 'card-title';
//     cardTitle.textContent = 'Card title';

//     // Create the card text
//     const cardText = document.createElement('p');
//     cardText.className = 'card-text';
//     cardText.textContent = 'With supporting text below as a natural lead-in to additional content.';

//     // Create the button
//     const button = document.createElement('a');
//     button.className = 'btn btn-primary';
//     button.href = '#';
//     button.textContent = 'Button';

//     // Append the title, text, and button to the card body
//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(cardText);
//     cardBody.appendChild(button);

//     // Append the card body to the card
//     card.appendChild(cardBody);

//     // Append the card to the specified container
//     document.getElementById(containerId).appendChild(card);
// }



// token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IklhbjI1IiwiaWF0IjoxNzE5MjM1OTMyLCJleHAiOjE3MTkzMjIzMzJ9.lqI0rL1yDOM-oZ1BLiiGPgX6W2pkFEmIDJcA7ysKYLA

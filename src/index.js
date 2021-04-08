function addAnswers () {

    const usernet = document.createElement("div");
     usernet.className = "form-campYou";

    const voce = document.createElement("div");
     voce.className = "user";
     voce.innerText = "Você";

    const inputChat = document.getElementById("answer");

    const nameChat = document.createElement("label");
    nameChat.className = "response";
    nameChat.innerText = inputChat.value;

    usernet.appendChild(voce);
    usernet.appendChild(nameChat);

    const chatView = document.getElementById("chatView");

    chatView.appendChild(usernet);

    inputChat.value = "";
    
    gotoBottom("chatView");
};

function gotoBottom(id) {
  var element = document.getElementById(id);
  element.scrollTop = element.scrollHeight - element.clientHeight;
}

const formCamp = document.getElementById("formCamp");
formCamp.addEventListener("submit", function(event) {
  event.preventDefault();

  addAnswers();
});

window.addEventListener("load", function(event) {
  event.gotoBottom("chatView");
});






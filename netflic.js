document.addEventListener("DOMContentLoaded", loadAllFunctions);

function loadAllFunctions() {
  let information = document.querySelectorAll(".information");
  let plusBtn = document.querySelectorAll(".fa-plus");
  let signIn = document.getElementById("signIn");
  let popup = document.querySelector(".popup");
  let submitEmail = document.getElementById("submitEmail");
  let email = document.getElementById("email");

  plusBtn.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      btn.classList.toggle("fa-plus-animation");

      if (information[index].style.display === "block") {
        information[index].style.display = "none";
      } else {
        information[index].style.display = "block";
      }
    });
  });

  signIn.addEventListener("click", function () {
    popup.classList.add("popupclose");
  });

  submitEmail.addEventListener("click", function (e) {
    e.preventDefault();
    if (email.value != "") {
      popup.classList.remove("popupclose");
      email.style.borderColor = "green";
    } else {
      alert("please Enter the email address");
      email.focus();
    }

    let collectEmail = email.value.trim();
    let storedData = JSON.parse(localStorage.getItem("email")) || [];

    storedData.push(collectEmail);
    localStorage.setItem("email", JSON.stringify(storedData));
  });

  window.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.classList.remove("popupclose");
    }
  });
}

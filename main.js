// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Provided function to mimic server call
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  const hearts = document.querySelectorAll(".like-glyph");

  // Ensure the error modal is hidden initially
  errorModal.classList.add("hidden");

  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      if (heart.innerText === "♡" || heart.innerText === "&#x2661;") {
        // Simulate server call for liking a heart
        mimicServerCall()
          .then(() => {
            heart.innerText = "♥";
            heart.classList.add("activated-heart");
          })
          .catch((error) => {
            showError(error);
          });
      } else {
        // Unlike the heart
        heart.innerText = "♡";
        heart.classList.remove("activated-heart");
      }
    });
  });

  function showError(error) {
    const errorMessage = document.getElementById("modal-message");
    errorMessage.innerText = error;
    errorModal.classList.remove("hidden");
    setTimeout(() => {
      errorModal.classList.add("hidden");
    }, 3000);
  }
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

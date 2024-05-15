function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
      strings: "Shall I compare thee to a summer’s day?",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
    
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
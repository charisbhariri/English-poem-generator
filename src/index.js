function displayPoem(response) {

    console.log ("poem generated");
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "3dftf96cba65coffa30599a0e2058e45";
    let prompt = `Generate an english poem about ${instructionsInput.value}`;
    let context = `User instructions are:You are a romantic poem expectand love to write short poem , your mission is to generate a 4 line in basic HTML and separate each line with a <br />.Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with "SheCodes Ai" inside a <strong> element`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⌛Generating an English poem about ${instructionsInput.value}</div>`;
    console.log("generating poem");
    console.log(`prompt: ${prompt}`);
    console.log(`context: ${context}`);

    axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
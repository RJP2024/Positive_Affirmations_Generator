function generateAffirmation(event) {
  event.preventDefault();

  new Typewriter("#affirmation", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let affirmationormElement = document.querySelector("#affirmation-generator-form");
affirmationFormElement.addEventListener("submit", generateAffirmation);
// script.js
// Interactive Random Fun Fact Generator

document.addEventListener("DOMContentLoaded", function () {
    // Array of fun facts about Irene
    const facts = [
      "Irene trained under SM Entertainment for 5 years before debuting with Red Velvet in 2014.",
      "Her official designated color in Red Velvet is pink, and her representative animal is a rabbit.",
      "She has a sensitive sense of smell and prefers fresh fabric softeners over strong perfumes.",
      "She starred as the lead character Lee Hyun-ji in the 2021 film 'Double Patty'.",
      "She is known in the K-pop industry as an 'Original Visual' for her classic beauty and stage presence.",
      "In 2020, she and Seulgi formed Red Velvet's first official sub-unit and released the hit mini-album 'Monster'.",
      "Before debuting, Irene appeared in Henry Lau's music video for '1-4-3 (I Love You)'."
    ];
  
  
    let lastIndex = -1;
  
  
    const factBtn = document.getElementById("fact-btn");
    const factDisplayText = document.getElementById("fact-display-text");
  
    // Add click event listener to the button
    factBtn.addEventListener("click", function () {
      let randomIndex;
  
      // Pick a random index that is different from the last one
      do {
        randomIndex = Math.floor(Math.random() * facts.length);
      } while (randomIndex === lastIndex);
  
      // Update lastIndex to the current selection
      lastIndex = randomIndex;
  
      // Display the selected fun fact
      factDisplayText.innerText = facts[randomIndex];
    });
  });
  
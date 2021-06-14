async function getWordsFromApi() {
    const response = await fetch(
      "https://random-word-api.herokuapp.com/word?number=30"
    );
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  };


getWordsFromApi()
  .then((data) => startTyping(data))
  .catch((err) => {
    console.log("api-error " + err);
    startTyping(defaultWords);
  });


//   function startTyping(words) {
//     let score = 0;
//     let time = 20;
//     let difficulty =
//       localStorage.getItem("difficulty") !== null
//         ? localStorage.getItem("difficulty")
//         : "medium";
  
//     difficultySelect.value = difficulty;
  
//     text.focus();
  
//     const timeInterval = setInterval(updateTime, 1000);
  
//     function getRandomWord() {
//       return words[Math.floor(Math.random() * words.length)];
//     }
  
//     function addWordToDOM() {
//       randomWord = getRandomWord();
//       word.innerHTML = randomWord;
//     }
  
//     function updateScore() {
//       score++;
//       scoreEl.innerHTML = score;
//     }
  
//     function gameOver() {
//       endgameEl.innerHTML = `
//       <h1>Time ran out</h1>
//       <p>Your final score is ${score}</p>
//       <button onclick="location.reload()">Reload</button>
//       `;
  
//       endgameEl.style.display = "flex";
//     }
  
//     function updateTime() {
//       time--;
//       timeEl.innerHTML = time + "s";
  
//       if (time === 0) {
//         clearInterval(timeInterval);
//         gameOver();
//       }
//     }
  
//     addWordToDOM();
  
//     text.addEventListener("input", (e) => {
//       const insertedText = e.target.value;
  
//       if (insertedText === randomWord) {
//         updateScore();
//         addWordToDOM();
//         e.target.value = "";
  
//         if (difficulty === "hard") {
//           time += 1;
//         } else if (difficulty === "medium") {
//           time += 3;
//         } else {
//           time += 5;
//         }
//         updateTime();
//       }
//     });
  
//     settingsBtn.addEventListener("click", () =>
//       settings.classList.toggle("hide")
//     );
  
//     settingsForm.addEventListener("change", (e) => {
//       difficulty = e.target.value;
//       localStorage.setItem("difficulty", difficulty);
//     });
//   }

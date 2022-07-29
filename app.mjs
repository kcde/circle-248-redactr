function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  let submitButton = document.getElementById("submitButton");
  let mainText = document.getElementById("mainText");
  let wordsToRedact = document.getElementById("wordsToRedact");
  let errorText = document.getElementById("errorText");
  let finalText = document.getElementById("finalText");
  let timeTaken = document.getElementById("timeTaken");
  let textCount = document.getElementById("textCount");
  var errorWords = [];

  submitButton.addEventListener("click", redactr);

  function redactr() {
    var startTime = Date.now()
    var newString = " "+mainText.value;
    let wordArray = wordsToRedact.value.split(/\s+/i);
    const errorWords = [];
    
    for (let i = 0; i < wordArray.length; i++) {
      const re = new RegExp("\\s+" + wordArray[i] + "(?!\\S)", "g");
      if (!re.test(newString)) {
        errorWords.push(" "+wordArray[i]);
      } else {
        newString = newString.replace(re, " "+"*".repeat(wordArray[i].length));
      }
    };
    if (errorWords.length > 0) {
      errorText.innerHTML = "The following whole words were not found:<br>" + errorWords.toString();
    } else {
      errorText.innerHTML = "";        
    }
    finalText.innerHTML = newString;
    var endTime = Date.now();
    var elapsedTime = (endTime - startTime) + "&nbsp;milliseconds";
    timeTaken.innerHTML = "Time taken:  "+elapsedTime;
    textCount.innerHTML = "Amount of words in original text:  " + mainText.value.split(/\s+/).length;
  };

  const header = document.querySelector('h2');
  header.style.color = "green";
  if (header) {
    header.textContent = 'CIRCLE 258 IS ON TRACK';
  }
};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //
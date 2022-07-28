function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  console.log('You mean this magic!!!!');

  let text = document.getElementById("input").value

redactr_btn.addeventlistener(click, redactr);

let mainText = document.getElementById("mainText");
let wordsToRedact = document.getElementById("redactr-words");
let finalText = document.getElementById("final-text");  
let btn = document.getElementById("redactr-btn");

function redactr () {
    var newstring = mainText.value;
    
    let myArray= wordsToRedact.value.split(/\s+/);
    console.log(myArray);
    myArray.forEach (relaceWord);
    function replaceWord (value){
        console.log (value);
        newString = newString.replace(value, "*".repeat(value.length));
};

finalText.innerHTML = newString;

  console.log (finalText.innerHTML);
  
}

  const header = document.querySelector('h2');
  header.style.color = "green";
  if (header) {
    header.textContent = 'CIRCLE 258 IS ON TRACK';
  }
};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //
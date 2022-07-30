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
	let wordCount = document.getElementById("wordCount");
	let totalWordCount = document.getElementById("totalWordCount");


	var errorWords = [];

	submitButton.addEventListener("click", redactr);

	function redactr() {
		var startTime = Date.now()
		var newString = " " + mainText.value;
		let wordArray = wordsToRedact.value.split(/\s+/i);
		const errorWords = [];
		let redactedWordsCount = {}

		for (let i = 0; i < wordArray.length; i++) {
			const re = new RegExp("\\s+" + wordArray[i] + "(?!\\S)", "gi");

			if (!re.test(newString)) {
				errorWords.push(" " + wordArray[i]);
			} else {
				const numberOfOccurences = (newString.match(re) || []).length

				newString = newString.replace(re, " " + "*".repeat(wordArray[i].length));

				redactedWordsCount = { ...redactedWordsCount, [wordArray[i]]: numberOfOccurences }

			}
		};

		console.log(redactedWordsCount)
		if (errorWords.length > 0) {
			errorText.innerHTML = "The following whole words were not found:<br>" + errorWords.toString();
		} else {
			errorText.innerHTML = "";
		}
		finalText.innerHTML = newString;
		var endTime = Date.now();
		var elapsedTime = (endTime - startTime) + "&nbsp;milliseconds";
		timeTaken.innerHTML = "Time taken:  " + elapsedTime;
		textCount.innerHTML = "Amount of words in original text:  " + mainText.value.split(/\s+/).length;

		let totalRedactedWordCount = 0

		let redactedCountList = ``

		for (const word in redactedWordsCount) {
			redactedCountList += `<li> "${word}" - ${redactedWordsCount[word]} occurence${totalRedactedWordCount !== 1 ? 's' : ''} </li>`
			totalRedactedWordCount += redactedWordsCount[word]
		}

		wordCount.innerHTML = redactedCountList
		totalWordCount.innerHTML = `A total of ${totalRedactedWordCount} occurence${totalRedactedWordCount !== 1 ? 's were' : ' was'} redacted`

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
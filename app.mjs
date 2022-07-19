function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  console.log('make magic in here!');

  const header = document.querySelector('h2');
  header.style.color = "green";
  if (header) {
    header.textContent = 'CIRCLE 258 IS ON TRACK';
  }
};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //
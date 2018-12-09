(() => {
  "use strict";
})();

// Set title from local storage or default
document.querySelector("#title").innerHTML =
  localStorage["title"] || "Enter title here";

// Set content from local storage or default
document.querySelector("#content").innerHTML =
  localStorage["content"] || "Enter content here";

// Auto save to local storage
setInterval(function() {
  // Save title
  localStorage["title"] = document.querySelector("#title").innerHTML;
  // Save content
  localStorage["content"] = document.querySelector("#content").innerHTML;
});

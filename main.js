// home.js
document.addEventListener("DOMContentLoaded", () => {
    let storedText = sessionStorage.getItem("inputText");
    if (storedText) {
        console.log(storedText); 
        document.getElementById("name").textContent = storedText;
    }
});

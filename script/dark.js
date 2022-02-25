const darkToggle = document.querySelector("#dark");
let isDark = false;

darkToggle.addEventListener("click", (event) => {
    isDark = !isDark;
    document.head.querySelector("#theme").href = isDark ? "style/dark.css" : "style/light.css";
    event.target.innerHTML = isDark ? "☀️" : "🌙";
});
const darkToggle = document.querySelector("#dark");
let isDark = false;

darkToggle.addEventListener("click", (event) => {
    isDark = !isDark;
    document.body.classList.toggle("dark");
    event.target.innerHTML = isDark ? "☀️" : "🌙";
});
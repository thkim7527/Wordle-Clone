let isDark = false;
const button = document.querySelector("#dark");
const body = document.querySelector("body");
const themeColor = document.querySelector("meta[name=theme-color]");

button.addEventListener("click", (event) => {
    isDark = !isDark;

    //button
    button.innerHTML = isDark ? "☀️" : "🌙";
    button.blur();

    //body
    isDark ? body.classList.replace("light", "dark") : body.classList.replace("dark", "light");

    //theme-color
    themeColor.content = isDark ? "black" : "white";
});

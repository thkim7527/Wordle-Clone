let isDark = false;
const darkToggle = document.querySelector("#dark");
const themeColor = document.querySelector("meta[name=theme-color]");

darkToggle.addEventListener("click", (event) => {
    isDark = !isDark;
    event.target.innerHTML = isDark ? "☀️" : "🌙";
    event.target.blur();

    themeColor.content = isDark ? "black" : "white";
    console.log(themeColor.content);
});
